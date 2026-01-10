"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, X, Image as ImageIcon, Video as VideoIcon } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

interface PhotoUploadContentProps {
    onSubmit: (files: File[], message: string) => void
    remainingTime: number
    onFilesChange?: (hasFiles: boolean) => void
}

interface UploadedFile {
    file: File
    preview: string
    id: string
}

export function PhotoUploadContent({ onSubmit, remainingTime, onFilesChange }: PhotoUploadContentProps) {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        return `${mins} dakika`
    }

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        
        if (uploadedFiles.length + files.length > 10) {
            toast.error("En fazla 10 dosya yükleyebilirsiniz")
            return
        }

        const newFiles = files.map(file => {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'video/mp4', 'video/quicktime']
            if (!validTypes.includes(file.type)) {
                toast.error(`${file.name} desteklenmeyen bir dosya türü`)
                return null
            }

            // Validate file size (max 10MB)
            if (file.size > 10 * 1024 * 1024) {
                toast.error(`${file.name} çok büyük (max 10MB)`)
                return null
            }

            return {
                file,
                preview: URL.createObjectURL(file),
                id: `${file.name}-${Date.now()}-${Math.random()}`
            }
        }).filter((file): file is UploadedFile => file !== null)

        setUploadedFiles(prev => {
            const newList = [...prev, ...newFiles]
            onFilesChange?.(newList.length > 0)
            return newList
        })
        
        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }, [uploadedFiles.length, onFilesChange])

    const handleRemoveFile = useCallback((id: string) => {
        setUploadedFiles(prev => {
            const file = prev.find(f => f.id === id)
            if (file) {
                URL.revokeObjectURL(file.preview)
            }
            const newList = prev.filter(f => f.id !== id)
            onFilesChange?.(newList.length > 0)
            return newList
        })
    }, [onFilesChange])

    const handleSubmitForm = useCallback(() => {
        if (uploadedFiles.length === 0) {
            toast.error("Lütfen en az bir fotoğraf veya video yükleyin")
            return
        }

        setIsSubmitting(true)
        const files = uploadedFiles.map(f => f.file)
        onSubmit(files, message)
        
        // Simulate processing time before showing success
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 2000)
    }, [uploadedFiles, message, onSubmit])

    const handleAddMore = useCallback(() => {
        fileInputRef.current?.click()
    }, [])

    if (isSubmitting) {
        return (
            <div className="py-12 text-center">
                <div className="max-w-md mx-auto space-y-6">
                    <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Talebiniz Gönderiliyor...
                        </h3>
                        <p className="text-gray-600 text-lg mb-4">
                            Fotoğraflarınız profesyonel ekibimize iletiliyor.
                        </p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700 font-medium">
                            Size en uygun fiyat teklifini hazırlıyoruz. Bu süre zarfında lütfen ekranınızı kapatmayın.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    if (isSubmitted) {
        return (
            <div className="py-12 text-center">
                <div className="max-w-md mx-auto space-y-6">
                    <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Talebiniz İnceleniyor
                        </h3>
                        <p className="text-gray-600 text-lg mb-2">
                            Profesyonel ekibimiz fotoğraflarınızı inceliyor.
                        </p>
                        <p className="text-orange-600 font-semibold text-xl">
                            {formatTime(remainingTime)} içinde size dönüş yapacağız
                        </p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                            Size en uygun fiyat teklifini hazırlıyoruz. Bu süre zarfında lütfen ekranınızı kapatmayın.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Upload Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <Label className="text-lg font-semibold text-gray-900">
                        Fotoğraflar / Videolar {uploadedFiles.length > 0 && `(${uploadedFiles.length})`}
                    </Label>
                    {uploadedFiles.length > 0 && uploadedFiles.length < 10 && (
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={handleAddMore}
                            className="gap-2"
                        >
                            <Upload className="h-4 w-4" />
                            Daha Fazla Ekle
                        </Button>
                    )}
                </div>

                {/* File Input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp,video/mp4,video/quicktime"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                />

                {/* Upload Area or Grid */}
                {uploadedFiles.length === 0 ? (
                    <button
                        type="button"
                        onClick={handleAddMore}
                        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-orange-400 hover:bg-orange-50 transition-colors group"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                                <Upload className="h-8 w-8 text-gray-400 group-hover:text-orange-600 transition-colors" />
                            </div>
                            <p className="text-lg font-medium text-gray-900 mb-2">
                                Fotoğraf veya Video Yükleyin
                            </p>
                            <p className="text-sm text-gray-500 mb-4">
                                Tıklayarak dosya seçin veya sürükleyip bırakın
                            </p>
                            <p className="text-xs text-gray-400">
                                JPG, PNG, WEBP, MP4 • Max 10MB • En fazla 10 dosya
                            </p>
                        </div>
                    </button>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {uploadedFiles.map((item) => (
                            <div
                                key={item.id}
                                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 group"
                            >
                                {item.file.type.startsWith('image/') ? (
                                    <Image
                                        src={item.preview}
                                        alt="Upload preview"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                        <VideoIcon className="h-12 w-12 text-gray-400" />
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFile(item.id)}
                                    className="absolute top-2 right-2 w-8 h-8 bg-black/70 hover:bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="h-4 w-4 text-white" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Message Section */}
            <div>
                <Label htmlFor="message" className="text-lg font-semibold text-gray-900 mb-3 block">
                    Mesajınız (İsteğe Bağlı)
                </Label>
                <Textarea
                    id="message"
                    placeholder="Tadilat ihtiyacınız hakkında detaylı bilgi verin..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                    Örnek: Banyomun tamamen yenilenmesini istiyorum. Yaklaşık 8m² alana sahip.
                </p>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                    <ImageIcon className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                        <p className="font-medium mb-1">İpucu:</p>
                        <p>Farklı açılardan çekilen net fotoğraflar, size daha doğru fiyat teklifi vermemize yardımcı olacaktır.</p>
                    </div>
                </div>
            </div>

            {/* Hidden Submit - will be triggered by dialog footer */}
            <button
                id="photo-upload-submit"
                type="button"
                onClick={handleSubmitForm}
                className="hidden"
            />
        </div>
    )
}

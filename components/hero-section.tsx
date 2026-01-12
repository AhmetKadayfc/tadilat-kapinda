"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Phone, Video } from "lucide-react"
import { motion } from "framer-motion"
import { ActionDialog } from "@/components/action-dialog"
import { PhotoUploadContent } from "@/components/photo-upload-content"
import { PersonnelChatContent } from "@/components/personnel-chat-content"
import { VideoCallContent } from "@/components/video-call-content"
import { toast } from "sonner"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type ActionBox = {
    icon: typeof Camera | typeof Phone | typeof Video
    title: string
    description: string
    color: string
    dialogDescription: string
}

export function HeroSection() {
    const [openDialog, setOpenDialog] = useState<number | null>(null)
    const [hidePhotoFooter, setHidePhotoFooter] = useState(false)
    const [hasActiveChat, setHasActiveChat] = useState(false)
    const [showEndChatConfirmation, setShowEndChatConfirmation] = useState(false)
    const [showEndCallConfirmation, setShowEndCallConfirmation] = useState(false)

    const actionBoxes: ActionBox[] = [
        {
            icon: Camera,
            title: "Fotoğraf / Video Yükle",
            description: "Tadilat alanınızın fotoğrafını yükleyin",
            color: "from-orange-500 to-orange-600",
            dialogDescription: "Tadilat yapmak istediğiniz alanın fotoğraf veya videosunu yükleyerek hızlıca fiyat teklifi alabilirsiniz.",
        },
        {
            icon: Phone,
            title: "Personel Evime Gelsin",
            description: "Uzman ekibimiz evinize gelsin",
            color: "from-orange-600 to-red-600",
            dialogDescription: "Uzman ekibimiz size en uygun zamanda evinize gelerek ücretsiz keşif yapacaktır.",
        },
        {
            icon: Video,
            title: "Görüntülü Görüşme Başlat",
            description: "Hemen online görüşme yapın",
            color: "from-amber-500 to-orange-500",
            dialogDescription: "Uzmanlarımızla görüntülü görüşme yaparak anlık olarak tadilat ihtiyacınızı değerlendirebilirsiniz.",
        },
    ]

    const handleActionClick = (index: number) => {
        setOpenDialog(index)
    }

    const handleCloseDialog = () => {
        setOpenDialog(null)
        setHidePhotoFooter(false) // Reset footer visibility when dialog closes
    }

    const handlePhotoUploadSubmit = useCallback((files: File[], message: string) => {
        // Simulate sending to backend
        console.log("Uploading files:", files)
        console.log("Message:", message)

        toast.success("Fotoğraflarınız başarıyla gönderildi!", {
            description: "Profesyonel ekibimiz en kısa sürede size dönüş yapacak.",
        })

        // Hide footer after successful submission
        setHidePhotoFooter(true)

        // Note: In a real app, you would send this to your backend here
        // Example: await uploadPhotos(files, message)
    }, [])

    return (
        <>
            <div id="hakkimizda"></div>
            <div id="surdurulebilirlik"></div>
            <section id="hizmetlerimiz" className="relative min-h-[90vh] flex items-center bg-linear-to-br from-orange-50 via-white to-amber-50">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-center mb-12"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                            >
                                <span className="bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                    Bir fotoğrafla başla,
                                </span>
                                <br />
                                <span className="text-orange-800">bir telefonla bitir.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl md:text-2xl text-gray-600 font-medium mb-4"
                            >
                                30 dakikada gerçek uzmanlardan fiyat al.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-lg text-gray-500 max-w-2xl mx-auto"
                            >
                                Tadilat ihtiyacınız için profesyonel çözümler, hızlı fiyat teklifi ve güvenilir hizmet.
                            </motion.p>
                        </motion.div>

                        {/* Action Boxes */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {actionBoxes.map((box, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <Card
                                            className="group cursor-pointer border-2 border-transparent hover:border-orange-200 hover:shadow-2xl transition-all duration-300"
                                            onClick={() => handleActionClick(index)}
                                        >
                                            <CardContent className="p-8 text-center">
                                                <motion.div
                                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                    className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br ${box.color} mb-6`}
                                                >
                                                    <box.icon className="h-10 w-10 text-white" />
                                                </motion.div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                    {box.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                    {box.description}
                                                </p>
                                                <Button
                                                    variant="outline"
                                                    className="w-full group-hover:bg-orange-600 group-hover:text-white transition-colors"
                                                >
                                                    Hemen Başla
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Dialogs */}
                {actionBoxes.map((box, index) => {
                    // Photo Upload Dialog (index 0)
                    if (index === 0) {
                        return (
                            <ActionDialog
                                key={`${index}-${openDialog === index}`}
                                isOpen={openDialog === index}
                                hideFooter={hidePhotoFooter}
                                onClose={handleCloseDialog}
                                title={box.title}
                                description={box.dialogDescription}
                                onSubmit={() => {
                                    // Trigger the submit from PhotoUploadContent
                                    document.getElementById('photo-upload-submit')?.click()
                                }}
                            >
                                <PhotoUploadContent
                                    onSubmit={handlePhotoUploadSubmit}
                                    remainingTime={0}
                                />
                            </ActionDialog>
                        )
                    }

                    // Personnel Chat Dialog (index 1)
                    if (index === 1) {
                        return (
                            <ActionDialog
                                key={`${index}-${openDialog === index}`}
                                isOpen={openDialog === index}
                                onClose={handleCloseDialog}
                                title={box.title}
                                description={box.dialogDescription}
                                submitLabel="Konuşmayı Bitir"
                                hideCancelButton={true}
                                onSubmit={() => {
                                    // Eğer aktif konuşma varsa kullanıcıyı uyar
                                    if (hasActiveChat) {
                                        setShowEndChatConfirmation(true)
                                    } else {
                                        // Konuşma başlamamışsa direkt kapat
                                        handleCloseDialog()
                                    }
                                }}
                            >
                                <PersonnelChatContent
                                    onMessagesChange={(count) => setHasActiveChat(count > 1)}
                                />
                            </ActionDialog>
                        )
                    }

                    // Video Call Dialog (index 2)
                    if (index === 2) {
                        return (
                            <ActionDialog
                                key={`${index}-${openDialog === index}`}
                                isOpen={openDialog === index}
                                onClose={handleCloseDialog}
                                title={box.title}
                                description={box.dialogDescription}
                                hideFooter={true}
                            >
                                <VideoCallContent
                                    remainingTime={0}
                                    onEndCall={() => setShowEndCallConfirmation(true)}
                                />
                            </ActionDialog>
                        )
                    }

                    // Other dialogs - placeholder for future
                    return (
                        <ActionDialog
                            key={`${index}-${openDialog === index}`}
                            isOpen={openDialog === index}
                            onClose={handleCloseDialog}
                            title={box.title}
                            description={box.dialogDescription}
                        >
                            {/* Generic placeholder content - will be customized later */}
                        </ActionDialog>
                    )
                })}
            </section>

            {/* End Chat Confirmation Dialog */}
            <AlertDialog open={showEndChatConfirmation} onOpenChange={setShowEndChatConfirmation}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Konuşmayı Bitirmek İstiyor musunuz?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Devam eden bir konuşmanız var. Konuşmayı bitirirseniz, uzmanımızla olan görüşmeniz sonlandırılacaktır.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>İptal Et</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                toast.success("Konuşma sonlandırıldı", {
                                    description: "Ekibimiz en kısa sürede sizinle iletişime geçecek.",
                                })
                                setShowEndChatConfirmation(false)
                                setHasActiveChat(false)
                                handleCloseDialog()
                            }}
                        >
                            Evet, Bitir
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* End Call Confirmation Dialog */}
            <AlertDialog open={showEndCallConfirmation} onOpenChange={setShowEndCallConfirmation}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Aramayı Sonlandırmak İstiyor musunuz?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Görüntülü görüşmeyi sonlandırmak üzeresiniz. Uzmanımızla olan bağlantınız kesilecektir.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>İptal Et</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                toast.success("Görüşme sonlandırıldı", {
                                    description: "Ekibimiz en kısa sürede sizinle iletişime geçecek.",
                                })
                                setShowEndCallConfirmation(false)
                                handleCloseDialog()
                            }}
                        >
                            Evet, Sonlandır
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

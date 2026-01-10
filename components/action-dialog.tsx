"use client"

import { useEffect, useState, useCallback } from "react"
import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Clock, X } from "lucide-react"

interface ActionDialogProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
    children?: React.ReactNode
}

const TOTAL_TIME = 30 * 60 // 30 minutes in seconds

export function ActionDialog({ isOpen, onClose, title, description, children }: ActionDialogProps) {
    const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME)

    // Timer countdown logic
    useEffect(() => {
        if (!isOpen || timeRemaining <= 0) {
            return
        }

        const interval = setInterval(() => {
            setTimeRemaining((time) => Math.max(0, time - 1))
        }, 1000)

        return () => clearInterval(interval)
    }, [isOpen, timeRemaining])

    // Format time as MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    // Calculate progress percentage
    const progressPercentage = (timeRemaining / TOTAL_TIME) * 100

    const handleSubmit = useCallback(() => {
        // Handle form submission logic here
        console.log("Form submitted")
        onClose()
    }, [onClose])

    const handleCancel = useCallback(() => {
        onClose()
    }, [onClose])

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0" showCloseButton={false}>
                {/* Header with Timer */}
                <DialogHeader className="border-b bg-linear-to-r from-orange-50 to-amber-50 p-6 space-y-4">

                    {/* Timer Bar */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-orange-700">
                                <Clock className="h-4 w-4" />
                                <span className="font-medium">Kalan Süre</span>
                            </div>
                            <span
                                className={`font-mono font-bold ${
                                    timeRemaining < 300 ? "text-red-600" : "text-orange-600"
                                }`}
                            >
                                {formatTime(timeRemaining)}
                            </span>
                        </div>
                        <Progress
                            value={progressPercentage}
                            className={`h-2 ${
                                timeRemaining < 300 ? "bg-red-100" : "bg-orange-100"
                            }`}
                        />
                    </div>

                    {/* Title and Description */}
                    <div>
                        <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                            {title}
                        </DialogTitle>
                        <DialogDescription className="text-gray-600">
                            {description}
                        </DialogDescription>
                    </div>
                </DialogHeader>

                {/* Content Body - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6">
                    {children || (
                        <div className="space-y-4">
                            {/* Generic Placeholder Content */}
                            <div className="min-h-[300px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                                <div className="text-center text-gray-500">
                                    <p className="text-lg font-medium mb-2">İçerik Alanı</p>
                                    <p className="text-sm">
                                        Bu alan her kutu için özelleştirilecek içeriği gösterecek
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer with Action Buttons */}
                <DialogFooter className="border-t bg-gray-50 p-6 flex-row justify-end gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancel}
                        className="min-w-[120px]"
                    >
                        İptal Et
                    </Button>
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        className="min-w-[120px] bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                    >
                        Gönder
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

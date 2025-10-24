"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { type ReactNode } from "react"

interface ModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    children: ReactNode
    showCloseButton?: boolean
    size?: "sm" | "md" | "lg" | "xl"
    className?: string
}

const Modal = ({
    open,
    onOpenChange,
    title,
    children,
    showCloseButton = true,
    size = "md",
    className = "",
}: ModalProps) => {
    const getSizeClasses = () => {
        switch (size) {
            case "sm":
                return "max-w-sm"
            case "md":
                return "max-w-[30rem]"
            case "lg":
                return "max-w-lg"
            case "xl":
                return "max-w-xl"
            default:
                return "max-w-md"
        }
    }

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 bg-black/70" />
                <Dialog.Content
                    className={`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-1/2 left-1/2 z-50 w-full ${getSizeClasses()} border-dark-shade-2 bg-dark-shade-8 -translate-x-1/2 -translate-y-1/2 rounded-lg border shadow-lg ${className}`}
                >
                    <div className="flex items-center justify-between px-5 py-4">
                        <Dialog.Title className="text-center font-semibold text-black w-full">
                            {title}
                        </Dialog.Title>
                        {showCloseButton && (
                            <Dialog.Close asChild>
                                <button className="focus:ring-primary cursor-pointer rounded p-1 hover:bg-[#f3f3f1] active:bg-[#f3f3f1] focus:outline-none">
                                    <X size={20} className="text-gray-400" />
                                </button>
                            </Dialog.Close>
                        )}
                    </div>

                    <div className="p-4">{children}</div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal

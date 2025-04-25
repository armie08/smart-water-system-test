"use client"

// Simplified toast hook implementation
import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  duration?: number
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, props])

    // Auto dismiss
    if (props.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t !== props))
      }, props.duration || 3000)
    }

    return id
  }

  return { toast, toasts }
}

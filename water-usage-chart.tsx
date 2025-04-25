"use client"

import { useEffect, useState } from "react"

export function WaterUsageChart() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Loading water usage chart...</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full h-full relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-muted-foreground">Loading water usage data...</p>
          </div>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg"
            role="img"
            aria-label="Water usage chart showing daily consumption patterns over the past week, with highest usage on weekdays and lower usage on weekends"
          >
            <p className="text-muted-foreground">Water usage chart will be displayed here</p>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

export function WaterQualityChart() {
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
        <p className="text-muted-foreground">Loading water quality chart...</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">pH Level (Last 7 Days)</h3>
            <div className="flex-1 relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-muted-foreground">Loading pH level data...</p>
                </div>
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg"
                  role="img"
                  aria-label="pH level chart showing stable readings between 7.0 and 7.5 over the past week"
                >
                  <p className="text-muted-foreground">pH level chart will be displayed here</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">Turbidity (Last 7 Days)</h3>
            <div className="flex-1 relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-muted-foreground">Loading turbidity data...</p>
                </div>
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg"
                  role="img"
                  aria-label="Turbidity chart showing consistently low readings below 1.0 NTU over the past week"
                >
                  <p className="text-muted-foreground">Turbidity chart will be displayed here</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">TDS (Last 7 Days)</h3>
            <div className="flex-1 relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-muted-foreground">Loading TDS data...</p>
                </div>
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg"
                  role="img"
                  aria-label="Total Dissolved Solids chart showing readings between 100 and 150 ppm over the past week"
                >
                  <p className="text-muted-foreground">TDS chart will be displayed here</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-4">Bacterial Count (Last 7 Days)</h3>
            <div className="flex-1 relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-muted-foreground">Loading bacterial count data...</p>
                </div>
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg"
                  role="img"
                  aria-label="Bacterial count chart showing zero CFU/ml readings consistently over the past week"
                >
                  <p className="text-muted-foreground">Bacterial count chart will be displayed here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

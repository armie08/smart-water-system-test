"use client"

import { useEffect, useState } from "react"
import { Cloud, CloudDrizzle, CloudRain, Sun } from "lucide-react"

export function WeatherForecast() {
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
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Loading weather forecast...</p>
      </div>
    )
  }

  // Mock weather data
  const forecast = [
    { day: "Today", weather: "Heavy Rain", temp: "28°C", precipitation: "85%", icon: CloudRain },
    { day: "Tomorrow", weather: "Light Rain", temp: "29°C", precipitation: "60%", icon: CloudDrizzle },
    { day: "Wednesday", weather: "Cloudy", temp: "30°C", precipitation: "30%", icon: Cloud },
    { day: "Thursday", weather: "Partly Cloudy", temp: "31°C", precipitation: "20%", icon: Cloud },
    { day: "Friday", weather: "Sunny", temp: "32°C", precipitation: "5%", icon: Sun },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {isLoading
        ? Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"
              >
                <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full my-4"></div>
                <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 w-14 bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
              </div>
            ))
        : forecast.map((day) => (
            <div key={day.day} className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium">{day.day}</h3>
              <day.icon className="h-12 w-12 my-4 text-maroon-600 dark:text-maroon-400" aria-label={day.weather} />
              <p className="text-lg font-bold">{day.temp}</p>
              <p className="text-sm">{day.weather}</p>
              <p className="text-sm text-maroon-600 dark:text-maroon-400 mt-2">{day.precipitation} rain</p>
            </div>
          ))}
    </div>
  )
}

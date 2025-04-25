import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-red-50 to-red-100 dark:from-red-950 dark:to-slate-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/images/cnsc-logo.png"
                    alt="Camarines Norte State College Logo - A maroon pentagon with a white circular center containing a yellow triangle with educational symbols"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <h2 className="text-xl font-bold text-maroon-700 dark:text-maroon-300">
                    Camarines Norte State College
                  </h2>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-maroon-700 dark:text-maroon-300">
                    Smart Rainwater Harvesting & AI-Powered Filtration System
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                    Sustainable water supply solution for Camarines Norte State College (CNSC)
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login" aria-label="Login to the dashboard">
                    <Button className="bg-maroon-600 hover:bg-maroon-700 focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2">
                      Login to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-900">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-maroon-400 to-red-500 opacity-20"
                    aria-hidden="true"
                  ></div>
                  <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                    <div className="rounded-full bg-maroon-100 p-4 dark:bg-maroon-900" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-maroon-600 dark:text-maroon-300"
                        aria-hidden="true"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="M12 22V2"></path>
                        <path d="M12 12H2"></path>
                        <path d="M12 12c0-5.523 4.477-10 10-10"></path>
                      </svg>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-maroon-700 dark:text-maroon-300">
                      AI-Powered Water Management
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Utilizing cutting-edge AI and IoT technologies to ensure sustainable water supply for CNSC
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-maroon-50 p-3 dark:bg-maroon-900/50">
                        <p className="text-sm font-medium text-maroon-700 dark:text-maroon-300">Smart Collection</p>
                      </div>
                      <div className="rounded-lg bg-maroon-50 p-3 dark:bg-maroon-900/50">
                        <p className="text-sm font-medium text-maroon-700 dark:text-maroon-300">AI Filtration</p>
                      </div>
                      <div className="rounded-lg bg-maroon-50 p-3 dark:bg-maroon-900/50">
                        <p className="text-sm font-medium text-maroon-700 dark:text-maroon-300">Solar Powered</p>
                      </div>
                      <div className="rounded-lg bg-maroon-50 p-3 dark:bg-maroon-900/50">
                        <p className="text-sm font-medium text-maroon-700 dark:text-maroon-300">Real-time Monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

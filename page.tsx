"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [userType, setUserType] = useState("student")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      if (username && password) {
        toast({
          title: "Login Successful",
          description: `Welcome back, ${username}!`,
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter both username and password.",
          variant: "destructive",
        })
      }
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-red-50 to-red-100 dark:from-red-950 dark:to-slate-950">
      <div className="container flex flex-col items-center justify-center px-4 py-12 md:px-6">
        <Link
          href="/"
          className="mb-8 flex items-center text-maroon-600 hover:text-maroon-700 dark:text-maroon-400 dark:hover:text-maroon-300 focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2 rounded-md"
          aria-label="Back to home page"
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/cnsc-logo.png"
                alt="Camarines Norte State College Logo - A maroon pentagon with a white circular center containing a yellow triangle with educational symbols"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <CardTitle className="text-center text-2xl font-bold">Sign in</CardTitle>
            <CardDescription className="text-center">
              Access the Smart Rainwater Harvesting System Dashboard
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user-type" id="user-type-label">
                  User Type
                </Label>
                <RadioGroup
                  id="user-type"
                  value={userType}
                  onValueChange={setUserType}
                  className="grid grid-cols-2 gap-2"
                  aria-labelledby="user-type-label"
                >
                  <div>
                    <RadioGroupItem value="administrator" id="administrator" className="peer sr-only" />
                    <Label
                      htmlFor="administrator"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-maroon-600 peer-data-[state=checked]:text-maroon-600 dark:peer-data-[state=checked]:border-maroon-400 dark:peer-data-[state=checked]:text-maroon-400 focus-within:ring-2 focus-within:ring-maroon-500"
                    >
                      Administrator
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="teacher" id="teacher" className="peer sr-only" />
                    <Label
                      htmlFor="teacher"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-maroon-600 peer-data-[state=checked]:text-maroon-600 dark:peer-data-[state=checked]:border-maroon-400 dark:peer-data-[state=checked]:text-maroon-400 focus-within:ring-2 focus-within:ring-maroon-500"
                    >
                      Teacher
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="staff" id="staff" className="peer sr-only" />
                    <Label
                      htmlFor="staff"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-maroon-600 peer-data-[state=checked]:text-maroon-600 dark:peer-data-[state=checked]:border-maroon-400 dark:peer-data-[state=checked]:text-maroon-400 focus-within:ring-2 focus-within:ring-maroon-500"
                    >
                      Staff
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="student" id="student" className="peer sr-only" />
                    <Label
                      htmlFor="student"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-maroon-600 peer-data-[state=checked]:text-maroon-600 dark:peer-data-[state=checked]:border-maroon-400 dark:peer-data-[state=checked]:text-maroon-400 focus-within:ring-2 focus-within:ring-maroon-500"
                    >
                      Student
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  aria-required="true"
                  className="focus:ring-2 focus:ring-maroon-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="text-xs text-maroon-600 hover:text-maroon-700 dark:text-maroon-400 dark:hover:text-maroon-300 focus:outline-none focus:underline"
                    aria-label="Forgot your password? Click to reset"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-required="true"
                    className="focus:ring-2 focus:ring-maroon-500"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-maroon-600 hover:bg-maroon-700 focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2"
                disabled={isLoading}
                aria-label="Sign in to your account"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

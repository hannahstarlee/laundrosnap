'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"


export default function AuthPage() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/30 animate-float"
                        style={{
                            width: `${Math.random() * 50 + 10}px`,
                            height: `${Math.random() * 50 + 10}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 10 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            <Card className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl">
                <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90" />
                    <CardTitle className="relative z-10 text-3xl font-bold text-white text-center mb-2">LaundroSnap</CardTitle>
                    <CardDescription className="relative z-10 text-blue-100 text-center">Your laundry social network</CardDescription>
                    <div className="absolute right-4 bottom-4 opacity-20">
                    </div>
                    <div className="absolute left-4 top-4 opacity-20 rotate-12">
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="login">Log In</TabsTrigger>
                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <form onSubmit={onSubmit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="login-email">Email</Label>
                                        <Input id="login-email" type="email" placeholder="m@example.com" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="login-password">Password</Label>
                                        <Input id="login-password" type="password" required />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                                    </div>
                                    <Button type="submit" disabled={isLoading}>
                                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Log In
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                        <TabsContent value="signup">
                            <form onSubmit={onSubmit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="signup-name">Full Name</Label>
                                        <Input id="signup-name" type="text" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="signup-email">Email</Label>
                                        <Input id="signup-email" type="email" placeholder="m@example.com" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="signup-password">Password</Label>
                                        <Input id="signup-password" type="password" required />
                                    </div>
                                    <Button type="submit" disabled={isLoading}>
                                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Sign Up
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                    </Tabs>
                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between px-6 py-4">
                    <Button variant="link" className="text-sm text-blue-600">
                        Forgot password?
                    </Button>
                    <Button variant="link" className="text-sm text-blue-600">
                        Terms of Service
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
"use client"

import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"


export function LaundryFooter() {
    const router = useRouter()
    return <footer className="bg-white p-4 shadow-inner">
        <div className="flex justify-around">
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => router.push("/home")}>
                {/* <img src="/placeholder.svg?height=24&width=24" alt="Home" className="h-6 w-6 mb-1" /> */}
                Home
            </Button>
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => router.push("/explore")}>
                {/* <img src="/placeholder.svg?height=24&width=24" alt="Explore" className="h-6 w-6 mb-1" /> */}
                Explore
            </Button>
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => router.push("/impact")}>
                {/* <img src="/placeholder.svg?height=24&width=24" alt="Impact" className="h-6 w-6 mb-1" /> */}
                Impact
            </Button>
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => router.push("/profile")}>
                {/* <img src="/placeholder.svg?height=24&width=24" alt="Profile" className="h-6 w-6 mb-1" /> */}
                Profile
            </Button>
        </div>
    </footer>
}
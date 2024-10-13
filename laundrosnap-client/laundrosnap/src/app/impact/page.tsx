'use client'

import { useState } from "react"
import { Droplet, Fish, Award, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { LaundryFooter } from "@/components/footer"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ImpactPage() {
  const [microfiberImpact] = useState(150)
  const [oceanHealth] = useState(62)
  const [userStreak] = useState(5)
  const { toast } = useToast()

  const handleChallengeAccept = () => {
    toast({
      title: "Challenge Accepted!",
      description: "You're making a difference! Keep up the good work.",
    })
  }

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Your Environmental Impact</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Droplet className="h-6 w-6 text-blue-500 mr-2" />
            Microfiber Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={microfiberImpact} max={1000} className="h-2 mb-2" />
          <p className="text-sm text-gray-600">{microfiberImpact} microfibers prevented</p>
          <p className="text-xs text-gray-500 mt-1">Goal: 1,000 microfibers</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Fish className="h-6 w-6 text-blue-500 mr-2" />
            Ocean Health Contribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={oceanHealth} className="h-2 mb-2" />
          <p className="text-sm text-gray-600">{oceanHealth}% improvement</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-6 w-6 text-yellow-500 mr-2" />
            Eco-Friendly Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{userStreak} days</p>
          <p className="text-sm text-gray-600">Keep it up!</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-6 w-6 text-purple-500 mr-2" />
            Weekly Eco-Challenge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Use cold water for all your washes this week to reduce microfiber shedding!</p>
          <Button onClick={handleChallengeAccept}>Accept Challenge</Button>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-20 left-4 rounded-full" size="icon">
            <Droplet className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Microfiber Filters</DialogTitle>
            <DialogDescription>
              Reduce microfiber pollution with these recommended products
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <img src="/OIP.jpg?height=100&width=100&text=Cora+Ball" alt="Cora Ball" className="rounded-lg" />
              <div>
                <h3 className="font-semibold">Cora Ball</h3>
                <p className="text-sm text-gray-500">Catches microfibers in your wash</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <img src="/guppyfriend.jpg?height=100&width=100&text=Guppyfriend" alt="Guppyfriend Bag" className="rounded-lg" />
              <div>
                <h3 className="font-semibold">Guppyfriend Bag</h3>
                <p className="text-sm text-gray-500">Washing bag that captures microfibers</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Learn More</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {LaundryFooter()}
    </div>
  )
}
'use client'

import { useState, useRef, useEffect } from "react"
import { Camera, Heart, MessageCircle, Award, Zap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { Progress } from "@/components/ui/progress"
import { LaundryAssistantComponent } from "@/components/laundry-assistant"
import { LaundryFooter } from "@/components/footer"

// Mock data for laundry posts
const initialPosts = [
  {
    id: 1,
    author: "Sarah",
    avatar: "/r.jpg?height=40&width=40",
    image: "/image.png?height=400&width=300",
    content: "Laundry day success! 🧼✨ #FreshThreads",
    likes: 23,
    comments: 5,
    timestamp: "2 hours ago",
    streak: 3,
  },
  {
    id: 2,
    author: "Rachel",
    avatar: "/placeholder.svg?height=40&width=40",
    image: "/image2.jpg?height=400&width=300",
    content: "Conquered Mount Laundry! 🏔️👕 #LaundryWarrior",
    likes: 17,
    comments: 3,
    timestamp: "4 hours ago",
    streak: 5,
  },
  {
    id: 3,
    author: "Emma",
    avatar: "/placeholder.svg?height=40&width=40",
    image: "/image3.png?height=400&width=300",
    content: "Study break = Laundry time 📚🧦 #MultitaskingPro",
    likes: 31,
    comments: 8,
    timestamp: "1 day ago",
    streak: 7,
  },
]

export default function LaundroSnapFeed() {
  const [posts, setPosts] = useState(initialPosts)
  const [isReminderActive, setIsReminderActive] = useState(false)
  const [, setRemainingTime] = useState(300) // 5 minutes in seconds
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()
  const [userStreak, setUserStreak] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Simulate a random reminder
    const randomTime = Math.floor(Math.random() * 20000) + 5000 // Between 5 and 25 seconds
    const timer = setTimeout(() => {
      setIsReminderActive(true)
      toast({
        title: "It's Laundry Time!",
        description: "Don't break your streak! Snap a pic of your laundry session.",
        duration: 10000,
      })
    }, randomTime)

    return () => clearTimeout(timer)
  }, [])

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real app, you'd upload the file to a server here
      const newPost = {
        id: posts.length + 1,
        author: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        image: URL.createObjectURL(file),
        content: "Just did my laundry! 🧺✨ #LaundroSnap",
        likes: 0,
        comments: 0,
        timestamp: "Just now",
        streak: userStreak + 1,
      }
      setPosts([newPost, ...posts])
      setIsReminderActive(false)
      setRemainingTime(300)
      setUserStreak(prevStreak => prevStreak + 1)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
      toast({
        title: "Streak increased!",
        description: `You're on a ${userStreak + 1} day streak! Keep it up!`,
      })
    }
  }

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen relative overflow-hidden">
      {LaundryAssistantComponent()}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {["🧺", "👕", "🧦", "🧼", "✨"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <header className="bg-white p-4 shadow-md sticky top-0 z-10">
        {/* <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600" onClick={() => router.push("/")}> */}
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600" >
          LaundroSnap
        </h1>
      </header>

      <main className="p-4">
        {/* Streak Display */}
        <Card className="mb-6 overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span className="text-lg font-bold">Streak: {userStreak} days</span>
              </div>
              <Award className="h-6 w-6 text-purple-500" />
            </div>
            <Progress value={(userStreak / 7) * 100} className="mt-2" />
            <p className="text-sm text-gray-500 mt-2">7 day streak unlocks a special badge!</p>
          </CardContent>
        </Card>

        {/* Reminder / Upload Section */}
        {isReminderActive && (
          <Card className="mb-6 overflow-hidden animate-pulse">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Laundry Reminder!</h2>
                <p className="mb-4">Quick, snap a pic of your laundry session!</p>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-white text-orange-500 hover:bg-gray-100"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Snap a pic!
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Feed of Posts */}
        <ScrollArea className="h-[calc(100vh-240px)]">
          {posts.map((post) => (
            <Card key={post.id} className="mb-4 overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={post.avatar} alt={post.author} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-semibold">{post.streak}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="py-0 px-2">
                <img src={post.image} alt="Laundry snap" className="w-full h-auto" />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <p className="mb-2">{post.content}</p>
                <div className="flex justify-between w-full">
                  <Button variant="ghost" size="sm" onClick={() => handleLike(post.id)}>
                    <Heart className="h-4 w-4 mr-1 text-red-500" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1 text-blue-500" />
                    {post.comments}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </ScrollArea>
      </main>

      {/* Footer Navigation */}
      {LaundryFooter()}
    </div>
  )
}
'use client'

import { Settings, Edit, Zap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LaundryFooter } from "@/components/footer"

const userStats = {
  posts: 42,
  followers: 250,
  following: 180,
  streak: 7,
}

const achievements = [
  { id: 1, name: "7-Day Streak", icon: "🔥", description: "Completed laundry for 7 days in a row" },
  { id: 2, name: "Laundry Pro", icon: "🧼", description: "Posted 50 laundry snaps" },
  { id: 3, name: "Eco Warrior", icon: "🌿", description: "Used eco-friendly detergent for a month" },
  { id: 4, name: "Stain Master", icon: "🎨", description: "Successfully removed 10 tough stains" },
]

const userPosts = [
  { id: 1, image: "/placeholder.svg?height=150&width=150&text=Post+1" },
  { id: 2, image: "/placeholder.svg?height=150&width=150&text=Post+2" },
  { id: 3, image: "/placeholder.svg?height=150&width=150&text=Post+3" },
  { id: 4, image: "/placeholder.svg?height=150&width=150&text=Post+4" },
  { id: 5, image: "/placeholder.svg?height=150&width=150&text=Post+5" },
  { id: 6, image: "/placeholder.svg?height=150&width=150&text=Post+6" },
]

export default function ProfilePage() {
  return (
    <div className="bg-white max-w-md mx-auto bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen">
      <header className="bg-white p-4 shadow-md z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Profile
          </h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="p-4">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">@username</h2>
                <p className="text-gray-500">Laundry enthusiast 🧺</p>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <p className="font-bold">{userStats.posts}</p>
                <p className="text-sm text-gray-500">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{userStats.followers}</p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{userStats.following}</p>
                <p className="text-sm text-gray-500">Following</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">{userStats.streak} day streak</span>
            </div>
            <Button className="w-full">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="posts">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <ScrollArea className="h-[calc(100vh-450px)]">
              <div className="grid grid-cols-3 gap-1">
                {userPosts.map((post) => (
                  <img key={post.id} src={post.image} alt={`Post ${post.id}`} className="w-full h-auto" />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="achievements">
            <ScrollArea className="h-[calc(100vh-450px)]">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="mb-4">
                  <CardHeader className="flex flex-row items-center space-x-4 p-4">
                    <div className="bg-gray-100 rounded-full p-2 text-2xl">{achievement.icon}</div>
                    <div>
                      <CardTitle>{achievement.name}</CardTitle>
                      <p className="text-sm text-gray-500">{achievement.description}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </main>
      {LaundryFooter()}
    </div>
  )
}
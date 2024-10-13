'use client'

import { useState } from "react"
import { Search, Zap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LaundryFooter } from "@/components/footer"


const trendingTags = ["#LaundryDay", "#FreshAndClean", "#LaundryHacks", "#CollegeLaundry", "#LaundryArt"]

const suggestedUsers = [
  { id: 1, name: "LaundryPro", avatar: "/placeholder.svg?height=40&width=40", streak: 15 },
  { id: 2, name: "CleanQueen", avatar: "/placeholder.svg?height=40&width=40", streak: 12 },
  { id: 3, name: "FoldMaster", avatar: "/placeholder.svg?height=40&width=40", streak: 10 },
  { id: 4, name: "SoapSudSam", avatar: "/placeholder.svg?height=40&width=40", streak: 8 },
]

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("trending")

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen">
      <header className="bg-white p-4 shadow-md z-10">
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Explore
        </h1>
        <div className="relative">
          <Input type="search" placeholder="Search LaundroSnap" className="pl-10" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </header>

      <main className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="suggested">Suggested Users</TabsTrigger>
          </TabsList>
          <TabsContent value="trending">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Trending Tags</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag, index) => (
                    <Button key={index} variant="outline" size="sm">
                      {tag}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            <ScrollArea className="h-[calc(100vh-300px)] mt-4">
              <div className="grid grid-cols-2 gap-2">
                {[...Array(10)].map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img src={`/placeholder.svg?height=150&width=150&text=Trending+${index + 1}`} alt={`Trending ${index + 1}`} className="w-full h-auto" />
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="suggested">
            <ScrollArea className="h-[calc(100vh-200px)]">
              {suggestedUsers.map((user) => (
                <Card key={user.id} className="mb-4">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                          <span>{user.streak} day streak</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">
                      Follow
                    </Button>
                  </CardContent>
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
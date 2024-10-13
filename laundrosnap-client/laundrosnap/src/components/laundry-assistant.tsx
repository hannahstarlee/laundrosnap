'use client'

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
}

const chatResponse = async (prompt: string): Promise<string> => {
  const base = "You are an all knowing laundry chat bot. Answer the following user provided question to the best of your ability with a focus on environmental consciousness. ";
  // append
  const fullPrompt = base + prompt;

  const encoded = encodeURIComponent(fullPrompt);

  const response = await fetch(`https://snowy-forest-d7dd.albertdu369.workers.dev/?prompt=${encoded}`);
  if (!response.ok) {
    throw new Error("Failed to fetch response from chatbot");
  }
  
}

export function LaundryAssistantComponent() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm your LaundroSnap assistant. How can I help you with your laundry today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = { id: messages.length + 1, text: input, sender: 'user' }
      setMessages([...messages, newMessage])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = { id: messages.length + 2, text: getBotResponse(input), sender: 'bot' }
        setMessages(prevMessages => [...prevMessages, botResponse])
      }, 1000)
    }
  }

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()
    if (lowerInput.includes('detergent')) {
      return "For eco-friendly options, I recommend Seventh Generation or Method. If you're dealing with tough stains, try Tide or Persil. Remember to check if your machine is HE (High Efficiency) compatible!"
    } else if (lowerInput.includes('softener')) {
      return "Downy and Snuggle are popular choices. For a more natural option, try using white vinegar in the fabric softener compartment. It's great for softening clothes and reducing static!"
    } else if (lowerInput.includes('stain')) {
      return "For most stains, pre-treat with a stain remover like OxiClean or Shout. For grease stains, try using dish soap before washing. Always check the care label before treating!"
    } else {
      return "I'm here to help with any laundry questions! Feel free to ask about detergents, stain removal, or laundry tips."
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="fixed top-4 right-4 rounded-full z-50" size="icon">
            <Bot className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>LaundroSnap Assistant</DialogTitle>
            <DialogDescription>
              Ask for laundry advice or set your preferences
            </DialogDescription>
          </DialogHeader>
          <Card className="bg-white w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Chat with LaundroBot</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full pr-4" ref={scrollAreaRef}>
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                    <div className={`flex items-end ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>{message.sender === 'user' ? 'U' : 'B'}</AvatarFallback>
                        <AvatarImage src={message.sender === 'user' ? '/placeholder.svg?height=32&width=32' : '/placeholder.svg?height=32&width=32&text=Bot'} />
                      </Avatar>
                      <div className={`max-w-xs mx-2 p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex w-full space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
          <DialogFooter>
            <Button type="submit" onClick={() => setIsOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="fixed top-4 left-4 rounded-full z-50 bg-opacity-100" size="icon">
            <div className="">
              <User className="h-6 w-6" />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Laundry Preferences</DialogTitle>
            <DialogDescription>
              Set your laundry preferences to get personalized recommendations
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="clothing-type" className="text-right">
                Clothing Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select clothing type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="delicates">Delicates</SelectItem>
                  <SelectItem value="heavy-duty">Heavy Duty</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="load-size" className="text-right">
                Load Size
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select load size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="detergent" className="text-right">
                Detergent
              </Label>
              <Input id="detergent" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="softener" className="text-right">
                Softener
              </Label>
              <Input id="softener" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="laundry-days" className="text-right">
                Laundry Days
              </Label>
              <Input id="laundry-days" placeholder="e.g., Mon, Thu" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
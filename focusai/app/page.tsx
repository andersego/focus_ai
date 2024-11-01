'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { Target, Compass } from 'lucide-react'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-blue-600">FocusAI</h1>
          <p className="text-lg text-gray-500">Your AI-powered personal development companion</p>
          <p className="text-sm text-gray-500">by Ander Focus</p>
        </div>

        {session?.user && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-600">
              Welcome back, {session.user.name}!
            </h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
            onClick={() => router.push('/goalscheck')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                GoalsCheck
              </CardTitle>
              <CardDescription>
                Set and track your goals with AI-powered task generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Break down your goals into manageable daily tasks, track your progress,
                and get AI-generated suggestions to stay on track.
              </p>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
            onClick={() => router.push('/ikigai')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-6 w-6 text-purple-600" />
                Ikigai
              </CardTitle>
              <CardDescription>
                Discover your life's purpose through AI guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Explore the intersection of what you love, what you're good at,
                what the world needs, and what you can be paid for.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 
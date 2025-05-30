"use client"
import { Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  FlaskConical,
  Droplets,
  Eye,
  RotateCcw,
  Target,
  AlertTriangle,
  BookOpen,
} from "lucide-react"

// ...existing steps and definitions arrays...

export default function TitrationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTab = searchParams.get("tab") || "procedure"

  return (
    <Suspense fallback={<div>Loading Titration Page...</div>}>
      {/* ...existing header and page JSX... */}
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-8">
          {/* ...existing header code... */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Titration to the Endpoint</h1>
            <p className="text-xl text-gray-600 mb-6">
              Master the precise technique of titration to determine unknown concentrations
            </p>
            {/* ...existing Card component... */}
          </div>

          <Tabs
            defaultValue={currentTab}
            onValueChange={(value) => router.push(`?tab=${value}`)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="procedure">Step-by-Step Procedure</TabsTrigger>
              <TabsTrigger value="definitions">Key Terms</TabsTrigger>
            </TabsList>

            <TabsContent value="procedure" className="space-y-6">
              {/* ...existing procedure tab content mapping through steps... */}
            </TabsContent>

            <TabsContent value="definitions" className="space-y-4">
              {/* ...existing definitions tab content... */}
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <Link href="/solution-preparation">
              <Button size="lg" variant="outline" className="mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Review Solution Preparation
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

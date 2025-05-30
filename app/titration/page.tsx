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
// Replace these placeholders with your actual data.
const steps = [ 
  /* ...your titration steps array... */
]
const definitions = [
  /* ...your titration definitions array... */
]

function TitrationPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()  
  const currentTab = searchParams.get("tab") || "procedure"

  return (
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
            {steps.map((step) => (
              <Card key={step.number} className="overflow-hidden">
                <CardHeader className="bg-green-50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="p-2 bg-green-100 rounded-lg">{step.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  {step.imageUrl && step.imageUrl !== "" && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={step.imageUrl}
                        alt={`Visual demonstration of ${step.title}`}
                        className="w-full h-auto max-h-[300px] object-contain"
                      />
                    </div>
                  )}
                  <p className="text-gray-700 mb-3">{step.details}</p>
                  {step.equipment && (
                    <div>
                      <p className="font-semibold text-sm text-gray-600 mb-2">Required Equipment:</p>
                      <div className="flex flex-wrap gap-2">
                        {step.equipment.map((item, idx) => (
                          <Badge key={idx} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="definitions" className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold">Key Terms & Definitions</h2>
            </div>
            {definitions.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{item.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
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
  )
}

export default function TitrationPage() {
  return (
    <Suspense fallback={<div>Loading Titration Page...</div>}>
      <TitrationPageContent />
    </Suspense>
  )
}

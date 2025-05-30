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

  const steps = [
    {
      number: 0,
      title: "Safety Precautions",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "Safety glasses must be worn at all times. Clean any spills immediately. If solutions contact skin, wash thoroughly with water.",
      equipment: ["Safety glasses"],
      details: "Safety is our top priority in the lab.",
      imageUrl: "/solution/0.gif"
    },
    {
      number: 1,
      title: "Clean All Glassware",
      icon: <Droplets className="h-6 w-6" />,
      description: "Wash all equipment, then rinse 3 times with deionized water",
      equipment: ["Burette", "Beaker", "Erlenmeyer flask", "Pipet", "Rubber bulb"],
      details: "Check the burette stopcock to ensure it works properly and doesn't leak.",
      imageUrl: "/solution/1.jpg"
    },
    {
      number: 2,
      title: "Prime the Burette",
      icon: <FlaskConical className="h-6 w-6" />,
      description: "Pour small amount of titrant into burette, drain into waste",
      details: "This removes any water and coats the burette with your titrant solution.",
      imageUrl: "/titration/2.jpg"
    },
    {
      number: 3,
      title: "Fill the Burette",
      icon: <FlaskConical className="h-6 w-6" />,
      description: "Fill with titrant close to zero mark, record precise starting volume",
      details: "Remove the funnel after filling to prevent dripping into the burette.",
      imageUrl: "/titration/3.jpg"
    },
    {
      number: 4,
      title: "Prime the Pipet",
      icon: <Droplets className="h-6 w-6" />,
      description: "Draw up small amount of sample, rinse inside, discard into waste",
      details: "This ensures the pipet is coated with your sample solution.",
      imageUrl: ""
    },
    {
      number: 5,
      title: "Take Sample Aliquot",
      icon: <Eye className="h-6 w-6" />,
      description: "Use bulb to draw liquid above line, control with thumb to precise volume",
      details: "Bottom of meniscus must be precisely on the fill line.",
      imageUrl: "/titration/5.jpg"
    },
    {
      number: 6,
      title: "Transfer Sample",
      icon: <FlaskConical className="h-6 w-6" />,
      description: "Move pipet to clean flask, release thumb to drain completely",
      details: "Don't force out the liquid remaining in the tip - it's calibrated this way.",
      imageUrl: ""
    },
    {
      number: 7,
      title: "Add Indicator",
      icon: <Droplets className="h-6 w-6" />,
      description: "Add 2-3 drops of indicator to flask, swirl to mix",
      details: "The indicator will change color at the equivalence point.",
      imageUrl: ""
    },
    {
      number: 8,
      title: "First Trial (Quick)",
      icon: <Target className="h-6 w-6" />,
      description: "Add titrant fairly fast while swirling, stop at first permanent color change",
      details: "This gives you an estimate for more precise trials.",
      imageUrl: "/titration/7.gif"
    },
    {
      number: 9,
      title: "Precise Trials",
      icon: <Eye className="h-6 w-6" />,
      description: "Clean flask, new sample, add fast until near estimate, then drop by drop",
      details: "Watch for color change, stop at first permanent change after swirling.",
      imageUrl: ""
    },
    {
      number: 10,
      title: "Repeat for Precision",
      icon: <RotateCcw className="h-6 w-6" />,
      description: "Repeat until 2 consecutive trials are within ± 0.1 mL",
      details: "Average the volumes for your final calculation.",
      imageUrl: ""
    },
  ]

  const definitions = [
    {
      term: "Titration",
      definition:
        "The addition of precise volumes of a solution in a burette to a measured volume of a sample solution, often used to determine the concentration of a substance.",
    },
    {
      term: "Sample",
      definition:
        "The solution being analyzed in a titration, placed in a receiving flask (usually an Erlenmeyer flask).",
    },
    {
      term: "Titrant",
      definition:
        "The solution in a burette during a titration, which is a solution of known solute concentration progressively added to the sample.",
    },
    {
      term: "Burette",
      definition: "A calibrated tube used to deliver variable known volumes of a liquid during a titration.",
    },
    {
      term: "Standard Solution",
      definition:
        "A solution whose concentration is accurately and precisely known. The concentration of the titrant must be accurately known, often determined by standardization.",
    },
    {
      term: "Standardization",
      definition:
        "A titration procedure to accurately determine the concentration of the titrant by titrating it into a standard solution made from a primary standard.",
    },
    {
      term: "Primary Standard",
      definition:
        "A highly pure and stable chemical used to determine the precise concentration of acids or bases. Examples include sodium carbonate (for acid titrants) and potassium hydrogen phthalate (for basic titrants).",
    },
    {
      term: "Equivalence Point",
      definition:
        "The point in a titration when all the reactant in the sample is consumed by the titrant; neutralization is complete in acid-base titrations.",
    },
    {
      term: "Endpoint",
      definition:
        "The point in a titration at which a sharp change in a measurable property occurs (e.g., color change in an indicator). Ideally occurs precisely at the equivalence point.",
    },
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

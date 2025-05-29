import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Beaker, Scale, Droplets, RotateCcw, Eye, AlertTriangle, CheckCircle } from "lucide-react"

export default function SolutionPreparationPage() {
  const steps = [
    {
      number: 0,
      title: "Safety Precautions",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "Safety glasses must be worn at all times. Clean any spills immediately. If solutions contact skin, wash thoroughly with water.",
      equipment: ["Safety glasses"],
      details: "Safety is our top priority in the laboratory.",
      imageUrl: "/solution/0.gif"
    },
    {
      number: 1,
      title: "Clean All Glassware",
      icon: <Droplets className="h-6 w-6" />,
      description: "Wash all equipment, then rinse 3 times with deionized water",
      equipment: ["Stir rod", "Scoop", "Beaker", "Weighing boat", "Volumetric flask", "Funnel"],
      details: "Proper cleaning ensures no contamination affects your solution concentration.",
      imageUrl: "/solution/1.jpg"
    },
    {
      number: 2,
      title: "Weigh the Solid",
      icon: <Scale className="h-6 w-6" />,
      description: "Use a weighing boat to measure the solid precisely",
      details: "Record the exact mass - this determines your final concentration.",
      imageUrl: "/solution/2.jpg"
    },
    {
      number: 3,
      title: "Begin Dissolution",
      icon: <Beaker className="h-6 w-6" />,
      description: "Add small amount of deionized water to beaker, add solid, rinse weighing boat 3x into beaker",
      details: "Start with minimal water to ensure complete dissolution before transferring.",
      imageUrl: "/solution/3.jpg"
    },
    {
      number: 4,
      title: "Stir to Dissolve",
      icon: <RotateCcw className="h-6 w-6" />,
      description: "Stir mixture until solid is completely dissolved",
      details: "Complete dissolution is essential before proceeding to the next step.",
      imageUrl: "/solution/4.jpg"
    },
    {
      number: 5,
      title: "Decant into Flask",
      icon: <Beaker className="h-6 w-6" />,
      description: "Use stir rod to guide pouring into volumetric flask, lift funnel slightly",
      details: "Leave any undissolved solid in the beaker - do not force it through.",
      imageUrl: "/solution/5.jpg"
    },
    {
      number: 6,
      title: "Repeat if Needed",
      icon: <RotateCcw className="h-6 w-6" />,
      description: "Add more water to beaker, stir, and decant again if solid remains",
      details: "Caution: Don't add too much water overall - you'll dilute to the line later.",
    },
    {
      number: 7,
      title: "Rinse the Beaker",
      icon: <Droplets className="h-6 w-6" />,
      description: "After visible solid is gone, rinse beaker 3x with deionized water",
      details: "Add all rinses to the volumetric flask to ensure complete transfer.",
      imageUrl: "/solution/7.jpg"
    },
    {
      number: 8,
      title: "Fill to Near the Line",
      icon: <Beaker className="h-6 w-6" />,
      description: "Add deionized water quickly at first, then slow down at the neck",
      details: "Use a squirt bottle for better control as you approach the fill line.",
      imageUrl: "/solution/8.jpg"
    },
    {
      number: 9,
      title: "Final Precise Fill",
      icon: <Eye className="h-6 w-6" />,
      description: "When ~1cm from line, add water drop by drop",
      details: "Eye level with the line - bottom of meniscus must be exactly on the fill line.",
      imageUrl: "/solution/9.jpg"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Solution Preparation from a Solid</h1>
          <p className="text-xl text-gray-600">
            Follow these visual steps to prepare accurate solutions from solid compounds
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {steps.map((step, index) => (
            <Card key={step.number} className="overflow-hidden">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-blue-100 rounded-lg">{step.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={step.imageUrl}
                    alt={`Visual demonstration of ${step.title}`}
                    className="w-full"
                  />
                </div>
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
        </div>

        <Card className="bg-red-50 border-red-200 mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-800">Important Note: Overfilling</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">
              If you overfill past the line, you must restart the entire procedure for precise work. The volume must be
              exact for accurate concentration calculations.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-800">Success Criteria</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-green-700 space-y-2">
              <li>• All solid is completely dissolved</li>
              <li>• Solution is clear with no visible particles</li>
              <li>• Meniscus bottom is exactly on the fill line</li>
              <li>• All equipment has been properly rinsed</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/titration">
            <Button size="lg">
              Next: Learn Titration Procedure
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

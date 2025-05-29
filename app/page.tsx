import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Beaker, FlaskConical, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chemistry Lab Procedures Guide</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visual step-by-step guides for Grade 11 chemistry students to master essential laboratory techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <Beaker className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Solution Preparation</CardTitle>
              <CardDescription>
                Learn how to prepare solutions from solid compounds with precision and accuracy
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Proper glassware cleaning techniques</li>
                <li>• Accurate weighing procedures</li>
                <li>• Dissolution and transfer methods</li>
                <li>• Volumetric flask usage</li>
              </ul>
              <Link href="/solution-preparation">
                <Button className="w-full">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <FlaskConical className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Titration Procedure</CardTitle>
              <CardDescription>
                Master the art of titration to determine unknown concentrations accurately
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Burette setup and operation</li>
                <li>• Sample preparation techniques</li>
                <li>• Endpoint detection methods</li>
                <li>• Precision and accuracy tips</li>
              </ul>
              <Link href="/titration">
                <Button className="w-full">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg text-yellow-800">Safety First!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-700">
                Always wear appropriate personal protective equipment (PPE) including safety glasses, lab apron, and
                gloves when working in the chemistry laboratory.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

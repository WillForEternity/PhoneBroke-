import { Award, Clock, Shield, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Certified Technicians",
    description:
      "Our repair specialists are fully certified and have years of experience fixing all types of mobile devices.",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Fast Turnaround Time",
    description: "Most common repairs are completed the same day, often while you wait. We respect your time.",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Quality Parts Guarantee",
    description: "We use only high-quality replacement parts that meet or exceed manufacturer specifications.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: "90-Day Warranty",
    description:
      "All our repairs come with a 90-day warranty. If anything goes wrong, we'll fix it at no additional cost.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose JW Phone Repair</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're committed to providing the highest quality repairs with exceptional customer service
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                {benefit.icon}
                <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

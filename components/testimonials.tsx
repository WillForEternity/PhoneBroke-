"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Jordan M.",
    device: "iPhone 13 Pro",
    rating: 5,
    image: "/images/testimonial-1.jpg",
    quote:
      "Absolutely blown away by the service! My screen was shattered beyond recognition, and now it looks brand new. The technician was professional and completed the repair in under an hour.",
  },
  {
    name: "Alexis T.",
    device: "Samsung Galaxy S22",
    rating: 5,
    image: "/images/testimonial-2.jpg",
    quote:
      "After my phone stopped charging, I thought I'd need a new device. JW Phone Repair fixed the charging port for a fraction of what a new phone would cost. Fast, affordable, and professional!",
  },
  {
    name: "Marcus K.",
    device: "iPad Pro",
    rating: 5,
    image: "/images/testimonial-3.jpg",
    quote:
      "My iPad screen was cracked after a fall. The team at JW not only replaced it perfectly but also helped me set up a better screen protector. Outstanding customer service!",
  },
  {
    name: "Sophia L.",
    device: "PlayStation 5",
    rating: 5,
    image: "/images/testimonial-4.jpg",
    quote:
      "My PS5 was overheating and shutting down during gameplay. JW Phone Repair cleaned the internal components and replaced the thermal paste. Now it runs perfectly quiet and cool!",
  },
]

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
    ))
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Customers Are Saying</h2>
          <p className="max-w-[700px] text-gray-400 md:text-lg">
            Hear from our satisfied customers about their repair experience
          </p>
        </div>

        <div className="mt-8">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full border border-gray-800 bg-slate-800 transition-all duration-200 hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.device}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">{renderStars(testimonial.rating)}</div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <p className="text-base italic text-gray-300">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-blue-600 text-white hover:bg-blue-700 hover:text-white" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-blue-600 text-white hover:bg-blue-700 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

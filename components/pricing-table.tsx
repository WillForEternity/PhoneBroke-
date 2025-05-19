"use client"

import { useState } from "react"
import { Check, Info, ChevronRight, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Pricing data for different device types
const pricingData = {
  iphone: {
    title: "iPhone Repair Pricing",
    description: "Transparent pricing for all iPhone models with our 90-day warranty",
    models: [
      {
        name: "iPhone 15 Pro/Max",
        screenRepair: "$299",
        batteryReplacement: "$99",
        chargingPort: "$89",
        backGlass: "$149",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 15",
        screenRepair: "$279",
        batteryReplacement: "$89",
        chargingPort: "$89",
        backGlass: "$129",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 14 Pro/Max",
        screenRepair: "$279",
        batteryReplacement: "$89",
        chargingPort: "$79",
        backGlass: "$129",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 14",
        screenRepair: "$249",
        batteryReplacement: "$79",
        chargingPort: "$79",
        backGlass: "$119",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 13 Pro/Max",
        screenRepair: "$249",
        batteryReplacement: "$79",
        chargingPort: "$79",
        backGlass: "$119",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 13",
        screenRepair: "$229",
        batteryReplacement: "$79",
        chargingPort: "$79",
        backGlass: "$109",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 12 Pro/Max",
        screenRepair: "$229",
        batteryReplacement: "$79",
        chargingPort: "$69",
        backGlass: "$109",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 12",
        screenRepair: "$199",
        batteryReplacement: "$69",
        chargingPort: "$69",
        backGlass: "$99",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 11 Pro/Max",
        screenRepair: "$199",
        batteryReplacement: "$69",
        chargingPort: "$69",
        backGlass: "$99",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone 11",
        screenRepair: "$149",
        batteryReplacement: "$69",
        chargingPort: "$69",
        backGlass: "$89",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone XS/XR",
        screenRepair: "$149",
        batteryReplacement: "$69",
        chargingPort: "$69",
        backGlass: "$89",
        dataRecovery: "$149+",
      },
      {
        name: "iPhone X/8/7",
        screenRepair: "$129",
        batteryReplacement: "$59",
        chargingPort: "$59",
        backGlass: "$79",
        dataRecovery: "$149+",
      },
    ],
    repairTypes: [
      { id: "screenRepair", name: "Screen Repair", time: "1-2 hours", warranty: "90 days" },
      { id: "batteryReplacement", name: "Battery Replacement", time: "30-60 min", warranty: "90 days" },
      { id: "chargingPort", name: "Charging Port", time: "1 hour", warranty: "90 days" },
      { id: "backGlass", name: "Back Glass", time: "1-2 hours", warranty: "90 days" },
      { id: "dataRecovery", name: "Data Recovery", time: "24-72 hours", warranty: "No recovery, no fee" },
    ],
  },
  samsung: {
    title: "Samsung Repair Pricing",
    description: "Quality Samsung Galaxy repairs with premium parts",
    models: [
      {
        name: "Galaxy S24 Ultra",
        screenRepair: "$329",
        batteryReplacement: "$99",
        chargingPort: "$89",
        backGlass: "$129",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S24/S24+",
        screenRepair: "$299",
        batteryReplacement: "$89",
        chargingPort: "$89",
        backGlass: "$119",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S23 Ultra",
        screenRepair: "$299",
        batteryReplacement: "$89",
        chargingPort: "$79",
        backGlass: "$119",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S23/S23+",
        screenRepair: "$279",
        batteryReplacement: "$79",
        chargingPort: "$79",
        backGlass: "$109",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S22 Ultra",
        screenRepair: "$279",
        batteryReplacement: "$79",
        chargingPort: "$79",
        backGlass: "$109",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S22/S22+",
        screenRepair: "$249",
        batteryReplacement: "$79",
        chargingPort: "$79",
        backGlass: "$99",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S21 Ultra",
        screenRepair: "$249",
        batteryReplacement: "$79",
        chargingPort: "$69",
        backGlass: "$99",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S21/S21+",
        screenRepair: "$229",
        batteryReplacement: "$69",
        chargingPort: "$69",
        backGlass: "$89",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy S20 Series",
        screenRepair: "$199",
        batteryReplacement: "$69",
        chargingPort: "$69",
        backGlass: "$89",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy Note 20",
        screenRepair: "$199",
        batteryReplacement: "$69",
        chargingPort: "$69",
        backGlass: "$89",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy Note 10",
        screenRepair: "$179",
        batteryReplacement: "$69",
        chargingPort: "$59",
        backGlass: "$79",
        dataRecovery: "$149+",
      },
      {
        name: "Galaxy A Series",
        screenRepair: "$129+",
        batteryReplacement: "$59+",
        chargingPort: "$59+",
        backGlass: "$69+",
        dataRecovery: "$149+",
      },
    ],
    repairTypes: [
      { id: "screenRepair", name: "Screen Repair", time: "1-2 hours", warranty: "90 days" },
      { id: "batteryReplacement", name: "Battery Replacement", time: "30-60 min", warranty: "90 days" },
      { id: "chargingPort", name: "Charging Port", time: "1 hour", warranty: "90 days" },
      { id: "backGlass", name: "Back Glass", time: "1-2 hours", warranty: "90 days" },
      { id: "dataRecovery", name: "Data Recovery", time: "24-72 hours", warranty: "No recovery, no fee" },
    ],
  },
  tablet: {
    title: "Tablet Repair Pricing",
    description: "Expert iPad and Android tablet repairs",
    models: [
      {
        name: 'iPad Pro 12.9" (2022+)',
        screenRepair: "$399",
        batteryReplacement: "$129",
        chargingPort: "$99",
        dataRecovery: "$149+",
        buttonRepair: "$89+",
      },
      {
        name: 'iPad Pro 11" (2022+)',
        screenRepair: "$349",
        batteryReplacement: "$119",
        chargingPort: "$99",
        dataRecovery: "$149+",
        buttonRepair: "$89+",
      },
      {
        name: "iPad Air (2022+)",
        screenRepair: "$299",
        batteryReplacement: "$99",
        chargingPort: "$89",
        dataRecovery: "$149+",
        buttonRepair: "$79+",
      },
      {
        name: "iPad (10th gen+)",
        screenRepair: "$249",
        batteryReplacement: "$89",
        chargingPort: "$89",
        dataRecovery: "$149+",
        buttonRepair: "$79+",
      },
      {
        name: "iPad Mini (2021+)",
        screenRepair: "$249",
        batteryReplacement: "$89",
        chargingPort: "$89",
        dataRecovery: "$149+",
        buttonRepair: "$79+",
      },
      {
        name: "Older iPad Models",
        screenRepair: "$149+",
        batteryReplacement: "$79+",
        chargingPort: "$79+",
        dataRecovery: "$149+",
        buttonRepair: "$69+",
      },
      {
        name: "Samsung Tab S9 Ultra",
        screenRepair: "$349",
        batteryReplacement: "$119",
        chargingPort: "$99",
        dataRecovery: "$149+",
        buttonRepair: "$89+",
      },
      {
        name: "Samsung Tab S9/S9+",
        screenRepair: "$299",
        batteryReplacement: "$99",
        chargingPort: "$89",
        dataRecovery: "$149+",
        buttonRepair: "$79+",
      },
      {
        name: "Samsung Tab S8 Series",
        screenRepair: "$279",
        batteryReplacement: "$99",
        chargingPort: "$89",
        dataRecovery: "$149+",
        buttonRepair: "$79+",
      },
      {
        name: "Samsung Tab A Series",
        screenRepair: "$179+",
        batteryReplacement: "$79+",
        chargingPort: "$79+",
        dataRecovery: "$149+",
        buttonRepair: "$69+",
      },
    ],
    repairTypes: [
      { id: "screenRepair", name: "Screen Repair", time: "2-3 hours", warranty: "90 days" },
      { id: "batteryReplacement", name: "Battery Replacement", time: "1-2 hours", warranty: "90 days" },
      { id: "chargingPort", name: "Charging Port", time: "1-2 hours", warranty: "90 days" },
      { id: "dataRecovery", name: "Data Recovery", time: "24-72 hours", warranty: "No recovery, no fee" },
      { id: "buttonRepair", name: "Button Repair", time: "1-2 hours", warranty: "90 days" },
    ],
  },
  gaming: {
    title: "Game System Repair Pricing",
    description: "Professional repairs for all major gaming consoles",
    models: [
      {
        name: "PlayStation 5",
        discDrive: "$149",
        powerIssues: "$129",
        hdmiPort: "$119",
        controllerRepair: "$69",
        overheating: "$99",
      },
      {
        name: "PlayStation 4 Pro",
        discDrive: "$99",
        powerIssues: "$89",
        hdmiPort: "$99",
        controllerRepair: "$59",
        overheating: "$89",
      },
      {
        name: "PlayStation 4",
        discDrive: "$89",
        powerIssues: "$79",
        hdmiPort: "$89",
        controllerRepair: "$49",
        overheating: "$79",
      },
      {
        name: "Xbox Series X",
        discDrive: "$149",
        powerIssues: "$129",
        hdmiPort: "$119",
        controllerRepair: "$69",
        overheating: "$99",
      },
      {
        name: "Xbox Series S",
        powerIssues: "$119",
        hdmiPort: "$109",
        controllerRepair: "$69",
        overheating: "$89",
        discDrive: "N/A",
      },
      {
        name: "Xbox One X",
        discDrive: "$99",
        powerIssues: "$89",
        hdmiPort: "$99",
        controllerRepair: "$59",
        overheating: "$89",
      },
      {
        name: "Xbox One S",
        discDrive: "$89",
        powerIssues: "$79",
        hdmiPort: "$89",
        controllerRepair: "$49",
        overheating: "$79",
      },
      {
        name: "Nintendo Switch",
        joyconRepair: "$69",
        batteryReplacement: "$79",
        screenRepair: "$119",
        chargingPort: "$79",
        powerIssues: "$89",
      },
      {
        name: "Nintendo Switch Lite",
        joyconRepair: "$59",
        batteryReplacement: "$69",
        screenRepair: "$99",
        chargingPort: "$69",
        powerIssues: "$79",
      },
      {
        name: "Steam Deck",
        screenRepair: "$149",
        batteryReplacement: "$99",
        controllerRepair: "$79",
        chargingPort: "$89",
        powerIssues: "$99",
      },
    ],
    repairTypes: [
      { id: "discDrive", name: "Disc Drive", time: "1-2 hours", warranty: "90 days" },
      { id: "powerIssues", name: "Power Issues", time: "1-3 hours", warranty: "90 days" },
      { id: "hdmiPort", name: "HDMI Port", time: "1-2 hours", warranty: "90 days" },
      { id: "controllerRepair", name: "Controller Repair", time: "1 hour", warranty: "90 days" },
      { id: "overheating", name: "Overheating", time: "1-2 hours", warranty: "90 days" },
    ],
  },
}

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState("iphone")

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
            Transparent Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Repair Pricing</h2>
          <p className="max-w-[700px] text-gray-400 md:text-lg">
            Clear, upfront pricing for common device repairs with no hidden fees
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <Tabs defaultValue="iphone" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-slate-700">
              <TabsList className="flex h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="iphone"
                  className="flex-1 px-3 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white text-gray-400 hover:text-gray-300"
                >
                  iPhone
                </TabsTrigger>
                <TabsTrigger
                  value="samsung"
                  className="flex-1 px-3 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white text-gray-400 hover:text-gray-300"
                >
                  Samsung
                </TabsTrigger>
                <TabsTrigger
                  value="tablet"
                  className="flex-1 px-3 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white text-gray-400 hover:text-gray-300"
                >
                  Tablets
                </TabsTrigger>
                <TabsTrigger
                  value="gaming"
                  className="flex-1 px-3 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-slate-800/50 data-[state=active]:text-white text-gray-400 hover:text-gray-300"
                >
                  Gaming
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(pricingData).map(([key, data]) => (
              <TabsContent key={key} value={key} className="p-0 m-0">
                <div className="p-6 bg-slate-800/50">
                  <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
                  <p className="text-gray-400 mb-4">{data.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {data.repairTypes.map((type) => (
                      <div key={type.id} className="flex items-center gap-2 bg-slate-700/50 rounded-md px-3 py-2">
                        <div className="flex items-center gap-1.5">
                          <Check className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium text-white">{type.name}</span>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-900 border-slate-700 text-white">
                              <div className="text-xs space-y-1">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3 text-blue-400" />
                                  <span>Typical time: {type.time}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Shield className="h-3 w-3 text-blue-400" />
                                  <span>Warranty: {type.warranty}</span>
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-700/30">
                        <TableRow className="border-slate-700 hover:bg-transparent">
                          <TableHead className="text-white">Device Model</TableHead>
                          {data.repairTypes.map((type) => (
                            <TableHead key={type.id} className="text-white text-right">
                              {type.name}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.models.map((model, index) => (
                          <TableRow
                            key={index}
                            className={`border-slate-700 hover:bg-slate-700/20 ${
                              index % 2 === 0 ? "bg-slate-700/10" : ""
                            }`}
                          >
                            <TableCell className="font-medium text-white">{model.name}</TableCell>
                            {data.repairTypes.map((type) => (
                              <TableCell key={type.id} className="text-right text-gray-300">
                                {model[type.id as keyof typeof model]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="mt-6 bg-blue-900/20 border border-blue-800/50 rounded-md p-4 text-blue-300">
                    <p className="text-sm">
                      <strong>Note:</strong> Prices listed are estimates and may vary based on device condition and
                      specific model variants. All repairs include our standard 90-day warranty on parts and labor.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={scrollToContact} className="bg-cyan-700 hover:bg-cyan-800 text-white">
                      <span className="mr-2">Get a Custom Quote</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Quality Guarantee</h3>
            </div>
            <p className="text-gray-400">
              All repairs come with our 90-day warranty. If anything goes wrong with the repaired component, we'll fix
              it at no additional cost.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Fast Turnaround</h3>
            </div>
            <p className="text-gray-400">
              Most common repairs are completed the same day, often while you wait. We respect your time and work
              efficiently.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Premium Parts</h3>
            </div>
            <p className="text-gray-400">
              We use only high-quality replacement parts that meet or exceed manufacturer specifications for optimal
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Navbar } from "@/components/Navbar";
import { BOMCalculator } from "@/components/BOMCalculator";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Drone, Shield, Sprout, Search, Cpu, Zap, Signal, Target, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary animate-pulse">
              <span className="font-medium">Hybrid Rover-Drone Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter max-w-4xl">
              Elevating Autonomy with <span className="text-primary">DRONNO TECH</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The world&apos;s first integrated Rover–Drone Hybrid System.
              Designed for life-critical Search & Rescue and precision-driven Agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="#product">Explore Technology</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link href="#contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section id="product" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Integrated Rover–Drone Hybrid System</h2>
              <p className="text-lg text-muted-foreground">
                Our flagship product seamlessly merges aerial agility with ground-based persistence.
                The Aerial Scout (Drone) provides rapid reconnaissance, while the Ground Unit (Rover)
                handles heavy-duty operations and long-duration tasks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                    <Zap size={18} />
                  </div>
                  <div>
                    <span className="font-bold">Aerial Scout:</span> 1.2 kg, 35 min flight, 4K + FLIR Thermal, Raspberry Pi 5.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                    <Shield size={18} />
                  </div>
                  <div>
                    <span className="font-bold">Ground Unit:</span> 5 kg payload, 4–6 hr operation, 4WD rugged chassis.
                  </div>
                </li>
              </ul>
            </div>

            {/* SVG Block Diagram */}
            <div className="relative aspect-square md:aspect-video bg-card rounded-2xl border p-8 flex items-center justify-center overflow-hidden">
               <svg viewBox="0 0 400 240" className="w-full h-full max-w-lg">
                 {/* Connection Lines */}
                 <path d="M200 60 L200 180" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-primary" />
                 <path d="M140 120 L260 120" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-primary" />

                 {/* Drone Node */}
                 <rect x="150" y="10" width="100" height="50" rx="8" fill="currentColor" className="text-primary/10" stroke="currentColor" />
                 <text x="200" y="40" textAnchor="middle" fill="currentColor" className="text-foreground font-bold text-xs">AERIAL SCOUT</text>

                 {/* Rover Node */}
                 <rect x="150" y="180" width="100" height="50" rx="8" fill="currentColor" className="text-primary/10" stroke="currentColor" />
                 <text x="200" y="210" textAnchor="middle" fill="currentColor" className="text-foreground font-bold text-xs">GROUND UNIT</text>

                 {/* Comm Node */}
                 <rect x="30" y="95" width="110" height="50" rx="8" fill="currentColor" className="text-secondary/20" stroke="currentColor" />
                 <text x="85" y="125" textAnchor="middle" fill="currentColor" className="text-foreground font-bold text-xs text-[10px]">HYBRID COMM (5G/LoRa)</text>

                 {/* AI/Fusion Node */}
                 <rect x="260" y="95" width="110" height="50" rx="8" fill="currentColor" className="text-secondary/20" stroke="currentColor" />
                 <text x="315" y="125" textAnchor="middle" fill="currentColor" className="text-foreground font-bold text-xs text-[10px]">SENSOR FUSION / AI</text>
               </svg>
               <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">System Architecture v1.0</div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Universal Versatility</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our hybrid technology is engineered for high-stakes environments where reliability and performance are non-negotiable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Search size={24} />
                </div>
                <CardTitle>Search & Rescue</CardTitle>
                <CardDescription>Rapid deployment in disaster zones to locate survivors using FLIR thermal imaging and AI detection.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Sprout size={24} />
                </div>
                <CardTitle>Precision Agriculture</CardTitle>
                <CardDescription>35–40% resource savings through targeted chemical application and high-res crop health monitoring.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <CardTitle>Defence & Surveillance</CardTitle>
                <CardDescription>Stealthy ground reconnaissance combined with aerial overwatch for 360° situational awareness.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Technology */}
      <section id="technology" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 space-y-3">
                <Cpu className="text-primary" />
                <h3 className="font-bold">Pixhawk 6C</h3>
                <p className="text-xs text-zinc-400">Flight control excellence with Raspberry Pi 5 for edge computing.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 space-y-3">
                <Target className="text-primary" />
                <h3 className="font-bold">YOLOv8 AI</h3>
                <p className="text-xs text-zinc-400">Real-time object detection with 93.5% mAP accuracy.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 space-y-3">
                <Signal className="text-primary" />
                <h3 className="font-bold">Hybrid Comms</h3>
                <p className="text-xs text-zinc-400">Redundant Wi-Fi + LoRa + 5G for uninterrupted link.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 space-y-3">
                <Zap className="text-primary" />
                <h3 className="font-bold">ROS2 Noetic</h3>
                <p className="text-xs text-zinc-400">Industry-standard robotics OS for seamless sensor fusion.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Cutting-Edge Stack</h2>
              <p className="text-lg text-zinc-400">
                DRONNO TECH leverages the most reliable open-source and proprietary software stacks.
                Our system doesn&apos;t just move; it perceives and decides.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Sensor Fusion", "RPLIDAR", "FLIR Thermal", "4WD Rugged", "Edge AI"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Performance Metrics</h2>
            <p className="text-muted-foreground">Comparative analysis of our Hybrid system against single-mode solutions.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead className="text-primary font-bold">DRONNO Hybrid</TableHead>
                  <TableHead>Drone-Only</TableHead>
                  <TableHead>Rover-Only</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Mission Completion Speed</TableCell>
                  <TableCell className="text-primary font-bold">65% Faster</TableCell>
                  <TableCell>Moderate</TableCell>
                  <TableCell>Slow</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">AI Detection (mAP)</TableCell>
                  <TableCell className="text-primary font-bold">93.5%</TableCell>
                  <TableCell>82.0%</TableCell>
                  <TableCell>85.0%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Operation Time</TableCell>
                  <TableCell className="text-primary font-bold">4–6 Hours</TableCell>
                  <TableCell>35 Mins</TableCell>
                  <TableCell>8 Hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Resource Savings (Agri)</TableCell>
                  <TableCell className="text-primary font-bold">35–40%</TableCell>
                  <TableCell>15%</TableCell>
                  <TableCell>20%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* BOM Calculator */}
      <section id="bom" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Live BOM Calculator</h2>
            <p className="text-muted-foreground">Estimate your deployment costs with our transparent pricing tool.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <BOMCalculator />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Award size={64} className="mx-auto text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold">About DRONNO TECH</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              DRONNO TECH is an Indian robotics startup pioneering the future of autonomous systems.
              We believe that the next leap in robotics isn&apos;t just better drones or faster rovers—it&apos;s the
              intelligent integration of both. Our team of engineers and innovators is dedicated to
              creating solutions that save lives in search and rescue and feed the world through precision agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-6xl font-bold">Ready to <span className="text-primary">Evolve?</span></h2>
              <p className="text-xl text-zinc-400">
                Contact us today for a live demo or to discuss custom robotics requirements.
                Our engineering team is ready to solve your most complex challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg text-primary"><Signal size={20} /></div>
                  <div>
                    <div className="text-sm font-bold">Location</div>
                    <div className="text-zinc-400">New Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800 bg-black text-zinc-500">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Drone size={20} className="text-primary" />
              <span className="font-bold text-white tracking-tight">
                DRONNO <span className="text-primary">TECH</span>
              </span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="#product" className="hover:text-white transition-colors">Technology</Link>
              <Link href="#applications" className="hover:text-white transition-colors">Applications</Link>
              <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
            </div>
            <div className="text-xs">
              © {new Date().getFullYear()} DRONNO TECH. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

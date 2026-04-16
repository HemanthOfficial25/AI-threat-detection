"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BOMCalculator() {
  const [droneQty, setDroneQty] = useState(1);
  const [roverQty, setRoverQty] = useState(1);
  const [commQty, setCommQty] = useState(1);

  const prices = {
    drone: 65000,
    rover: 95000,
    comm: 25000,
    misc: 15000,
  };

  const total = (droneQty * prices.drone) + (roverQty * prices.rover) + (commQty * prices.comm) + prices.misc;

  return (
    <div className="bg-card rounded-xl border p-6 md:p-8 shadow-sm">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="drone-qty">Drone (Aerial Scout) - ₹65,000</Label>
              <Input
                id="drone-qty"
                type="number"
                min="0"
                value={droneQty}
                onChange={(e) => setDroneQty(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rover-qty">Rover (Ground Unit) - ₹95,000</Label>
              <Input
                id="rover-qty"
                type="number"
                min="0"
                value={roverQty}
                onChange={(e) => setRoverQty(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="comm-qty">Communication (Hybrid) - ₹25,000</Label>
              <Input
                id="comm-qty"
                type="number"
                min="0"
                value={commQty}
                onChange={(e) => setCommQty(parseInt(e.target.value) || 0)}
              />
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-xl border-b pb-2">Price Breakdown</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Drone Units:</span>
              <span>₹{(droneQty * prices.drone).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Rover Units:</span>
              <span>₹{(roverQty * prices.rover).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Comm Systems:</span>
              <span>₹{(commQty * prices.comm).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Misc (Sensors/Assembly):</span>
              <span>₹{prices.misc.toLocaleString()}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-primary/20 flex justify-between items-center">
            <span className="text-xl font-bold">Total Estimated Cost:</span>
            <span className="text-2xl font-bold text-primary">₹{total.toLocaleString()}</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            *Estimated cost based on standard configuration (₹1.6 – 2.1 Lakh range)
          </p>
        </div>
      </div>
    </div>
  );
}

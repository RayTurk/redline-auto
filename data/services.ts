export interface SubOption {
  id: string
  name: string
  price: number
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
  startingPrice: number
  unit: string
  subOptions?: SubOption[]
}

export const services: Service[] = [
  {
    id: 'oil-change',
    name: 'Oil Change',
    description: 'Keep your engine clean and running strong.',
    icon: '🛢',
    startingPrice: 39,
    unit: 'starting at',
    subOptions: [
      { id: 'conventional', name: 'Conventional', price: 39 },
      { id: 'synthetic-blend', name: 'Synthetic Blend', price: 59 },
      { id: 'full-synthetic', name: 'Full Synthetic', price: 79 },
    ],
  },
  {
    id: 'brake-service',
    name: 'Brake Service',
    description: 'Stop safely. We inspect, replace, and resurface.',
    icon: '⚙',
    startingPrice: 49,
    unit: 'starting at',
    subOptions: [
      { id: 'inspection', name: 'Brake Inspection', price: 49 },
      { id: 'pad-replacement', name: 'Pad Replacement', price: 149 },
      { id: 'rotor-pads', name: 'Rotors + Pads', price: 299 },
    ],
  },
  {
    id: 'tire-rotation',
    name: 'Tire Rotation & Balance',
    description: 'Even wear extends tire life and smooths your ride.',
    icon: '🔄',
    startingPrice: 45,
    unit: 'flat',
  },
  {
    id: 'battery',
    name: 'Battery Service',
    description: 'Free test. Replace if needed. Back on the road fast.',
    icon: '⚡',
    startingPrice: 25,
    unit: 'starting at',
  },
  {
    id: 'diagnostic',
    name: 'Full Inspection & Diagnostic',
    description: "Know exactly what your car needs before it breaks down.",
    icon: '🔍',
    startingPrice: 75,
    unit: 'flat',
  },
]

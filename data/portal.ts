export const demoCustomer = {
  name: 'John Metzger',
  vehicle: '2019 Chevy Silverado 1500',
}

export const statusStages = [
  { id: 'checked-in', label: 'Checked In' },
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'in-service', label: 'In Service' },
  { id: 'quality-check', label: 'Quality Check' },
  { id: 'ready', label: 'Ready for Pickup' },
]

export const currentStageIndex = 2

export interface UpdateEntry {
  time: string
  note: string
}

export const updateLog: UpdateEntry[] = [
  { time: '10:14 AM', note: 'Vehicle checked in by Mike R.' },
  { time: '10:32 AM', note: 'Diagnosis complete. Full synthetic oil change + brake inspection recommended.' },
  { time: '11:05 AM', note: 'Oil drain started.' },
  { time: '11:22 AM', note: 'Filter replaced. New oil being filled.' },
  { time: '11:38 AM', note: 'Brake inspection underway.' },
]

export const todaysService = {
  name: 'Full Synthetic Oil Change + Brake Inspection',
  estimatedReady: '1:30 PM',
  technician: 'Mike R.',
  flag: 'Brake pads at 20% -- recommend replacement at next visit',
}

export interface HistoryEntry {
  date: string
  service: string
  cost: number
  technician: string
  mileage: number
}

export const serviceHistory: HistoryEntry[] = [
  { date: '2026-03-12', service: 'Full Synthetic Oil Change', cost: 89, technician: 'Mike R.', mileage: 67420 },
  { date: '2025-12-04', service: 'Tire Rotation & Balance', cost: 45, technician: 'Dave K.', mileage: 64100 },
  { date: '2025-09-18', service: 'Brake Pad Replacement (front)', cost: 210, technician: 'Mike R.', mileage: 61800 },
]

export function getDaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = []
  const d = new Date(year, month, 1)
  while (d.getMonth() === month) {
    days.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }
  return days
}

export function isDayAvailable(date: Date, today: Date): boolean {
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const dateMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  if (dateMidnight <= todayMidnight) return false
  if (date.getDay() === 0) return false
  const maxDate = new Date(todayMidnight)
  maxDate.setDate(todayMidnight.getDate() + 7)
  return dateMidnight <= maxDate
}

export function getTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 8; hour <= 16; hour++) {
    const period = hour < 12 ? 'AM' : 'PM'
    const h = hour === 12 ? 12 : hour > 12 ? hour - 12 : hour
    slots.push(`${h}:00 ${period}`)
  }
  return slots
}

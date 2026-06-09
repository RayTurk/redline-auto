import { serviceHistory } from '@/data/portal'

export default function HistoryTable() {
  return (
    <div className="card">
      <h3 className="font-heading text-lg text-text mb-6">Service History</h3>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full font-body text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-muted uppercase tracking-wider pb-3 pr-4">Date</th>
              <th className="text-left text-xs text-muted uppercase tracking-wider pb-3 pr-4">Service</th>
              <th className="text-left text-xs text-muted uppercase tracking-wider pb-3 pr-4">Technician</th>
              <th className="text-left text-xs text-muted uppercase tracking-wider pb-3 pr-4">Mileage</th>
              <th className="text-right text-xs text-muted uppercase tracking-wider pb-3">Cost</th>
            </tr>
          </thead>
          <tbody>
            {serviceHistory.map((entry, i) => (
              <tr key={i} className="border-b border-border/50 last:border-0">
                <td className="py-3.5 pr-4 text-muted whitespace-nowrap">
                  {new Date(entry.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td className="py-3.5 pr-4 text-text">{entry.service}</td>
                <td className="py-3.5 pr-4 text-muted">{entry.technician}</td>
                <td className="py-3.5 pr-4 text-muted">{entry.mileage.toLocaleString()} mi</td>
                <td className="py-3.5 text-right text-text font-medium">${entry.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="flex sm:hidden flex-col gap-4">
        {serviceHistory.map((entry, i) => (
          <div key={i} className="border border-border rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-start">
              <p className="font-body text-sm text-text font-medium">{entry.service}</p>
              <p className="font-body text-sm text-text font-semibold">${entry.cost}</p>
            </div>
            <p className="font-body text-xs text-muted">
              {new Date(entry.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} &middot; {entry.technician} &middot; {entry.mileage.toLocaleString()} mi
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

import { todaysService, demoCustomer } from '@/data/portal'

export default function ServiceSummary() {
  return (
    <div className="card h-full flex flex-col gap-5">
      <h3 className="font-heading text-lg text-text">Today's Service</h3>

      <div className="space-y-4">
        <div>
          <p className="font-body text-xs text-muted uppercase tracking-wider mb-1">Service</p>
          <p className="font-body text-sm text-text font-medium">{todaysService.name}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-body text-xs text-muted uppercase tracking-wider mb-1">Est. Ready</p>
            <p className="font-body text-sm text-text font-medium">{todaysService.estimatedReady}</p>
          </div>
          <div>
            <p className="font-body text-xs text-muted uppercase tracking-wider mb-1">Technician</p>
            <p className="font-body text-sm text-text font-medium">{todaysService.technician}</p>
          </div>
        </div>

        <div>
          <p className="font-body text-xs text-muted uppercase tracking-wider mb-1">Vehicle</p>
          <p className="font-body text-sm text-text font-medium">{demoCustomer.vehicle}</p>
        </div>
      </div>

      <div className="mt-auto rounded-lg border border-warning/30 bg-warning/10 p-4">
        <div className="flex gap-2 items-start">
          <span className="text-warning text-sm mt-0.5">!</span>
          <div>
            <p className="font-body text-xs text-warning font-semibold uppercase tracking-wide mb-1">
              Technician Note
            </p>
            <p className="font-body text-xs text-warning/90">{todaysService.flag}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

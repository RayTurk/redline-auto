import { updateLog } from '@/data/portal'

export default function UpdateLog() {
  return (
    <div className="card h-full">
      <h3 className="font-heading text-lg text-text mb-4">Live Updates</h3>
      <div className="space-y-4">
        {updateLog.map((entry, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              {i < updateLog.length - 1 && (
                <div className="w-px flex-1 bg-border mt-1" />
              )}
            </div>
            <div className="pb-4 last:pb-0">
              <p className="font-body text-xs text-muted mb-0.5">{entry.time}</p>
              <p className="font-body text-sm text-text">{entry.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

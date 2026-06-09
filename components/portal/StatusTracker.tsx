import { statusStages, currentStageIndex } from '@/data/portal'

export default function StatusTracker() {
  return (
    <>
      {/* Desktop: horizontal pipeline */}
      <div className="hidden sm:flex items-center w-full">
        {statusStages.map((stage, i) => {
          const completed = i < currentStageIndex
          const current = i === currentStageIndex
          const pending = i > currentStageIndex

          return (
            <div key={stage.id} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={[
                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all',
                    completed ? 'bg-success text-bg' : '',
                    current ? 'bg-primary text-white animate-glow' : '',
                    pending ? 'bg-surface border border-border text-muted' : '',
                  ].join(' ')}
                >
                  {completed ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <span
                  className={[
                    'mt-2 text-xs font-body font-medium text-center whitespace-nowrap',
                    completed ? 'text-success' : '',
                    current ? 'text-primary' : '',
                    pending ? 'text-muted' : '',
                  ].join(' ')}
                >
                  {stage.label}
                </span>
              </div>

              {i < statusStages.length - 1 && (
                <div
                  className={[
                    'flex-1 h-px mx-3 mb-5',
                    i < currentStageIndex ? 'bg-success' : 'bg-border',
                  ].join(' ')}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: vertical list */}
      <div className="flex sm:hidden flex-col gap-3">
        {statusStages.map((stage, i) => {
          const completed = i < currentStageIndex
          const current = i === currentStageIndex
          const pending = i > currentStageIndex

          return (
            <div key={stage.id} className="flex items-center gap-4">
              <div
                className={[
                  'w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold',
                  completed ? 'bg-success text-bg' : '',
                  current ? 'bg-primary text-white animate-glow' : '',
                  pending ? 'bg-surface border border-border text-muted' : '',
                ].join(' ')}
              >
                {completed ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <span
                className={[
                  'font-body text-sm font-medium',
                  completed ? 'text-success' : '',
                  current ? 'text-primary' : '',
                  pending ? 'text-muted' : '',
                ].join(' ')}
              >
                {stage.label}
              </span>
              {current && (
                <span className="ml-auto font-body text-xs text-primary font-semibold uppercase tracking-wide">
                  In Progress
                </span>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

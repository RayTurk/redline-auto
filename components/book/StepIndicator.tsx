interface Props {
  currentStep: 1 | 2 | 3 | 'confirmation'
}

export default function StepIndicator({ currentStep }: Props) {
  const steps = [
    { n: 1, label: 'Service' },
    { n: 2, label: 'Date & Time' },
    { n: 3, label: 'Your Info' },
  ]
  const activeIndex = currentStep === 'confirmation' ? 3 : currentStep

  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      {steps.map((step, i) => {
        const done = activeIndex > step.n
        const active = activeIndex === step.n
        return (
          <div key={step.n} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-body transition-colors
                  ${done ? 'bg-success text-bg' : active ? 'bg-primary text-white' : 'bg-surface-2 text-muted'}`}
              >
                {done ? '✓' : step.n}
              </div>
              <span className={`text-xs font-body hidden sm:block ${active ? 'text-text' : 'text-muted'}`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-12 h-px mb-5 ${done ? 'bg-success' : 'bg-border'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

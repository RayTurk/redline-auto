const steps = [
  {
    number: '01',
    title: 'Book Online',
    description: 'Pick your service, choose a time that works, and fill in your info. Takes two minutes.',
  },
  {
    number: '02',
    title: 'Drop Off Your Vehicle',
    description: "Pull in, hand over the keys. We'll call you if anything unexpected comes up.",
  },
  {
    number: '03',
    title: 'Track It in Real Time',
    description: 'Log into your customer portal and watch your car move through every stage of service.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="section-eyebrow">The Process</span>
          <h2 className="font-heading text-5xl text-text mt-3">Simple. Fast. Transparent.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(step => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-2 border-2 border-primary mb-6">
                <span className="font-heading text-xl text-primary">{step.number}</span>
              </div>
              <h3 className="font-heading text-2xl text-text mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: 'Marcus T.',
    location: 'Euclid, OH',
    text: "Brought my Ram in for brakes and an oil change. Was in and out in under an hour. The customer portal thing is actually really cool -- I watched the whole service from my phone.",
    rating: 5,
  },
  {
    name: 'Denise K.',
    location: 'South Euclid, OH',
    text: "I've been going here for two years. Mike always tells me what my car actually needs -- no upselling. That's hard to find at a shop.",
    rating: 5,
  },
  {
    name: 'Phil R.',
    location: 'Cleveland Heights, OH',
    text: 'Fast, honest, and reasonably priced. Scheduled online at 9pm the night before and they had me in the next morning. Will keep coming back.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">What Customers Say</span>
          <h2 className="font-heading text-5xl text-text mt-3">
            Real Reviews from Real Clevelanders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-primary text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-muted leading-relaxed flex-1 mb-4">"{t.text}"</p>
              <div>
                <p className="font-body text-sm text-text font-semibold">{t.name}</p>
                <p className="font-body text-xs text-muted">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

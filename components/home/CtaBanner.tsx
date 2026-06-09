import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-heading text-5xl text-white mb-4">Ready to Book?</h2>
        <p className="font-body text-white/80 text-lg mb-8">
          Schedule online in two minutes or call us direct. We're open Monday through Saturday.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-white text-primary font-body font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors inline-block"
          >
            Schedule Online
          </Link>
          <a
            href="tel:2165550192"
            className="border-2 border-white text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-block"
          >
            (216) 555-0192
          </a>
        </div>
      </div>
    </section>
  )
}

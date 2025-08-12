export default function HomePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/60 z-10" />
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">The Corner Cafe</h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Where every cup tells a story and every meal feels like home
          </p>
        </div>
      </section>
    </div>
  )
}

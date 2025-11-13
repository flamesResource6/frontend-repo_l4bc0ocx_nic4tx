import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[88vh] md:h-[92vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-end md:items-center pb-16 md:pb-0">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-zinc-300 text-xs md:text-sm mb-3">AI Engineer • 2026 CSE @ SSTC</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Aditya Kumar</h1>
          <p className="mt-4 text-zinc-300 md:text-lg">I build intelligent products that blend data, algorithms, and design. Currently pursuing B.Tech in CSE (Class of 2026) at SSTC.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-zinc-700 text-white hover:bg-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  )
}

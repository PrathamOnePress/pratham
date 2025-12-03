
export default function Hero(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-5xl font-semibold leading-tight">
          PrathamOne — <span className="text-[#1C2A57]">Corporate Publishing Engine</span>
        </h1>
        <p className="mt-6 text-gray-700">
          Professional book production, hybrid design systems, and automation-powered publishing workflows.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/contact" className="px-5 py-3 bg-[#1C2A57] text-white text-sm rounded-md">Start Your Project</a>
          <a href="/portfolio" className="px-5 py-3 border border-gray-300 text-sm rounded-md">View Portfolio</a>
        </div>
      </div>

      <div className="h-72 bg-gray-100 border rounded-md flex items-center justify-center text-gray-400">
        [Placeholder — upload hero graphic]
      </div>
    </section>
  )
}

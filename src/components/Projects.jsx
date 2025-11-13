export default function Projects() {
  const items = [
    {
      title: 'SlideFlow — PPT Agent',
      desc:
        'An AI agent that turns raw notes or topics into clean, well-structured PowerPoint decks. Supports slide outlines, assets, and export.',
      tags: ['LLMs', 'Agents', 'Automation'],
      link: '#',
    },
    {
      title: 'Toonify — Image Transformation',
      desc:
        'A fast image-to-cartoon transformation pipeline with controllable styles and batch processing for creatives.',
      tags: ['Computer Vision', 'Diffusion', 'Image Processing'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="bg-black text-zinc-200 py-20 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-white font-semibold">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((p) => (
            <article key={p.title} className="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors">
              <h3 className="text-white text-xl font-medium">{p.title}</h3>
              <p className="text-zinc-400 mt-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">{t}</span>
                ))}
              </div>
              <div className="mt-5">
                <a href={p.link} className="inline-flex items-center text-sm text-black bg-white hover:bg-zinc-200 transition-colors px-3 py-1.5 rounded">
                  View details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

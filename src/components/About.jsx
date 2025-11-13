export default function About() {
  return (
    <section id="about" className="bg-black text-zinc-200 py-20 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl text-white font-semibold">About</h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            I'm Aditya Kumar, an AI Engineer focused on building robust, user-centric AI systems. My interests span multimodal models, agentic workflows, and production ML.
          </p>
          <p className="mt-3 text-zinc-400">
            Education: B.Tech in Computer Science and Engineering, SSTC College — 2026 passout.
          </p>
        </div>
        <ul className="space-y-4">
          <li className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <p className="text-white font-medium">Core Skills</p>
            <p className="text-zinc-400 mt-1 text-sm">Python, FastAPI, React, LangChain, RAG, Vector DBs, Computer Vision, MLOps fundamentals</p>
          </li>
          <li className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <p className="text-white font-medium">What I value</p>
            <p className="text-zinc-400 mt-1 text-sm">Clarity, minimalism, reliability, and impact. I like shipping polished experiences.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

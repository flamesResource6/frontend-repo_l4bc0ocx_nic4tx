export default function Contact() {
  return (
    <section id="contact" className="bg-black text-zinc-200 py-20 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-white font-semibold">Contact</h2>
        <p className="mt-3 text-zinc-400 max-w-2xl">
          Want to collaborate or discuss a project? Reach out and I’ll get back soon.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <form onSubmit={(e) => e.preventDefault()} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
            <div className="grid grid-cols-1 gap-4">
              <input className="w-full bg-black text-white border border-zinc-700 rounded px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600" placeholder="Your name"/>
              <input type="email" className="w-full bg-black text-white border border-zinc-700 rounded px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600" placeholder="Email"/>
              <textarea rows="5" className="w-full bg-black text-white border border-zinc-700 rounded px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600" placeholder="Message"/>
            </div>
            <button className="mt-4 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors">Send</button>
          </form>
          <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
            <p className="text-white font-medium">Email</p>
            <a className="text-zinc-300" href="mailto:adityakumar@example.com">adityakumar@example.com</a>
            <p className="mt-4 text-white font-medium">Location</p>
            <p className="text-zinc-300">India • Open to remote</p>
          </div>
        </div>
      </div>
    </section>
  )
}

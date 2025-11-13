import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-900 bg-black text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Aditya Kumar</p>
          <p className="text-zinc-600">Built with a monochrome palette — black, grey, white.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

import { Link, useNavigate } from 'react-router-dom'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const hotspots = [
  {
    id: 'gaza',
    label: 'Gaza',
    pos: 'left-[48%] top-[58%]',
    glowColor: 'from-red-300/60 via-red-400/40 to-rose-300/10',
  },
  {
    id: 'sudan',
    label: 'Sudan',
    pos: 'left-[51%] top-[66%]',
    glowColor: 'from-yellow-200/60 via-orange-300/40 to-rose-200/10',
  },
  {
    id: 'ukraine',
    label: 'Ukraine',
    pos: 'left-[55%] top-[47%]',
    glowColor: 'from-blue-300/60 via-indigo-300/40 to-cyan-200/10',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0b1020] text-white overflow-hidden">
      {/* Hero with Spline */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/10 via-[#0b1020]/40 to-[#0b1020] pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight"
          >
            The Xnox PeaceGate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-3 max-w-2xl text-sm sm:text-base text-white/80"
          >
            Click a place. Hear a story. Play to repair the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6"
          >
            <Link to="/hall" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition px-5 py-2 text-sm">
              Visit the Hall of Peacekeepers
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Peace Map */}
      <section className="relative py-16">
        {/* Background world silhouette (abstract) */}
        <div className="absolute inset-0 opacity-[0.15] select-none pointer-events-none">
          <div className="absolute -top-10 -left-10 w-[140%] h-[120%] bg-[radial-gradient(circle_at_30%_50%,#1f2a4a_0%,transparent_50%),radial-gradient(circle_at_70%_40%,#203056_0%,transparent_52%),radial-gradient(circle_at_55%_75%,#1b2442_0%,transparent_48%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Peace Map</h2>
            <p className="text-white/60 text-sm">Hover to feel the pulse • Click to enter a scene</p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f1630] to-[#0b1020] overflow-hidden">
            {/* Map canvas */}
            <div className="relative aspect-[16/9]">
              {/* Fog/particles */}
              <div className="absolute inset-0 opacity-40 mix-blend-screen">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="g" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {Array.from({ length: 24 }).map((_, i) => (
                    <circle key={i} cx={(i * 41) % 800} cy={(i * 73) % 420} r={(i % 5) * 20 + 12} fill="url(#g)" />
                  ))}
                </svg>
              </div>

              {/* Hotspots */}
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => navigate(`/scene/${h.id}`)}
                  className={`group absolute ${h.pos} -translate-x-1/2 -translate-y-1/2`}
                  aria-label={`Open scene: ${h.label}`}
                >
                  <span className={`absolute -inset-12 bg-gradient-to-br ${h.glowColor} rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition`} />
                  <span className="relative flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-white shadow-2xl shadow-sky-400/30 animate-pulse" />
                    <span className="text-sm sm:text-base font-medium tracking-wide bg-white/10 px-3 py-1.5 rounded-full backdrop-blur">
                      {h.label}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-xs text-white/70">
            <div className="bg-white/5 rounded-lg p-4">Colors: #BEE3F8 • #FEE2E2 • #FFF8E7 • #C7D2FE</div>
            <div className="bg-white/5 rounded-lg p-4">Fonts: Poppins • Inter • Cairo</div>
            <div className="bg-white/5 rounded-lg p-4">Animations: parallax • particles • soft glow</div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const stories = {
  gaza: {
    name: 'Noor',
    age: 10,
    text: "Hi… I am Noor. I am 10. I used to play in the alley near my house. Today, my world is different… but I still dream of peace.",
    fact: 'Every child deserves safety, school, and play — even in times of conflict.',
    gameEmbed: 'https://scratch.mit.edu/projects/956410780/embed',
    theme: 'from-[#BEE3F8] to-[#C7D2FE]'
  },
  sudan: {
    name: 'Maya',
    age: 11,
    text: "Hello, I am Maya. I used to walk to the river with my friends. Now we move often, but I still carry hope in my pocket.",
    fact: 'Hope grows when communities rebuild together.',
    gameEmbed: 'https://scratch.mit.edu/projects/956410786/embed',
    theme: 'from-[#FFF8E7] to-[#FEE2E2]'
  },
  ukraine: {
    name: 'Danylo',
    age: 9,
    text: "I am Danylo. I miss my classroom and my team. We practice courage every day, and I believe peace will win.",
    fact: 'Education and truth-telling are powerful forms of peacekeeping.',
    gameEmbed: 'https://scratch.mit.edu/projects/956410792/embed',
    theme: 'from-[#C7D2FE] to-[#BEE3F8]'
  },
}

export default function Scene() {
  const { id } = useParams()
  const data = stories[id] || stories.gaza

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <div className={`relative bg-gradient-to-br ${data.theme} opacity-[0.15] h-48`} />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-white/70 hover:text-white">← Back to Map</Link>
          <Link to="/hall" className="text-white/70 hover:text-white">Hall of Peacekeepers</Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI child character placeholder with animated background */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,#fff_0%,transparent_40%),radial-gradient(circle_at_80%_60%,#fff_0%,transparent_40%)]" />
            </div>
            <div className="relative aspect-[16/9]">
              {/* Placeholder video area: swap src with D-ID/HeyGen/Copilot video url */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-white/80">Embed your AI child video here (D-ID / HeyGen / Copilot Animate)</p>
                  <p className="text-xs text-white/60 mt-2">Use an iframe or video tag</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story + Fact */}
          <div>
            <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-3xl font-semibold">
              {id.charAt(0).toUpperCase() + id.slice(1)} — A Scene of Peace
            </motion.h2>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="mt-4 text-lg text-white/90">
              “{data.text}”
            </motion.p>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/80"><span className="font-semibold">Quick fact:</span> {data.fact}</p>
            </motion.div>

            <div className="mt-10">
              <h3 className="text-xl font-medium mb-3">Mini Mission (30–45s)</h3>
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
                {/* Replace the Scratch embed links above with your own game IDs */}
                <iframe
                  src={data.gameEmbed}
                  allowTransparency
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  className="w-full aspect-[4/3]"
                  title={`Mini game for ${id}`}
                />
              </div>
              <p className="text-sm text-white/70 mt-3">Complete the mission. Then continue your journey.</p>
              <div className="mt-4 flex gap-3">
                <Link to="/" className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">Return to Map</Link>
                <Link to="/hall" className="rounded-full bg-white text-[#0b1020] hover:opacity-90 px-4 py-2 text-sm">I am now a PeaceKeeper</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-white/50">
          Tips: Use Lottie/Canva backgrounds behind the character, and swap in your AI talking-head video.
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hall() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const badgeSvg = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#BEE3F8'/>
        <stop offset='100%' stop-color='#C7D2FE'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' rx='16' fill='url(#g)' />
    <text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' font-size='22' font-family='Inter' fill='#0b1020' font-weight='700'>PeaceKeeper</text>
    <text x='50%' y='65%' dominant-baseline='middle' text-anchor='middle' font-size='14' font-family='Inter' fill='#0b1020'>${name || 'Your Name'}</text>
  </svg>`)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = `data:image/svg+xml;charset=utf-8,${badgeSvg}`
    link.download = 'peacekeeper-badge.svg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-white/70 hover:text-white">← Back to Map</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold">The Hall of Peacekeepers</h1>
        <p className="text-white/70 mt-2">Add your name, your message, and collect your digital badge.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Your name</label>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., Noor A." className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Your message</label>
              <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="A hopeful note…" rows={4} className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 outline-none" />
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleDownload} className="rounded-full bg-white text-[#0b1020] hover:opacity-90 px-4 py-2 text-sm">Download Badge</button>
              <a href="https://suno.com" target="_blank" className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">Add a Suno.ai song</a>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">Your PeaceKeeper Badge Preview</div>
              <img alt="Badge preview" className="mt-3 w-full bg-black/30 rounded-lg" src={`data:image/svg+xml;charset=utf-8,${badgeSvg}`} />
            </div>

            <div className="mt-6 text-sm text-white/70">
              Optional: embed a short music loop from Suno or Mubert to play in the background.
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/" className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">Return to Map</Link>
        </div>
      </div>
    </div>
  )
}

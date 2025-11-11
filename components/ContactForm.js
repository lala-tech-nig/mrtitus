'use client'
import { useState } from 'react'


export default function ContactForm(){
const [form, setForm] = useState({name:'', email:'', phone:'', message:''})
const [sent, setSent] = useState(false)
const [toast, setToast] = useState(null)


function handleChange(e){
setForm({...form, [e.target.name]: e.target.value})
}


function emitConfetti(){
// Basic confetti using small divs (no external lib)
const c = document.createElement('div')
c.className = 'confetti-container fixed inset-0 pointer-events-none'
for(let i=0;i<40;i++){
const s = document.createElement('div')
s.className = 'confetti'
s.style.left = Math.random()*100 + '%'
s.style.background = ['#6D28D9','#FFFFFF','#000000'][Math.floor(Math.random()*3)]
s.style.transform = `rotate(${Math.random()*360}deg)`
c.appendChild(s)
}
document.body.appendChild(c)
setTimeout(()=> c.remove(), 2200)
}


async function handleSubmit(e){
e.preventDefault()
// here you would POST to your API (omitted) — we'll simulate
setToast('Sending...')
await new Promise(r=>setTimeout(r,800))
setToast('Message sent — thank you!')
setSent(true)
emitConfetti()
setForm({name:'', email:'', phone:'', message:''})
setTimeout(()=> setToast(null), 2500)
}


return (
<div className="relative">
<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg shadow">
<input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="p-3 rounded border" />
<input required name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded border" />
<input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 rounded border" />
<textarea required name="message" value={form.message} onChange={handleChange} placeholder="Message" className="p-3 rounded border md:col-span-2 h-40" />
<button type="submit" className="md:col-span-2 bg-black text-white py-3 rounded">Send message</button>
</form>


{/* Toast */}
{toast && (
<div className="fixed right-6 bottom-6 bg-black text-white py-2 px-4 rounded shadow">{toast}</div>
)}


<style>{`
.confetti-container { z-index: 60 }
.confetti { position: absolute; top: -10px; width: 10px; height: 18px; opacity: .95; animation: fall 2s linear forwards }
@keyframes fall { to { transform: translateY(110vh); opacity: 0 } }
`}</style>
</div>
)
}
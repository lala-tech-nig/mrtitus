'use client'
import { useEffect, useState } from 'react'


export default function Hero(){
const slides = [
'I build beautiful websites that convert.',
'Photography that tells your story.',
'Branding that people remember.'
]
const [index, setIndex] = useState(0)


useEffect(()=>{
const id = setInterval(()=> setIndex(i => (i+1) % slides.length), 3500)
return ()=> clearInterval(id)
},[])


return (
<section className="bg-white">
<div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
<div className="order-2 md:order-1">
<div className="overflow-hidden">
<div className="h-40 md:h-56 flex items-center">
{/* sliding text */}
<div className="text-3xl md:text-5xl font-extrabold leading-tight">
<span className="block">{slides[index]}</span>
</div>
</div>
</div>


<p className="mt-6 text-lg leading-relaxed">Crafting digital experiences and moments — let's make something memorable together.</p>
<a href="/#contact" className="inline-block mt-6 bg-brand text-white font-semibold py-3 px-6 rounded-lg">Work with me now</a>
</div>


<div className="order-1 md:order-2 flex justify-center md:justify-end">
<div className="w-[320px] md:w-[460px] lg:w-[560px] rounded-lg overflow-hidden shadow-2xl">
<img src="/profile.png" alt="portrait" className="object-cover w-full h-full" />
</div>
</div>
</div>
</section>
)
}
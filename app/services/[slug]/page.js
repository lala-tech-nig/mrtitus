import { notFound } from 'next/navigation'


const details = {
photography: {
title: 'Photography',
body: 'Full details about photography services, packages, galleries and client testimonials.'
},
webdev: { title: 'Website Development', body: 'Full-stack websites, hosting, maintenance.' },
design: { title: 'Graphics & Branding', body: 'Brand identity, collateral, print-ready files.' },
video: { title: 'Videography', body: 'Event coverage, promos, and editing.' }
}


export default function ServiceDetail({ params }){
const s = details[params.slug]
if(!s) return notFound()
return (
<div className="max-w-5xl mx-auto px-6 py-20">
<h1 className="text-3xl font-bold mb-6">{s.title}</h1>
<p className="leading-relaxed mb-6">{s.body}</p>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-3">
<div className="h-48 bg-gray-100" />
<div className="h-48 bg-gray-100" />
</div>
<div className="space-y-3">
<div className="h-48 bg-gray-100" />
<div className="h-48 bg-gray-100" />
</div>
</div>
</div>
)
}
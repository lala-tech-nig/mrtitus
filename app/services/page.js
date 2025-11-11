import Link from 'next/link'
export default function ServicesPage(){
const services = [
{id:'photography', title:'Photography', excerpt:'Portraits, events, product shoots.'},
{id:'webdev', title:'Website Development', excerpt:'Modern responsive websites.'},
{id:'design', title:'Graphics & Branding', excerpt:'Logos, posters, and visual identities.'},
{id:'video', title:'Videography', excerpt:'Short form and long form videos.'}
]


return (
<div className="max-w-6xl mx-auto px-6 py-20">
<h1 className="text-3xl font-bold mb-8">Services I Provide</h1>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{services.map(s=> (
<div key={s.id} className="border rounded-lg p-5 shadow-sm">
<div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">Image</div>
<h3 className="font-semibold text-xl">{s.title}</h3>
<p className="text-sm mt-2">{s.excerpt}</p>
<Link href={`/services/${s.id}`} className="mt-4 inline-block text-brand font-medium">Read more →</Link>
</div>
))}
</div>
</div>
)
}
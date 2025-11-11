import Link from 'next/link'
export default function ServicesPreview(){
const items = [
{id:'photography', title:'Photography'},
{id:'webdev', title:'Website Dev'},
{id:'design', title:'Design'},
{id:'video', title:'Videography'}
]
return (
<section id="services" className="max-w-6xl mx-auto px-6 py-20">
<h2 className="text-3xl font-bold mb-6">Services I Provide</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{items.map(i=> (
<div key={i.id} className="border rounded-lg p-5">
<div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">Image</div>
<h3 className="font-semibold text-lg">{i.title}</h3>
<p className="text-sm mt-2">Short description about the service.
</p>
<Link href={`/services/${i.id}`} className="inline-block mt-4 text-brand">Read more →</Link>
</div>
))}
</div>
</section>
)
}
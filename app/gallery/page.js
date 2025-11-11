export default function GalleryPage(){
// Example structure shown — ideally data-driven
const folders = [
{id:'photography', title:'Photography', children:[{id:'wedding-abraham', title:'Wedding - Mr Abraham'}]},
{id:'video', title:'Videography', children:[]}
]
return (
<div className="max-w-6xl mx-auto px-6 py-20">
<h1 className="text-3xl font-bold mb-8">Gallery</h1>
<div className="grid md:grid-cols-2 gap-6">
{folders.map(f=> (
<div key={f.id} className="border rounded-lg p-5">
<h3 className="font-semibold mb-3">{f.title}</h3>
<div className="space-y-2">
{f.children.map(c=> (
<div key={c.id} className="flex items-center justify-between">
<div>{c.title}</div>
<a href={`/gallery/${f.id}/${c.id}`} className="text-brand">View</a>
</div>
))}
</div>
</div>
))}
</div>
<a href="/gallery/full" className="inline-block mt-8 bg-brand text-white py-2 px-4 rounded">Visit Full Gallery</a>
</div>
)
}
export default function GalleryPreview(){
return (
<section id="gallery" className="max-w-6xl mx-auto px-6 py-20">
<h2 className="text-3xl font-bold mb-6">Gallery</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="h-40 bg-gray-100" />
<div className="h-40 bg-gray-100" />
<div className="h-40 bg-gray-100" />
<div className="h-40 bg-gray-100" />
</div>
<a href="/gallery" className="inline-block mt-6 bg-brand text-white py-2 px-4 rounded">Visit Full Gallery</a>
</section>
)
}
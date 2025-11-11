import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import GalleryPreview from '../components/GalleryPreview'
import ContactForm from '../components/ContactForm'


export default function Home() {
return (
<div>
<Hero />
<section id="about" className="max-w-6xl mx-auto px-6 py-16">
<h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
<div className="grid md:grid-cols-2 gap-8 items-center">
<img src="/profile.jpg" alt="profile" className="w-full rounded-lg shadow-lg object-cover h-80" />
<div>
<h3 className="text-xl font-semibold mb-3">Hello — I'm [Friend's Name]</h3>
<p className="text-base leading-relaxed mb-4">A short intro goes here. Describe skills, background and core passions. Keep it warm and approachable — the tone clients will respond to.</p>
<p className="text-base leading-relaxed mb-6">Bullet points work well too:</p>
<ul className="list-disc pl-5 space-y-1">
<li>Photography & videography</li>
<li>Web design and development</li>
<li>Brand strategy and digital marketing</li>
</ul>
<a href="/about" className="inline-block mt-6 bg-brand text-white font-medium py-3 px-6 rounded-lg shadow">Know more about me</a>
</div>
</div>
</section>


<ServicesPreview />
<GalleryPreview />


<section id="contact" className="max-w-4xl mx-auto px-6 py-20">
<h2 className="text-3xl font-bold mb-6">Contact Me</h2>
<ContactForm />
</section>
</div>
)
}
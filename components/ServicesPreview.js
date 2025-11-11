'use client'
import Link from 'next/link'

export default function ServicesPreview() {
  const items = [
    {
      id: 'photography',
      title: 'Photography & Videography',
      description: 'Capturing moments creatively and professionally through photography and videography.',
      image: '/photography.jpg',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Creating strategies that grow your brand online and reach your target audience effectively.',
      image: '/digital.jpg',
    },
    {
      id: 'educationist',
      title: 'Educationist',
      description: 'Providing educational programs, workshops, and mentorship to nurture talent and curiosity.',
      image: '/educationist.jpg',
    },
    {
      id: 'realtor',
      title: 'Realtor',
      description: 'Assisting clients in buying, selling, and renting properties with professionalism and care.',
      image: '/realtor.jpg',
    },
  ]

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700">Services I Provide</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((i) => (
          <div
            key={i.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={i.image}
                alt={i.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-3">{i.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{i.description}</p>
              <Link
                href={`/services/${i.id}`}
                className="inline-block text-purple-700 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

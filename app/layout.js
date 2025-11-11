import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
title: 'Mr Titus Portfolio',
description: 'Personal portfolio built with Next.js + TailwindCSS'
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-white text-black antialiased">
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-grow">{children}</main>
<Footer />
</div>
</body>
</html>
)
}
export default function Footer(){
return (
<footer className="border-t mt-12">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
<div>
<div className="text-lg font-bold text-brand">FriendPortfolio</div>
<div className="text-sm mt-2">Email: hello@friend.com • Phone: +234 800 000 0000</div>
</div>


<div className="mt-6 md:mt-0 text-sm">
<div className="flex space-x-4">
<a href="#">Instagram</a>
<a href="#">Twitter</a>
<a href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>
)
}
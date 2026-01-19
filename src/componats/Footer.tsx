

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-200 py-10">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    
   
    <div>
      <h2 className="text-xl font-bold mb-4">Luxury Wheels Rental</h2>
      <p className="text-sm leading-relaxed">
        Providing luxury cars, limousines, and transport services across Egypt since 2006.
        Experience comfort, safety, and outstanding service with our professional chauffeurs.
      </p>
    </div>

   
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-yellow-400">Home</a></li>
        <li><a href="/cars" className="hover:text-yellow-400">Cars</a></li>
        <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
        <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <p className="text-sm">📍 Cairo, Egypt</p>
      <p className="text-sm">📞 +20 120 777 7957</p>
      <p className="text-sm">✉️ info@LuxuryWheelsRentallimousine.com</p>
      <div className="flex gap-4 mt-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Instagram</a>
        <a href="https://api.whatsapp.com/send/?phone=%2B201207777957" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">WhatsApp</a>
      </div>
    </div>
  </div>

  
  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
    © {new Date().getFullYear()} Luxury Wheels Rental. All rights reserved.
  </div>
</footer>

    </div>
  )
}

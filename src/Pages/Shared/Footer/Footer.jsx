const Footer = () => {
  return (
    <footer className="bg-[#0A92B9] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">NextGen Scholarship</h2>
          <p className="text-neutral-200 text-sm leading-relaxed">
            Empowering future leaders through transparent and reliable scholarship programs since 2015. We believe education changes lives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-neutral-200">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Scholarships</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-neutral-200 mb-2">
            📍 123 Knowledge Avenue, Dhaka, BD
          </p>
          <p className="text-sm text-neutral-200 mb-2">
            📞 +880-1234-567890
          </p>
          <p className="text-sm text-neutral-200">
            ✉️ support@nextgenscholar.org
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="#" className="hover:text-yellow-300 transition transform hover:scale-110">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.05 9.05 0 0 1-2.83 1.08 4.52 4.52 0 0 0-7.86 3.1c0 .35.04.7.11 1.03A12.84 12.84 0 0 1 3.1 2.14a4.51 4.51 0 0 0-.61 2.27 4.51 4.51 0 0 0 2.01 3.75 4.48 4.48 0 0 1-2.05-.57v.06a4.53 4.53 0 0 0 3.63 4.44 4.52 4.52 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.14 9.05 9.05 0 0 1-5.59 1.92A9.32 9.32 0 0 1 1 19.54a12.79 12.79 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2-.01-.39-.02-.58A9.22 9.22 0 0 0 23 3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="hover:text-yellow-300 transition transform hover:scale-110">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.6 3.2c-1.3-.9-4.9-1.2-7.6-1.2S5.7 2.3 4.4 3.2C3 4.2 2.4 6.1 2.4 8.5v7c0 2.4.6 4.3 2 5.3 1.3.9 4.9 1.2 7.6 1.2s6.3-.3 7.6-1.2c1.4-1 2-2.9 2-5.3v-7c0-2.4-.6-4.3-2-5.3zM10 15.5V8.5l6.4 3.5-6.4 3.5z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="hover:text-yellow-300 transition transform hover:scale-110">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .6 0 1.337v21.326C0 23.4.593 24 1.325 24h11.494V14.7h-3.13v-3.6h3.13V8.7c0-3.1 1.892-4.8 4.658-4.8 1.325 0 2.464.098 2.797.143v3.24l-1.92.001c-1.505 0-1.797.715-1.797 1.763v2.31h3.587l-.467 3.6h-3.12V24h6.116C23.407 24 24 23.4 24 22.663V1.337C24 .6 23.407 0 22.675 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:text-yellow-300 transition transform hover:scale-110">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5C1.1 6 0 4.88 0 3.5S1.1 1 2.5 1 5 2.12 5 3.5zM.5 24h4V8h-4v16zM8.5 8h3.5v2.3h.05c.5-.94 1.75-1.95 3.6-1.95 3.85 0 4.55 2.53 4.55 5.8V24h-4v-8.3c0-2-.03-4.6-2.8-4.6s-3.25 2.2-3.25 4.5V24h-4V8z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-neutral-300">
        <p>&copy; 2025 NextGen Scholarship. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a> |
          <a href="#" className="hover:underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding + Description */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
                <span className="text-gray-900 dark:text-white font-bold">AD</span>
              </div>
              <span className="text-2xl font-bold font-display text-gray-900 dark:text-white">AppDost</span>
            </a>
            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"><FaLinkedin /></a>
              <a href="https://twitter.com/" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"><FaTwitter /></a>
              <a href="https://www.facebook.com/" aria-label="Facebook" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-400 text-sm">
              <li><a href="/" className="hover:text-primary-600 dark:hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-primary-600 dark:hover:text-white">Services</a></li>
              <li><a href="/careers" className="hover:text-primary-600 dark:hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-primary-600 dark:hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-primary-600 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-400 text-sm">
              <li><a href="/services" className="hover:text-primary-600 dark:hover:text-white">Android App Development</a></li>
              <li><a href="/services" className="hover:text-primary-600 dark:hover:text-white">Web Development</a></li>
              <li><a href="/services" className="hover:text-primary-600 dark:hover:text-white">UI/UX Design</a></li>
              <li><a href="/services" className="hover:text-primary-600 dark:hover:text-white">CRM Software</a></li>
              <li><a href="/services" className="hover:text-primary-600 dark:hover:text-white">Cloud Solutions</a></li>
              <li><a href="/services" className="hover:text-primary-600 dark:hover:text-white">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-sm text-gray-700 dark:text-gray-400">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg"><FiMail className="text-gray-900 dark:text-white" /></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-700 dark:text-gray-400">contact@appdost.in</p>
                  <p className="text-gray-700 dark:text-gray-400">hr@appdost.in</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg"><FiPhone className="text-gray-900 dark:text-white" /></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-700 dark:text-gray-400">+91 76350 75422</p>
                  <p className="text-gray-700 dark:text-gray-400">+91 11 6929 0750</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg"><FiMapPin className="text-gray-900 dark:text-white" /></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Locations</p>
                  <p className="text-gray-700 dark:text-gray-400">Banka (HQ), Motihari, Patna</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg"><FiClock className="text-gray-900 dark:text-white" /></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Working Hours</p>
                  <p className="text-gray-700 dark:text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="mt-4">
                <a href="https://wa.me/911169290750?text=Hi%20AppDost!%20I%27m%20interested%20in%20your%20services." className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white">
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p className="text-gray-700 dark:text-gray-400">© {currentYear} AppDost - Complete IT Solution. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-700 dark:text-gray-400">
            <a href="/privacy-policy" className="hover:text-primary-600 dark:hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-of-service" className="hover:text-primary-600 dark:hover:text-white">Terms of Service</a>
            <span>•</span>
            <a href="/sitemap" className="hover:text-primary-600 dark:hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

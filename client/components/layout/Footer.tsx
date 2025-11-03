// @ts-nocheck
 'use client'
import { motion } from "framer-motion";
import { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaXTwitter,
  FaInstagram,
  FaTelegram,
  FaHeart,
  FaArrowUp
} from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaTelegram, href: 'https://t.me/Adragon_de_mello', label: 'Telegram', color : 'hover:text-blue-400' },
    { icon: FaGithub, href: "https://github.com/AlexKalll", label: "GitHub", color : 'hover:text-gray-300' },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/kaletsidik-ayalew/", label: "LinkedIn", color : 'hover:text-blue-400' },
    { icon: FaXTwitter, href: "https://x.com/kal1995alw", label: "Twitter", color : 'hover:text-gray-300' },
    { icon: FaInstagram, href: "https://www.instagram.com/kaletsidik.24/", label: "Instagram", color : 'hover:text-pink-400' },
    { icon: SiLeetcode, href: "https://leetcode.com/u/Alexkal/", label: "LeetCode", color : 'hover:text-orange-400' },
    { icon: SiCodeforces, href: "https://codeforces.com/profile/alexkalalw", label: "Codeforces", color : 'hover:text-red-400' }
  ];

  const footerLinks = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">

      <div className="h-1 bg-gradient-to-r from-sky-100 via-sky-100 to-blue-700" />
      
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
              Kaletsidik Ayalew
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences with passion and precision
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center justify-center mb-4 md:mb-0">
              Made with <FaHeart className="text-blue-500 mx-2" /> by Kal &copy; {new Date().getFullYear()} | All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span>Back to top</span>
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [status, setStatus] = useState<{ message: string; type?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const email = String(fd.get('newsletter-email') || '');
    if (!email) {
      setStatus({ message: 'Please enter your email', type: 'error' });
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus({ message: 'Subscribed — thank you!', type: 'success' });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus({ message: json.error || 'Subscription failed', type: 'error' });
      }
    } catch (err: any) {
      setStatus({ message: err?.message || 'Network error', type: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:items-end space-y-3">
      <input
        name="newsletter-email"
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-64 py-2 bg-gradient-to-r from-gray-600 to-gray-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
      >
        Subscribe
      </motion.button>
      {status && (
        <p className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>{status.message}</p>
      )}
    </form>
  );
}
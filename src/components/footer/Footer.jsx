import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { label: 'Eye Examinations', to: '/services' },
    { label: 'Contact Lenses', to: '/services' },
    { label: 'Designer Frames', to: '/services' },
    { label: "Children's Eye Care", to: '/services' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/about' },
    { label: 'Testimonials', to: '/' },
    { label: 'Careers', to: '/' },
  ],
  Support: [
    { label: 'FAQ', to: '/' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Privacy Policy', to: '/' },
    { label: 'Terms of Service', to: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12C2 12 5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">
                Weston<span className="text-purple-400">Opticians</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Your trusted high street opticians. Expert eye care, designer frames, and friendly service — helping the community see clearly since 2009.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {['facebook', 'instagram', 'twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-200"
                  aria-label={platform}
                >
                  <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    {platform === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                    {platform === 'instagram' && <path d="M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zm4 14a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v8zm-8-9a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6zm5-8.5a1 1 0 100 2 1 1 0 000-2z" />}
                    {platform === 'twitter' && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accreditation logos */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Accredited & Registered</p>
            <div className="flex items-center gap-6">
              {/* GOC */}
              <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-zinc-400">GOC</p>
                  <p className="text-[10px] text-zinc-600">General Optical Council</p>
                </div>
              </div>
              {/* ABDO */}
              <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-zinc-400">ABDO</p>
                  <p className="text-[10px] text-zinc-600">Dispensing Opticians</p>
                </div>
              </div>
              {/* NHS */}
              <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-zinc-400">NHS</p>
                  <p className="text-[10px] text-zinc-600">Approved Provider</p>
                </div>
              </div>
              {/* Essilor */}
              <div className="hidden sm:flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-zinc-400">Essilor</p>
                  <p className="text-[10px] text-zinc-600">Premium Lens Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Weston Opticians. All rights reserved.
            </p>
            <p className="text-xs text-zinc-600">
              Registered with the General Optical Council (GOC-12345)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

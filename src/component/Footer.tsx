import React from 'react';

// Define the type for the link data
interface NavLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
      <h1 className="text-2xl font-semibold text-white">Limitless Legal</h1>
    </div>
  );

  const SocialIcon: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition-colors duration-200"
      aria-label="Social Link"
    >
      {children}
    </a>
  );

  const LinkedInIcon: React.FC = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 0-6 6v7h-4v-7a6 6 0 0 0 6-6h4zM4 17h4v4H4v-4zM6 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  );

  const InstagramIcon: React.FC = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm6-10a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );

  const LinkColumn: React.FC<{ title: string; links: NavLink[] }> = ({ title, links }) => (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4 uppercase">{title}</h3>
      <nav className="space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );

  const sectionsLinks: NavLink[] = [
    { name: 'Process', href: '/process' },
    { name: 'Services', href: '/services' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Plans', href: '/plans' },
    { name: 'Contact', href: '/contact' },
  ];

  const pagesLinks: NavLink[] = [
    { name: 'Home', href: '/' },
  ];

  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 mb-10 md:mb-0">
          <Logo />
          <p className="mt-4 text-gray-300 max-w-xs">
            Your trusted partner in Law Firm Growth Consulting.
          </p>

        </div>

        <div className="flex space-x-12 sm:space-x-24 md:space-x-16 lg:space-x-32">
          <LinkColumn title="Sections" links={sectionsLinks} />
          <LinkColumn title="Pages" links={pagesLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
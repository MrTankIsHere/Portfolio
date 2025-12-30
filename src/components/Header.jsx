
import { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} `}>
            <div className="container header-content">
                <a href="#hero" className="logo" onClick={closeMenu}>
                    <img src="/logo.svg" alt="B Logo" className="logo-icon" />
                    Bhautik<span>.</span>
                </a>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={`bar ${isMenuOpen ? 'open' : ''} `}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''} `}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''} `}></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'nav-mobile-open' : ''} `}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={closeMenu}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Building, Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Hakkımızda', path: '/hakkimizda' },
        { name: 'Vizyonumuz', path: '/vizyonumuz' },
        { name: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
        { name: 'İletişim', path: '/iletisim' },
    ];

    const imageStyles = {
        width: '200px',       // Genişlik 300 piksel
        height: '80px',      // Yükseklik 250 piksel
        objectFit: 'cover',   // Resim, boyutları koruyarak alanı kaplasın (kırpılabilir)
        borderRadius: '8px'   // Kenarları yuvarlaklaştır
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className="flex items-center space-x-2">
                    <Link to="/"  className="flex items-center gap-3 text-gray-900" aria-label="Realty Tunax Ana Sayfa">
                        <img
                            src='/logo.PNG'
                            alt="Güzel bir ürün"
                            style={imageStyles}
                        />
                    </Link>
                </NavLink>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-gray-600 hover:text-primary transition-colors ${isActive ? 'text-primary font-semibold' : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobil Menü */}
            {isOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import InstagramIcon from "./icons/InstagramIcon.jsx";
import FacebookIcon from "./icons/FacebookIcon.jsx";
import TikTokIcon from "./icons/TikTokIcon.jsx";
import SahibindenIcon from "./icons/SahibindenIcon.jsx";

const Footer = () => {
    const imageStyles = {
        width: '200px',       // Genişlik 300 piksel
        height: '80px',      // Yükseklik 250 piksel
        objectFit: 'cover',   // Resim, boyutları koruyarak alanı kaplasın (kırpılabilir)
        borderRadius: '8px'   // Kenarları yuvarlaklaştır
    };
    return (
        <footer className="bg-primary">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center ms-20 mb-4">
                        <img
                            src='/logo.PNG'
                            alt="Güzel bir ürün"
                            style={imageStyles}
                        />
                    </div>
                    <p className="text-sm text-gray-600 mx-auto">
                        Yeni nesil gayrimenkul danışmanlığı ile hayallerinizdeki mülke ve doğru yatırımlara ulaşın.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-secondary">Hızlı Menü</h4>
                    <ul className="space-y-2 text-sm">
                        <li><NavLink to="/" className="hover:text-secondary">Ana Sayfa</NavLink></li>
                        <li><NavLink to="/hakkimizda" className="hover:text-secondary">Hakkımızda</NavLink></li>
                        <li><NavLink to="/vizyonumuz" className="hover:text-secondary">Vizyonumuz</NavLink></li>
                        <li><NavLink to="/hizmetlerimiz" className="hover:text-secondary">Hizmetlerimiz</NavLink></li>
                        <li><NavLink to="/iletisim" className="hover:text-secondary">İletişim</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-secondary">İletişim</h4>
                    <ul className="space-y-3 text-sm">
                        <a href="https://www.google.com/maps/search/?api=1&query=Realty+Tunax+G%C3%BCvenlik,+Derya+Cd.+Lidya+park+apt+No:20/b,+07230+Muratpa%C5%9Fa/Antalya" target="_blank" rel="noopener noreferrer" className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-1" /><span>Güvenlik, Derya Cd. Lidya park apt No:20/b, 07230 Muratpaşa/Antalya</span></a>
                        <a href="tel:+905530842270" className="flex items-center"><Phone className="w-4 h-4 mr-2" /><span>+90 553 084 22 70</span></a>
                        <a href="mailto:ismail.tuna@realtytunax.com" className="flex items-center"><Mail className="w-4 h-4 mr-2" /><span>ismail.tuna@realtytunax.com</span></a>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-secondary">Bizi Takip Edin</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-secondary"><InstagramIcon /></a>
                        <a href="#" className="hover:text-secondary"><FacebookIcon /></a>
                        <a href="#" className="hover:text-secondary"><TikTokIcon /></a>
                        <a href="https://tunaxgayrimenkul.sahibinden.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white w-6 h-6" aria-label="Sahibinden.com" ><SahibindenIcon /></a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-center py-4 text-xs text-gray-400">
                © {new Date().getFullYear()} Realty Tunax. Tüm Hakları Saklıdır.
            </div>
        </footer>
    );
};

export default Footer;
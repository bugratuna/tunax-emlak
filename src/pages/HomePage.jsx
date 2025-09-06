import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, Zap, Award } from 'lucide-react';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section
                className="relative h-[70vh] bg-cover bg-center flex items-center text-white"
            ><video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source
                    src="/Antalya_Cityscape_Video_Generation.mp4"
                    type="video/mp4"
                />
                Tarayıcınız video etiketini desteklemiyor.
            </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-extrabold mb-4"
                    >
                        Realty Tunax
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl mb-8"
                    >
                        Yeni Nesil Gayrimenkul Danışmanlığı
                    </motion.p>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <NavLink
                            to="/hizmetlerimiz"
                            className="bg-secondary hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                        >
                            Hizmetlerimizi Keşfedin
                        </NavLink>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Neden Realty Tunax?</h2>
                    <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">Gayrimenkulde başarıya giden yolda, müşterilerimiz için pürüzsüz ve kazançlı bir deneyim sunuyoruz.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { photo: 'add_domain.png', title: 'Eşsiz Uzmanlık', text: 'Ekibimiz, size benzersiz bilgiler ve rehberlik sağlamak için derin pazar bilgisine sahiptir.' },
                            { photo: 'groups.png', title: 'Müşteri Odaklı Yaklaşım', text: 'İhtiyaçlarınızı önceliklendiriyor, yolculuğunuz boyunca kişiselleştirilmiş hizmet sunuyoruz.' },
                            { photo: 'verified.png', title: 'Kanıtlanmış Başarı', text: 'Başarılı işlemlerle dolu geçmişimizle, dürüstlük ve mükemmellik konusunda bir itibar oluşturduk.' }
                        ].map(item => (
                            <div key={item.title} className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <img className="bg-rose-100 p-1 sm:p-1 my-auto" src={item.photo} alt={item.title}/>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default HomePage;
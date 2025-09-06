import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Gem } from 'lucide-react';

const VisionPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 py-16"
        >
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-primary">Misyon & Vizyon</h1>
                <p className="text-gray-600 mt-2">Geleceğe bakışımız ve temel değerlerimiz.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white p-8 rounded-lg shadow-lg"
                >
                    <div className="flex items-center mb-4">
                        <Target className="w-10 h-10 text-secondary mr-4" />
                        <h2 className="text-2xl font-semibold text-primary">Misyonumuz</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Antalya'nın dinamik gayrimenkul piyasasında, müşterilerimizin ihtiyaç ve beklentilerini en üst düzeyde karşılayarak onlara güvenilir, şeffaf ve sonuç odaklı bir danışmanlık hizmeti sunmaktır. Teknolojinin getirdiği yenilikleri (drone çekimi gibi) ve sektördeki derinlemesine uzmanlığımızı (piyasa ekspertizi, kentsel dönüşüm) birleştirerek, alım, satım ve yatırım süreçlerini müşterilerimiz için kolay, anlaşılır ve kârlı bir deneyime dönüştürmeyi hedefliyoruz. Her adımda dürüstlük ilkesiyle hareket ederek, sadece mülk danışmanlığı değil, aynı zamanda yaşam boyu güvenebilecekleri bir çözüm ortaklığı inşa etmeyi taahhüt ederiz.
                    </p>
                    <img
                        src="/mission.png"
                        alt="Misyonumuz"
                        className="w-full mx-auto mt-5 mb-4 object-cover border-4 border-gray-200"
                    />
                </motion.div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-white p-8 rounded-lg shadow-lg"
                >
                    <div className="flex items-center mb-4">
                        <Eye className="w-10 h-10 text-secondary mr-4" />
                        <h2 className="text-2xl font-semibold text-primary">Vizyonumuz</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        2025 yılında attığımız bu ilk adımı, ilerleyen yıllarda daha da büyüterek Antalya'da gayrimenkul danışmanlığı denildiğinde akla gelen ilk ve en güvenilir marka olmaktır. Sektördeki standartları yükselten, yenilikçi pazarlama teknikleri ve isabetli piyasa analizleriyle yön veren, özellikle kentsel dönüşüm alanında şehrin modern ve güvenli geleceğine katkıda bulunan öncü bir emlak ofisi olmayı amaçlıyoruz. Müşteri memnuniyetini her zaman merkezde tutarak, sadece Antalya'da değil, Akdeniz bölgesinde de referans gösterilen, kalitesi ve profesyonelliği ile tanınan bir kurum haline gelmek en büyük hedefimizdir.
                    </p>
                    <img
                        src="/vision.png"
                        alt="Vizyonumuz"
                        className="w-full mx-auto mt-5 mb-4 object-cover border-4 border-gray-200"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default VisionPage;
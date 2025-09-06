import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { BarChart, ShieldCheck, Search, Drone } from 'lucide-react';
import DigitalMarketingIcon from "../components/icons/DigitalMarketingIcon.jsx";
import MarketingAnalysisIcon from "../components/icons/MarketingAnalysisIcon.jsx";
import RentalServicesIcon from "../components/icons/RentalServicesIcon.jsx";
import ExpertizeIcon from "../components/icons/ExpertizeIcon.jsx";
import PurchaseAndSaleIcon from "../components/icons/PurchaseAndSaleIcon.jsx";
import HouseTransitionIcon from "../components/icons/HouseTransitionIcon.jsx";

// Hata düzeltmesi: İkon component'i, import hatasını önlemek için doğrudan bu dosyaya eklendi.



const services = [
    {
        icon: PurchaseAndSaleIcon,
        title: "Alım-Satım Danışmanlığı",
        description: "Mülkünüzü en iyi fiyata satmanıza veya hayalinizdeki mülkü bulmanıza yardımcı oluyoruz."
    },
    {
        // icon özelliğine component'in kendisini atıyoruz.
        icon: DigitalMarketingIcon,
        title: "Hedef Odaklı Dijital Pazarlama Stratejisi",
        description: "Mülkünüzü sadece portal sitelerinde değil, aynı zamanda doğru alıcı profiline yönelik sosyal medya ve Google reklam kampanyaları ile tanıtıyoruz."
    },
    {
        icon: MarketingAnalysisIcon,
        title: "Pazar Analizi ve Raporlama",
        description: "Bölgesel ve ulusal pazar trendlerini, fiyat endekslerini ve gelecek projeksiyonlarını içeren detaylı raporlarla, karar verme süreçlerinizi destekliyoruz."
    },
    {
        icon: RentalServicesIcon,
        title: "Kiralama Hizmetleri",
        description: "Kiracılar için ideal evi, mülk sahipleri için güvenilir kiracıyı bulma sürecini yönetiyoruz."
    },
    {
        icon: Search,
        title: "Portföy Yönetimi",
        description: "Gayrimenkul portföyünüzün değerini artırmak ve en verimli şekilde yönetmek için stratejik planlama ve profesyonel yönetim hizmetleri sunuyoruz."
    },
    {
        icon: ExpertizeIcon,
        title: "Ekspertiz ve Değerleme",
        description: "Mülkünüzün gerçek piyasa değerini profesyonel ekibimizle belirliyor, doğru yatırım kararları almanızı sağlıyoruz."
    },
    {
        icon: Drone,
        title: "Profesyonel Drone ve 3D Tanıtım Paketi",
        description: "Profesyonel drone ile mülkünüzün konumu, çevresi, manzarası ve dış cephesinin etkileyici video ve fotoğraflarını çekiyoruz. Bu, özellikle siteler ve ticari mülkler için vazgeçilmezdir."
    },
    {
        icon: HouseTransitionIcon,
        title: "Kentsel Dönüşüm Danışmanlığı",
        description: "Meltem ve Güvenlik mahallelerindeki kentsel dönüşüm potansiyeli taşıyan binalar ve arsalar için en karlı senaryoları (kat karşılığı, proje geliştirme vb.) analiz ediyor, müteahhit firmalarla görüşmeleri yönetiyoruz."
    }
];

const ServicesPage = () => {
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
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary">Hizmetlerimiz</h1>
                <p className="text-gray-600 mt-2">Profesyonel gayrimenkul çözümleri.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => {
                    // React'in dinamik olarak bir component'i render edebilmesi için,
                    // değişken adını büyük harfle başlatmak iyi bir pratiktir.
                    const IconComponent = service.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6"
                        >
                            <div className="flex-shrink-0">
                                {/* Component'i burada çağırıyoruz ve stil için className veriyoruz. */}
                                <IconComponent className="w-12 h-12 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    );
};

export default ServicesPage;


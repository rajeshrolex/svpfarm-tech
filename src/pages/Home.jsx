import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Egg, ShoppingBag, Truck, Info, MapPin, Users, Building, Globe, Smile, ChevronDown, ChevronUp, Star, Quote } from 'lucide-react';

const Home = () => {
    const cards = [
        {
            title: 'Egg Rate',
            image: '/images/card_egg.jpg', // Fresh eggs
            description: 'Check daily egg prices by state and city',
            color: 'from-yellow-50 to-orange-50',
            link: '/egg-rate',
            borderColor: 'border-yellow-200',
            icon: Egg
        },
        {
            title: 'Chick Rate',
            image: '/images/card_chick.jpg', // Baby chicks
            description: 'Find best prices for Sonali, Broiler, and more',
            color: 'from-orange-50 to-red-50',
            link: '/chick-rate',
            borderColor: 'border-orange-200',
            icon: Smile
        },
        {
            title: 'Chicken Rate',
            image: '/images/card_chicken.jpg', // Broiler chicken
            description: 'Live chicken market rates in your area',
            color: 'from-red-50 to-pink-50',
            link: '/chicken-rate',
            borderColor: 'border-red-200',
            icon: Truck
        },
        {
            title: 'Lifting Sale',
            image: '/images/card_lifting.jpg', // Delivery truck
            description: 'Browse bulk listings from verified sellers',
            color: 'from-blue-50 to-indigo-50',
            link: '/lifting-sale',
            borderColor: 'border-blue-200',
            icon: ShoppingBag
        }
    ];

    const testimonials = [
        { name: "Prasd N", role: "Poultry Farmer", text: "The price display for hens and chickens is clear, accurate, and helps me make informed purchasing decisions. Thanks to the easy-to-read price list, I can quickly find the right hens and chickens for my needs." },
        { name: "Krishna Ch", role: "Trader", text: "The pricing for hens and chickens is always up-to-date and easy to understand. The detailed price info helps me stay informed and make the best poultry decisions." },
        { name: "Vishal M", role: "Business Owner", text: "With accurate price details, I can confidently purchase hens and chickens without any surprises. Thanks to the easy-to-read price list, I can quickly find the right hens and chickens for my needs." },
        { name: "Akshara Ch", role: "Farmer", text: "I always trust this pricing guide to get the best deals on hens and chickens. With clear pricing, I can quickly decide on the best hens and chickens for my farm." }
    ];

    const faqs = [
        { question: "What information does the application provide?", answer: "The app provides up-to-date price listings for various breeds of chickens and chicks, along with additional details such as age, weight, and location-based pricing." },
        { question: "How often are the prices updated?", answer: "Prices are updated daily to reflect current market rates across different regions." },
        { question: "Is the price information accurate?", answer: "Yes, we source our data directly from reliable market inputs and standard rate cards like NECC." }
    ];

    const stats = [
        { label: "Happy Customers", value: "37,854", icon: Smile },
        { label: "Farms Onboarded", value: "1,739", icon: Building },
        { label: "States Covered", value: "7", icon: MapPin },
        { label: "Team Members", value: "12", icon: Users },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const heroImages = [
        '/images/hero_1.jpg',
        '/images/hero_2.jpg',
        '/images/hero_3.jpg',
        '/images/hero_4.jpg'
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="space-y-0 font-sans text-gray-800">
            {/* Ticker */}
            <div className="bg-primary-900 text-white py-2 overflow-hidden whitespace-nowrap relative border-b border-primary-800 shadow-md z-30">
                <div className="inline-block animate-marquee pl-4">
                    <span className="mx-6 text-sm font-semibold tracking-wide flex items-center inline-flex"><Egg className="w-4 h-4 mr-2 text-accent-400" /> NECC Egg Price: ₹5.45 <span className="text-green-400 ml-1">(+0.10)</span></span>
                    <span className="mx-6 text-sm font-semibold tracking-wide flex items-center inline-flex"><Truck className="w-4 h-4 mr-2 text-accent-400" /> Broiler: ₹92/kg</span>
                    <span className="mx-6 text-sm font-semibold tracking-wide flex items-center inline-flex"><Smile className="w-4 h-4 mr-2 text-accent-400" /> Layer Chick: ₹32</span>
                    <span className="mx-6 text-sm font-semibold tracking-wide flex items-center inline-flex"><Star className="w-4 h-4 mr-2 text-accent-400" /> All your Poultry needs in one place!</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white overflow-hidden h-[650px] flex items-center justify-center">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={img}
                            alt={`Hero ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
                    </div>
                ))}

                <div className="relative max-w-5xl mx-auto px-4 text-center z-10 space-y-8 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 backdrop-blur-sm text-accent-300 text-sm font-medium mb-4">
                        🚀 The #1 Marketplace for Poultry
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
                        ONE Solution for all <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-400">Poultry Needs</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                        Connecting farmers and traders with real-time rates, verified listings, and transparent deals.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                        <Link to="/register" className="group relative px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-full shadow-lg hover:shadow-accent-500/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                            <span className="relative z-10 flex items-center">Get Started Now <ChevronUp className="w-5 h-5 ml-2 rotate-90" /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </Link>
                        <Link to="/lifting-sale" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center">
                            View Market Listings
                        </Link>
                    </div>
                </div>
            </div>

            {/* Market Overview Cards */}
            <div className="relative z-20 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cards.map((card, idx) => (
                            <Link key={idx} to={card.link} className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                                {/* Image Section */}
                                <div className="relative h-52 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10 w-full h-full"></div>
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay for Text Visibility if needed */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-1 relative pt-8">
                                    {/* Floating Icon */}
                                    <div className={`absolute -top-8 right-6 w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center bg-gradient-to-br ${card.color} border-4 border-white transform group-hover:scale-110 transition-transform duration-300 z-20`}>
                                        <card.icon className="w-7 h-7 text-gray-800" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                                        {card.description}
                                    </p>

                                    {/* Action Footer */}
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Live Market</span>
                                        <span className="inline-flex items-center text-sm font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                                            View Rates
                                            <span className="ml-2 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors group-hover:translate-x-1 duration-300">
                                                <ChevronUp className="w-3 h-3 rotate-90 text-primary-600" strokeWidth={3} />
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`h-1 w-full bg-gradient-to-r ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">About HenCafe</span>
                        <h2 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                            Bridging <span className="text-accent-600">Farmers</span> & Businesses
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            A powerful digital bridge connecting the poultry ecosystem. Transparent, reliable, and built for growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Trusted Suppliers", icon: Truck, color: "bg-blue-100 text-blue-600" },
                                { title: "Quality Chicks", icon: Egg, color: "bg-yellow-100 text-yellow-600" },
                                { title: "Direct Selling", icon: ShoppingBag, color: "bg-green-100 text-green-600" },
                                { title: "Equipment Hub", icon: Building, color: "bg-purple-100 text-purple-600" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-500">Connect with huge network of verified partners.</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden h-full min-h-[400px] flex items-center">
                            <img src="/images/hero_1.jpg" alt="About" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                            <div className="relative z-10 text-white p-4">
                                <h3 className="text-3xl font-bold mb-4">Empowering Agriculture</h3>
                                <p className="text-gray-200">
                                    "We provide the technology that helps farmers get better prices and businesses get quality produce."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-primary-900 py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-700/50">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-4">
                                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</div>
                                <div className="text-accent-400 font-bold uppercase tracking-widest text-xs md:text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">What Our Users Say</h2>
                        <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:-translate-y-2 transition-transform duration-300">
                                <Quote className="w-10 h-10 text-accent-100 absolute top-4 right-4" />
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                                        <span className="text-xs text-accent-600 font-semibold uppercase">{t.role}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic leading-relaxed text-sm">"{t.text}"</p>
                                <div className="flex text-yellow-400 mt-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                        <p className="mt-4 text-gray-500">Everything you need to know about HenCafe rates and services.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full px-6 py-4 text-left bg-white flex justify-between items-center focus:outline-none"
                                >
                                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                                    {openFaqIndex === i ?
                                        <ChevronUp className="w-5 h-5 text-accent-500" /> :
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    }
                                </button>
                                <div
                                    className={`px-6 bg-gray-50 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;

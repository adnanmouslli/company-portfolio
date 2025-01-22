import React, { useState, useEffect } from 'react';
import { 
  Globe2,
  Building2, 
  Boxes, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  ChevronDown,  
  PackageOpen, 
  Users, 
  Trophy, 
  Star,
  Menu, 
  X 
} from 'lucide-react';
import StoresSection from './StoresSection';

// Store gallery data
const storeGalleryData = {
  'serpil-ekol': {
    name: 'Serpil & Ekol',
    images: [
      '/store-images/img1.jpg',
      '/store-images/img2.jpg',
      '/store-images/img3.jpg',
    ],
    description: 'أحدث صيحات الموضة التركية الراقية'
  },
  'secil': {
    name: 'Secil Store',
    images: [
      '/store-images/img1.jpg',
      '/store-images/img2.jpg',
      '/store-images/img3.jpg',
    ],
    description: 'تشكيلة متميزة من الأزياء العصرية'
  },
  'la-belle': {
    name: 'La Belle',
    images: [
      '/store-images/img1.jpg',
      '/store-images/img2.jpg',
      '/store-images/img3.jpg',
    ],
    description: 'أرقى العطور العالمية الفاخرة'
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('iraq');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    
    if (element) {
      const navHeight = 80; // ارتفاع النافبار
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // إغلاق القائمة المتحركة إذا كانت مفتوحة
      setIsMenuOpen(false);
    }
  };

 const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Our Stores', href: '#stores' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleStoreClick = (storeKey) => {
    setSelectedStore(storeGalleryData[storeKey]);
    setGalleryOpen(true);
  };

  return (

    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
       <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <img 
            src="/logo-preview.png" 
            alt="Company Logo" 
            className={`transition-all duration-300 ${
              scrolled ? 'h-12' : 'h-16'
            }`}
          />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-blue-900 hover:text-blue-600 font-medium transition"
              >
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                {item.name}
              </a>
            ))}
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-blue-900 hover:bg-blue-50 transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax Effect */}
      <div id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-200/20 transform rotate-12"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 leading-tight">
              Building Excellence<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Across Borders
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 max-w-3xl mx-auto">
              Trade • Logistics • Humanitarian Services
            </p>
            <div className="flex justify-center gap-4">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                Our Services
                <ChevronRight className="inline-block ml-2 transform group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border border-blue-200 hover:bg-blue-50 transition shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Stats Section with Hover Effects */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Building2, label: 'Countries', value: '3+', description: 'Global Presence' },
            { icon: Users, label: 'Team Members', value: '100+', description: 'Dedicated Professionals' },
            { icon: Trophy, label: 'Years Experience', value: '6+', description: 'Industry Expertise' },
            { icon: PackageOpen, label: 'Projects', value: '500+', description: 'Successful Deliveries' }
          ].map((stat, idx) => (
            <div key={idx} className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600 relative z-10" />
              </div>
              <div className="text-3xl font-bold mb-2 text-blue-900">{stat.value}</div>
              <div className="text-blue-600 font-medium">{stat.label}</div>
              <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

    {/* Enhanced About Us Section */}
    <div className="bg-gradient-to-b from-white to-gray-50 py-24" id="about">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Logo & Stats */}
          <div className="space-y-12">
            {/* Logo with Enhanced Design */}
            <div className="relative group">
              {/* Background Patterns */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
              
              {/* Logo Container */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img 
                    src="/logo-preview.png" 
                    alt="Company Logo" 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { 
                  value: '6+', 
                  label: 'سنوات من الخبرة', 
                  icon: Trophy, 
                  gradient: 'from-blue-500 to-blue-600',
                  hoverGradient: 'group-hover:from-blue-600 group-hover:to-blue-700',
                  bgLight: 'bg-blue-50'
                },
                { 
                  value: '100+', 
                  label: 'مشروع منجز', 
                  icon: PackageOpen, 
                  gradient: 'from-emerald-500 to-emerald-600',
                  hoverGradient: 'group-hover:from-emerald-600 group-hover:to-emerald-700',
                  bgLight: 'bg-emerald-50'
                },
                { 
                  value: '3', 
                  label: 'فروع رئيسية', 
                  icon: MapPin, 
                  gradient: 'from-violet-500 to-violet-600',
                  hoverGradient: 'group-hover:from-violet-600 group-hover:to-violet-700',
                  bgLight: 'bg-violet-50'
                },
                { 
                  value: '1000+', 
                  label: 'عميل سعيد', 
                  icon: Users, 
                  gradient: 'from-amber-500 to-amber-600',
                  hoverGradient: 'group-hover:from-amber-600 group-hover:to-amber-700',
                  bgLight: 'bg-amber-50'
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Corner Decorations */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${stat.bgLight} rounded-full -translate-y-12 translate-x-12 group-hover:translate-y-[-40%] group-hover:translate-x-[40%] transition-transform duration-500`}></div>
                  <div className={`absolute bottom-0 left-0 w-16 h-16 ${stat.bgLight} rounded-full translate-y-6 -translate-x-6 group-hover:translate-y-[40%] group-hover:translate-x-[-40%] transition-transform duration-500`}></div>
                  
                  <div className="relative flex flex-col items-end gap-4">
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.gradient} ${stat.hoverGradient} flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Value Display */}
                    <div className="text-right">
                      <h4 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300`}>
                        {stat.value}
                      </h4>
                      <p className="text-gray-600 mt-1 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {stat.label}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-500`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Content */}
          <div className="space-y-8">
            <div className="text-right">
              <h2 className="text-4xl font-bold text-blue-900 inline-block relative">
                من نحن؟
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 transform hover:-translate-y-1 transition-all duration-300">
              {[
                {
                  title: 'شركة رائدة',
                  description: 'مجموعة "حسن عبدالرحمن" و"الحسن المميز" هي مجموعة شركات رائدة تأسست قبل ست سنوات، وتلعب دوراً محورياً في دعم العمليات الإغاثية للمنظمات الدولية التابعة لمنصة الأمم المتحدة.',
                  icon: Building2
                },
                {
                  title: 'شراكات موثوقة',
                  description: 'من خلال عقود رسمية وشراكات موثوقة، ساهمت المجموعة بشكل فعال في تقديم المساعدة الإنسانية ومساندة المهجرين في مختلف المناطق.',
                  icon: Globe2
                }
              ].map((item, index) => (
                <div key={index} className="group flex items-start gap-6 text-right">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              ))}

              <button className="w-full group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300">
                <span>تعرف علينا أكثر</span>
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        {/* <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Users,
              title: 'فريق متخصص',
              description: 'نمتلك فريق عمل محترف ومتخصص',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Trophy,
              title: 'خبرة واسعة',
              description: 'سنوات من الخبرة في مجال الأعمال',
              color: 'from-amber-500 to-amber-600'
            },
            {
              icon: Star,
              title: 'جودة عالية',
              description: 'نقدم أعلى معايير الجودة لعملائنا',
              color: 'from-emerald-500 to-emerald-600'
            }
          ].map((feature, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-right">
              <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>


    <StoresSection/>


      {/* Enhanced Stores Section */}
    <div className="bg-gradient-to-b from-gray-50 to-white py-24" id="stores">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-blue-900 relative inline-block">
            متاجرنا في فاملي مول - دهوك
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم لكم أفضل الماركات العالمية في متاجرنا المتخصصة
          </p>
        </div>

        {/* Stores Grid */}
        <div className="space-y-24">
          {Object.entries(storeGalleryData).map(([key, store], index) => (
            <div key={key} className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Store Info */}
              <div className="md:w-1/3 space-y-6">
                <h3 className="text-3xl font-bold text-blue-900">{store.name}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{store.description}</p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
                    أزياء عصرية
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
                    جودة عالية
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
                    أحدث التصاميم
                  </span>
                </div>
                <button 
                  onClick={() => handleStoreClick(key)}
                  className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  استعرض المزيد
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Store Images Grid */}
              <div className="md:w-2/3 grid grid-cols-2 gap-4">
                {store.images.slice(0, 4).map((image, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className={`relative rounded-xl overflow-hidden group cursor-pointer
                      ${imgIndex === 0 ? 'col-span-2 row-span-2' : ''}
                    `}
                    onClick={() => handleStoreClick(key)}
                  >
                    <img 
                      src={image} 
                      alt={`${store.name} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white text-sm">عرض التفاصيل</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Gallery Modal */}
      {galleryOpen && selectedStore && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl px-4">
            {/* Close Button */}
            <button 
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Gallery Content */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {selectedStore.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedStore.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative aspect-square rounded-xl overflow-hidden"
                  >
                    <img 
                      src={image} 
                      alt={`${selectedStore.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <button className="px-4 py-2 bg-white text-blue-900 rounded-lg text-sm">
                          عرض الصورة
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>


      {/* Services Section with Enhanced Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-24" id="services">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Our Global Presence
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {[
            { id: 'iraq', label: 'Iraq', icon: Building2 },
            { id: 'dubai', label: 'Dubai', icon: Globe2 },
            { id: 'jordan', label: 'Jordan', icon: Building2 }
          ].map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveTab(location.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${activeTab === location.id 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
            >
              <location.icon className="w-4 h-4" />
              {location.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            {activeTab === 'iraq' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Iraq Operations</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                    <Boxes className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>General Trade & Import/Export</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                    <Building2 className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>Premium Retail Stores in Dohuk</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'dubai' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Dubai Hub</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                    <Globe2 className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>International Logistics Center</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                    <Building2 className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>Regional Trade Operations</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'jordan' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Jordan Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                    <Globe2 className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>Financial Services & Consulting</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                    <Building2 className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>Commercial Brokerage</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Retail Excellence</h3>
            <div className="space-y-6">
              {[
                { title: 'Serpil & Ekol', description: 'Premium Turkish Fashion' },
                { title: 'La Belle', description: 'High Fashion Boutique' },
                { title: 'Luxury Perfumes', description: 'Premium Fragrance Collection' }
              ].map((item, index) => (
                <div key={index} className="group p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Enhanced Cards */}
      <div className="bg-blue-50 py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'Dohuk, Iraq',
                address: 'Main Street, Business District',
                phone: '+964 770 151 8403',
                email: 'hassan_office1971@yahoo.com'
              },
              {
                city: 'Dubai, UAE',
                address: 'Sheikh Zayed Road',
                phone: '+971 585 90 0616',
                email: 'hassan_office1971@yahoo.com'
              },
              {
                city: 'Amman, Jordan',
                address: 'King Hussein Business Park',
                phone: '+964 770 151 8409',
                email: 'hassan_office1971@yahoo.com'
              }
            ].map((location, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{location.city}</h3>
                <p className="text-gray-500">{location.address}</p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2 group/item hover:text-blue-600 transition-colors">
                    <Phone className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 group/item hover:text-blue-600 transition-colors">
                    <Mail className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                    <span>{location.email}</span>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors group-hover:border-blue-300">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    

    {/* Enhanced Footer */}
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="h-12"
            />
            <p className="text-gray-600">Leading provider of trade, logistics, and humanitarian services across borders.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <span className="text-blue-600">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <span className="text-blue-600">IN</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <span className="text-blue-600">TW</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                'General Trade',
                'Logistics Solutions',
                'Retail Operations',
                'Humanitarian Aid',
                'Financial Services',
                'Import/Export'
              ].map((service, index) => (
                <li key={index} className="hover:text-blue-600 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-4">Locations</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                'Iraq - Dohuk',
                'UAE - Dubai',
                'Jordan - Amman',
                'Store Locations',
                'Office Directory'
              ].map((location, index) => (
                <li key={index} className="hover:text-blue-600 transition-colors cursor-pointer">
                  {location}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                'About Us',
                'Contact',
                'Careers',
                'News & Updates',
                'Privacy Policy',
                'Terms of Service'
              ].map((link, index) => (
                <li key={index} className="hover:text-blue-600 transition-colors cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © 2024 Hassan Abdulrahman Hashim Company. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Gallery Modal */}
    {galleryOpen && selectedStore && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-blue-900">{selectedStore.name}</h3>
              <button 
                onClick={() => setGalleryOpen(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto max-h-[70vh]">
              {selectedStore.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${selectedStore.name} - Image ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


   {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-110"
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </button>
      
  </div>
);
}

export default App;
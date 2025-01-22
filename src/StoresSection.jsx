import React, { useState } from 'react';
import { 
  Globe2, Building2, Boxes, Phone, Mail, MapPin, 
  ChevronRight, PackageOpen, Users, Trophy, Star,
  Menu, X, ShoppingBag, Clock, Instagram 
} from 'lucide-react';

// بيانات المعرض
const storeGalleryData = {
  'serpil-ekol': {
    name: 'Serpil & Ekol',
    description: 'أحدث صيحات الموضة التركية الراقية',
    icon: ShoppingBag,
    color: 'from-blue-500 to-blue-600',
    tags: ['أزياء عصرية', 'موضة تركية', 'أحدث التصاميم'],
    images: ['/store-images/img1.jpg', '/store-images/img2.jpg', '/store-images/img3.jpg', '/store-images/img4.jpg'],
    hours: '10:00 صباحاً - 10:00 مساءً',
    phone: '+964 750 XXX XXXX',
    instagram: '@serpil.ekol.duhok'
  },
  'secil': {
    name: 'Secil Store',
    description: 'تشكيلة متميزة من الأزياء العصرية',
    icon: Star,
    color: 'from-violet-500 to-violet-600',
    tags: ['أزياء عصرية', 'جودة عالية', 'ملابس متنوعة'],
    images: ['/store-images/img1.jpg', '/store-images/img2.jpg', '/store-images/img3.jpg', '/store-images/img4.jpg'],
    hours: '10:00 صباحاً - 10:00 مساءً',
    phone: '+964 750 XXX XXXX',
    instagram: '@secil.duhok'
  },
  'la-belle': {
    name: 'La Belle',
    description: 'أرقى العطور العالمية الفاخرة',
    icon: PackageOpen,
    color: 'from-emerald-500 to-emerald-600',
    tags: ['عطور فاخرة', 'ماركات عالمية', 'منتجات تجميل'],
    images: ['/store-images/img1.jpg', '/store-images/img2.jpg', '/store-images/img3.jpg', '/store-images/img4.jpg'],
    hours: '10:00 صباحاً - 10:00 مساءً',
    phone: '+964 750 XXX XXXX',
    instagram: '@labelle.duhok'
  }
};

const StoresSection = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

//   const handleStoreClick = (storeKey) => {
//     setSelectedStore(storeGalleryData[storeKey]);
//     setGalleryOpen(true);
//   };

  // مكون StoreCard للمتاجر
  const StoreCard = ({ store, storeKey, index }) => {
    const IconComponent = store.icon;
    return (
      <div className={`flex flex-col md:flex-row gap-8 items-center ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}>
        {/* معلومات المتجر */}
        <div className="md:w-1/3 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative">
              {/* أيقونة المتجر */}
              <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${store.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              {/* اسم المتجر */}
              <h3 className="text-3xl font-bold text-blue-900">{store.name}</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 mt-2 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* وصف المتجر */}
          <p className="text-gray-600 text-lg leading-relaxed">{store.description}</p>

          {/* معلومات الاتصال */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">ساعات العمل</span>
              </div>
              <p className="text-sm text-gray-600">{store.hours}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">اتصل بنا</span>
              </div>
              <p className="text-sm text-gray-600 direction-ltr">{store.phone}</p>
            </div>
          </div>

          {/* العلامات */}
          <div className="flex flex-wrap gap-3">
            {store.tags.map((tag, idx) => (
              <span 
                key={idx}
                className={`px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r ${store.color} text-white transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* أزرار التواصل */}
          <div className="flex gap-4">
            <button 
              onClick={() => handleStoreClick(storeKey)}
              className={`flex-1 group flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${store.color} text-white rounded-xl hover:shadow-lg transition-all duration-300`}
            >
              <span>معرض الصور</span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={`https://instagram.com/${store.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* معرض الصور */}
        <div className="md:w-2/3 grid grid-cols-2 gap-4">
          {store.images.slice(0, 4).map((image, imgIndex) => (
            <div 
              key={imgIndex}
              className={`relative rounded-xl overflow-hidden cursor-pointer group
                ${imgIndex === 0 ? 'col-span-2 row-span-2' : ''}
              `}
            //   onClick={() => handleStoreClick(storeKey)}
            >
              <img 
                src={image}
                alt={`${store.name} - Image ${imgIndex + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
             
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24" id="stores">
      <div className="max-w-7xl mx-auto px-4">
        {/* ترويسة القسم */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-blue-900 relative inline-block">
            متاجرنا في فاملي مول - دهوك
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم لكم أفضل الماركات العالمية في متاجرنا المتخصصة
          </p>
        </div>

        {/* شبكة المتاجر */}
        <div className="space-y-24">
          {Object.entries(storeGalleryData).map(([key, store], index) => (
            <StoreCard 
              key={key}
              store={store}
              storeKey={key}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* نافذة معرض الصور */}
      {galleryOpen && selectedStore && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            {/* زر الإغلاق */}
            <button 
              onClick={() => setGalleryOpen(false)}
              className="absolute -top-2 -right-2 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* محتوى المعرض */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                معرض صور {selectedStore.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedStore.images.map((image, index) => (
                  <div 
                    key={index}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image}
                      alt={`${selectedStore.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <button className="px-4 py-2 bg-white text-blue-900 rounded-lg text-sm font-medium">
                          تكبير الصورة
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
  );
};

export default StoresSection;
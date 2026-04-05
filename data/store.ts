export type Language = "en" | "mr";

export type ProductCategory =
  | "sarees"
  | "kurtis"
  | "frocks"
  | "kids"
  | "tops"
  | "leggings";

export type Product = {
  id: string;
  slug: string;
  key: ProductCategory;
  names: Record<Language, string>;
  descriptions: Record<Language, string>;
  details: Record<Language, string>;
  price: number;
  sizes: string[];
  theme: string;
  image: string;
};

export const phoneNumber = "919008278110";

export const translations = {
  en: {
    brandTag: "Ladies & Kids Fashion Store",
    heroKicker: "New arrivals for every celebration",
    heroTitle: "Elegant fashion for women and playful styles for kids.",
    heroText:
      "Shop sarees, kurtis, tops, leggings, frocks, and kids wear from Kutre Cloth Stores. Add products to cart and place your order directly on WhatsApp.",
    heroSubtext: "Fresh styles from Nesari for daily wear, festive shopping, and family occasions.",
    shopNow: "Shop Now",
    howToOrder: "How to Order",
    whatsappLabel: "WhatsApp Orders:",
    callNow: "Call Now",
    featured: "Featured Collection",
    heroCardTitle: "Style for festive days and daily comfort",
    heroCardText:
      "A warm, colorful storefront that makes ordering simple for your local customers.",
    trustOne: "Trusted local store",
    trustTwo: "Fast WhatsApp confirmation",
    trustThree: "Ladies and kids collections",
    statsYearsLabel: "Store Focus",
    statsYearsValue: "Ladies & Kids",
    statsOrdersLabel: "Order Support",
    statsOrdersValue: "WhatsApp",
    statsVisitLabel: "Location",
    statsVisitValue: "Nesari, Kolhapur",
    ladiesWear: "Ladies Wear",
    kidsWear: "Kids Wear",
    visitUs: "Visit Us",
    addressTitle: "Store Address",
    addressText: "Kutre Cloth Store, Bazar Peth, Nesari, Tal. Gadhinglaj, Kolhapur",
    easyOrders: "Easy Orders",
    orderModeTitle: "WhatsApp Confirmation",
    orderModeText:
      "Customers can browse products, add items to cart, and send the final order on WhatsApp.",
    sizesAvailable: "Sizes Available",
    sizeTitle: "For Kurtis, Frocks, Kids Wear, Tops & Leggings",
    sizeText: "S, M, XL and XXL available in selected styles.",
    collectionsKicker: "Collections",
    collectionsTitle: "Popular styles for ladies and kids",
    placeholderNote: "Sample products, images and prices can be updated later",
    browseByCategory: "Browse by Category",
    allProducts: "All Products",
    searchLabel: "Search Products",
    searchPlaceholder: "Search sarees, kurtis, kids wear...",
    noResults: "No matching products found. Try another category or search term.",
    cartKicker: "Your Basket",
    cartTitle: "Cart Summary",
    emptyCart: "Your cart is empty. Add products to place an order.",
    totalLabel: "Estimated Total",
    continueToOrder: "Continue to Order",
    benefitsKicker: "Why Choose Us",
    benefitsTitle: "Simple shopping for nearby customers",
    benefitOneTitle: "Easy ordering",
    benefitOneText: "Customers can browse, add products, and confirm the full order directly on WhatsApp.",
    benefitTwoTitle: "Local trust",
    benefitTwoText: "Your store location and contact details are visible, which helps local buyers feel confident.",
    benefitThreeTitle: "Flexible updates",
    benefitThreeText: "Products, prices, and photos can be replaced any time as your inventory changes.",
    faqKicker: "FAQ",
    faqTitle: "Common customer questions",
    faqOneQuestion: "How do I place an order?",
    faqOneAnswer: "Add products to the cart, fill your details, and send the order on WhatsApp.",
    faqTwoQuestion: "Can I ask about sizes and colors?",
    faqTwoAnswer: "Yes. Use the extra note box or message directly on WhatsApp for size and color availability.",
    faqThreeQuestion: "Do you support online payment?",
    faqThreeAnswer: "Currently the website is set up for WhatsApp confirmation. Payment options can be discussed with the store.",
    visitContact: "Visit or Contact Us",
    orderKicker: "Quick Checkout",
    orderTitle: "Place your order in a few steps",
    orderText:
      "Fill in your details, review your selected products, and send the order directly to Kutre Cloth Stores on WhatsApp.",
    stepOne: "Select garments from the collection.",
    stepTwo: "Add your name, phone number and address.",
    stepThree: "Send the order on WhatsApp for confirmation.",
    nameLabel: "Customer Name",
    phoneLabel: "Phone Number",
    addressLabel: "Delivery Address",
    noteLabel: "Extra Note",
    notePlaceholder: "Color, size or delivery notes",
    sendOrder: "Send Order on WhatsApp",
    addToCart: "Add to Cart",
    viewDetails: "View Details",
    sizePrefix: "Sizes",
    cartQty: "Qty",
    orderAlertEmpty: "Please add at least one product to the cart.",
    orderAlertFields: "Please fill in your name, phone number and address.",
    orderMessageIntro: "Hello Kutre Cloth Stores, I want to place an order.",
    orderMessageName: "Name",
    orderMessagePhone: "Phone",
    orderMessageAddress: "Address",
    orderMessageItems: "Items",
    orderMessageTotal: "Estimated total",
    orderMessageNote: "Note",
    deployLabel: "Deploy",
    deployTitle: "Ready to Go Live",
    deployText:
      "This Next.js project is prepared for static export so it can be deployed on Vercel, Netlify or any host that serves static files.",
    bannerTitle: "Festive arrivals for ladies and kids",
    bannerText:
      "Discover everyday essentials, occasion wear, and colorful family shopping from one local store.",
    bannerChipOne: "New styles every week",
    bannerChipTwo: "WhatsApp order confirmation",
    bannerChipThree: "Local store support",
    detailTitle: "Product Details",
    detailBack: "Back to Home",
    detailOrder: "Order on WhatsApp",
    relatedTitle: "You may also like",
    productCategories: {
      sarees: "Sarees",
      kurtis: "Kurtis",
      frocks: "Frocks",
      kids: "Kids Wear",
      tops: "Tops",
      leggings: "Leggings"
    }
  },
  mr: {
    brandTag: "महिला आणि मुलांचे कपड्यांचे दुकान",
    heroKicker: "प्रत्येक सणासाठी नवीन आकर्षक कलेक्शन",
    heroTitle: "महिलांसाठी सुंदर फॅशन आणि मुलांसाठी आरामदायी स्टाइल.",
    heroText:
      "Kutre Cloth Stores मधून साड्या, कुर्ती, टॉप्स, लेगिंग्स, फ्रॉक्स आणि किड्स वेअर खरेदी करा. कार्टमध्ये जोडा आणि थेट WhatsApp वर ऑर्डर करा.",
    heroSubtext: "नेसरीतील ग्राहकांसाठी रोजच्या वापराचे, सणासुदीचे आणि कुटुंबासाठी आकर्षक कपडे.",
    shopNow: "खरेदी सुरू करा",
    howToOrder: "ऑर्डर कशी करावी",
    whatsappLabel: "WhatsApp ऑर्डर्स:",
    callNow: "कॉल करा",
    featured: "फीचर्ड कलेक्शन",
    heroCardTitle: "सणांसाठी स्टाइल आणि रोजच्या वापरासाठी आराम",
    heroCardText:
      "आपल्या स्थानिक ग्राहकांसाठी सोपी ऑर्डर प्रक्रिया असलेले आकर्षक ऑनलाइन दुकान.",
    trustOne: "विश्वासू स्थानिक दुकान",
    trustTwo: "जलद WhatsApp कन्फर्मेशन",
    trustThree: "महिला आणि मुलांचे कलेक्शन",
    statsYearsLabel: "दुकानाचे लक्ष",
    statsYearsValue: "महिला व मुलांचे कपडे",
    statsOrdersLabel: "ऑर्डर सुविधा",
    statsOrdersValue: "WhatsApp",
    statsVisitLabel: "ठिकाण",
    statsVisitValue: "नेसरी, कोल्हापूर",
    ladiesWear: "महिला कपडे",
    kidsWear: "मुलांचे कपडे",
    visitUs: "दुकानाला भेट द्या",
    addressTitle: "दुकानाचा पत्ता",
    addressText: "Kutre Cloth Store, बाजार पेठ, नेसरी, ता. गडहिंग्लज, कोल्हापूर",
    easyOrders: "सोप्या ऑर्डर्स",
    orderModeTitle: "WhatsApp कन्फर्मेशन",
    orderModeText:
      "ग्राहक प्रॉडक्ट पाहू शकतात, कार्टमध्ये टाकू शकतात आणि अंतिम ऑर्डर WhatsApp वर पाठवू शकतात.",
    sizesAvailable: "उपलब्ध साईज",
    sizeTitle: "कुर्ती, फ्रॉक, किड्स वेअर, टॉप्स आणि लेगिंग्ससाठी",
    sizeText: "निवडक स्टाइलमध्ये S, M, XL आणि XXL उपलब्ध आहेत.",
    collectionsKicker: "कलेक्शन",
    collectionsTitle: "महिला आणि मुलांसाठी लोकप्रिय स्टाइल्स",
    placeholderNote: "नमुना प्रॉडक्ट, फोटो आणि किंमती नंतर बदलता येतील",
    browseByCategory: "कॅटेगरीनुसार पहा",
    allProducts: "सर्व प्रॉडक्ट्स",
    searchLabel: "प्रॉडक्ट शोधा",
    searchPlaceholder: "साड्या, कुर्ती, किड्स वेअर शोधा...",
    noResults: "जुळणारे प्रॉडक्ट मिळाले नाहीत. दुसरी कॅटेगरी किंवा शोध वापरा.",
    cartKicker: "तुमची निवड",
    cartTitle: "कार्ट सारांश",
    emptyCart: "तुमची कार्ट रिकामी आहे. ऑर्डरसाठी प्रॉडक्ट जोडा.",
    totalLabel: "अंदाजे एकूण",
    continueToOrder: "ऑर्डरकडे जा",
    benefitsKicker: "आम्हालाच का निवडावे",
    benefitsTitle: "जवळच्या ग्राहकांसाठी सोपी खरेदी",
    benefitOneTitle: "सोपे ऑर्डरिंग",
    benefitOneText: "ग्राहक प्रॉडक्ट पाहू शकतात, कार्टमध्ये टाकू शकतात आणि WhatsApp वर ऑर्डर कन्फर्म करू शकतात.",
    benefitTwoTitle: "स्थानिक विश्वास",
    benefitTwoText: "दुकानाचा पत्ता आणि संपर्क स्पष्ट दिसत असल्यामुळे स्थानिक ग्राहकांचा विश्वास वाढतो.",
    benefitThreeTitle: "सुलभ अपडेट्स",
    benefitThreeText: "तुमचे प्रॉडक्ट, किंमती आणि फोटो कधीही बदलता येतात.",
    faqKicker: "FAQ",
    faqTitle: "ग्राहकांचे सामान्य प्रश्न",
    faqOneQuestion: "ऑर्डर कशी करायची?",
    faqOneAnswer: "प्रॉडक्ट कार्टमध्ये जोडा, माहिती भरा आणि WhatsApp वर ऑर्डर पाठवा.",
    faqTwoQuestion: "साईज आणि रंगाबद्दल विचारू शकतो का?",
    faqTwoAnswer: "हो. अतिरिक्त सूचना बॉक्समध्ये लिहा किंवा थेट WhatsApp वर विचारा.",
    faqThreeQuestion: "ऑनलाइन पेमेंट आहे का?",
    faqThreeAnswer: "आत्ता वेबसाइट WhatsApp कन्फर्मेशनसाठी आहे. पेमेंटची माहिती दुकानाशी बोलून ठरवता येईल.",
    visitContact: "दुकानाला भेट द्या किंवा संपर्क करा",
    orderKicker: "जलद चेकआउट",
    orderTitle: "काही टप्प्यांत ऑर्डर करा",
    orderText:
      "तुमची माहिती भरा, निवडलेले प्रॉडक्ट तपासा आणि ऑर्डर थेट Kutre Cloth Stores च्या WhatsApp वर पाठवा.",
    stepOne: "कलेक्शनमधून कपडे निवडा.",
    stepTwo: "तुमचे नाव, फोन नंबर आणि पत्ता भरा.",
    stepThree: "कन्फर्मेशनसाठी ऑर्डर WhatsApp वर पाठवा.",
    nameLabel: "ग्राहकाचे नाव",
    phoneLabel: "फोन नंबर",
    addressLabel: "डिलिव्हरी पत्ता",
    noteLabel: "अतिरिक्त सूचना",
    notePlaceholder: "रंग, साईज किंवा डिलिव्हरी सूचना",
    sendOrder: "WhatsApp वर ऑर्डर पाठवा",
    addToCart: "कार्टमध्ये जोडा",
    viewDetails: "तपशील पहा",
    sizePrefix: "साईज",
    cartQty: "संख्या",
    orderAlertEmpty: "कृपया किमान एक प्रॉडक्ट कार्टमध्ये जोडा.",
    orderAlertFields: "कृपया नाव, फोन नंबर आणि पत्ता भरा.",
    orderMessageIntro: "नमस्कार Kutre Cloth Stores, मला ऑर्डर द्यायची आहे.",
    orderMessageName: "नाव",
    orderMessagePhone: "फोन",
    orderMessageAddress: "पत्ता",
    orderMessageItems: "प्रॉडक्ट्स",
    orderMessageTotal: "अंदाजे एकूण",
    orderMessageNote: "सूचना",
    deployLabel: "डिप्लॉय",
    deployTitle: "लाईव्ह होण्यासाठी तयार",
    deployText:
      "हा Next.js प्रोजेक्ट static export साठी तयार आहे, त्यामुळे Vercel, Netlify किंवा कोणत्याही static hosting वर deploy करता येईल.",
    bannerTitle: "महिला आणि मुलांसाठी आकर्षक नवीन कलेक्शन",
    bannerText:
      "रोजच्या वापरापासून सणासुदीच्या कपड्यांपर्यंत सगळे एकाच स्थानिक दुकानातून पहा.",
    bannerChipOne: "दर आठवड्याला नवीन स्टाइल्स",
    bannerChipTwo: "WhatsApp वर ऑर्डर कन्फर्मेशन",
    bannerChipThree: "स्थानिक दुकानाचा विश्वास",
    detailTitle: "प्रॉडक्ट तपशील",
    detailBack: "होमवर जा",
    detailOrder: "WhatsApp वर ऑर्डर करा",
    relatedTitle: "तुम्हाला हेही आवडू शकते",
    productCategories: {
      sarees: "साड्या",
      kurtis: "कुर्ती",
      frocks: "फ्रॉक्स",
      kids: "किड्स वेअर",
      tops: "टॉप्स",
      leggings: "लेगिंग्स"
    }
  }
} as const;

export const products: Product[] = [
  {
    id: "saree-1",
    slug: "festival-silk-saree",
    key: "sarees",
    names: {
      en: "Festival Silk Saree",
      mr: "फेस्टिव्हल सिल्क साडी"
    },
    descriptions: {
      en: "A festive drape with rich tones for wedding and celebration wear.",
      mr: "लग्नसमारंभ आणि सणांसाठी उठावदार रंगांची सुंदर साडी."
    },
    details: {
      en: "This saree is styled as a festive statement piece with rich color tones and graceful drape appeal for special occasions.",
      mr: "ही साडी सण, समारंभ आणि खास प्रसंगांसाठी आकर्षक लूक देणारी स्टेटमेंट स्टाइल म्हणून तयार केली आहे."
    },
    price: 1899,
    sizes: [],
    theme: "linear-gradient(135deg, #b63258, #f1a24f)"
    ,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "kurti-1",
    slug: "printed-rayon-kurti",
    key: "kurtis",
    names: {
      en: "Printed Rayon Kurti",
      mr: "प्रिंटेड रेयॉन कुर्ती"
    },
    descriptions: {
      en: "Comfortable daily wear kurti with easy movement and bright prints.",
      mr: "दररोज वापरासाठी आरामदायी आणि आकर्षक प्रिंटची कुर्ती."
    },
    details: {
      en: "A soft daily-wear kurti style with easy movement, light fabric feel, and a polished casual look for regular outings.",
      mr: "दररोज वापरासाठी हलकी, आरामदायी आणि आकर्षक प्रिंट असलेली कुर्ती स्टाइल."
    },
    price: 899,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #915f95, #f3c6b4)",
    image: "https://images.unsplash.com/photo-1583391733981-8496f31734e3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "frock-1",
    slug: "floral-party-frock",
    key: "frocks",
    names: {
      en: "Floral Party Frock",
      mr: "फ्लोरल पार्टी फ्रॉक"
    },
    descriptions: {
      en: "Soft party frock for special occasions with a playful silhouette.",
      mr: "विशेष प्रसंगांसाठी हलकासा आणि सुंदर पार्टी फ्रॉक."
    },
    details: {
      en: "A cheerful frock style for kids and family events, designed to look festive while staying comfortable through the day.",
      mr: "मुलांच्या कार्यक्रमांसाठी आणि पार्टीसाठी आरामदायी पण आकर्षक असा फ्रॉक लूक."
    },
    price: 799,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #ff907a, #ffd57d)",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "kids-1",
    slug: "comfort-kids-set",
    key: "kids",
    names: {
      en: "Comfort Kids Set",
      mr: "कम्फर्ट किड्स सेट"
    },
    descriptions: {
      en: "Play-friendly kids outfit designed for comfort through the day.",
      mr: "मुलांसाठी दिवसभर आरामदायी आणि खेळकर कपड्यांचा सेट."
    },
    details: {
      en: "A comfortable kids wear set made for active movement, casual wear, and colorful everyday styling.",
      mr: "मुलांसाठी खेळताना आणि रोजच्या वापरासाठी आरामदायी व सुंदर कपड्यांचा सेट."
    },
    price: 699,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #438d80, #bee5a6)",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "tops-1",
    slug: "trendy-everyday-top",
    key: "tops",
    names: {
      en: "Trendy Everyday Top",
      mr: "ट्रेंडी एव्हरीडे टॉप"
    },
    descriptions: {
      en: "Simple and modern top designed for regular wear and easy styling.",
      mr: "दररोज वापरासाठी हलका, आधुनिक आणि सहज जुळणारा टॉप."
    },
    details: {
      en: "This top is designed for easy everyday styling with a modern silhouette and simple pairing options.",
      mr: "सहज मॅच होणारा, आधुनिक लूक देणारा आणि रोजच्या वापरासाठी योग्य असा टॉप."
    },
    price: 549,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #ca4d73, #f9c884)",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "leggings-1",
    slug: "stretch-fit-leggings",
    key: "leggings",
    names: {
      en: "Stretch Fit Leggings",
      mr: "स्ट्रेच फिट लेगिंग्स"
    },
    descriptions: {
      en: "Comfort fit leggings for everyday use with soft stretch fabric.",
      mr: "मऊ स्ट्रेच फॅब्रिकमधील आरामदायी रोजच्या वापराच्या लेगिंग्स."
    },
    details: {
      en: "A soft stretch-fit essential designed to pair with kurtis, tops, and regular daily outfits.",
      mr: "कुर्ती, टॉप्स आणि रोजच्या कपड्यांसोबत सहज वापरता येणारी स्ट्रेच फिट लेगिंग्स."
    },
    price: 399,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #424d88, #91c8e4)",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
  }
];

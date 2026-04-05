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
  key: ProductCategory;
  names: Record<Language, string>;
  descriptions: Record<Language, string>;
  price: number;
  sizes: string[];
  theme: string;
};

export const phoneNumber = "919008278110";

export const translations = {
  en: {
    brandTag: "Ladies & Kids Fashion Store",
    heroKicker: "New arrivals for every celebration",
    heroTitle: "Elegant fashion for women and playful styles for kids.",
    heroText:
      "Shop sarees, kurtis, tops, leggings, frocks, and kids wear from Kutre Cloth Stores. Add products to cart and place your order directly on WhatsApp.",
    shopNow: "Shop Now",
    howToOrder: "How to Order",
    whatsappLabel: "WhatsApp Orders:",
    featured: "Featured Collection",
    heroCardTitle: "Style for festive days and daily comfort",
    heroCardText:
      "A warm, colorful storefront that makes ordering simple for your local customers.",
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
    cartKicker: "Your Basket",
    cartTitle: "Cart Summary",
    emptyCart: "Your cart is empty. Add products to place an order.",
    totalLabel: "Estimated Total",
    continueToOrder: "Continue to Order",
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
    shopNow: "खरेदी सुरू करा",
    howToOrder: "ऑर्डर कशी करावी",
    whatsappLabel: "WhatsApp ऑर्डर्स:",
    featured: "फीचर्ड कलेक्शन",
    heroCardTitle: "सणांसाठी स्टाइल आणि रोजच्या वापरासाठी आराम",
    heroCardText:
      "आपल्या स्थानिक ग्राहकांसाठी सोपी ऑर्डर प्रक्रिया असलेले आकर्षक ऑनलाइन दुकान.",
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
    cartKicker: "तुमची निवड",
    cartTitle: "कार्ट सारांश",
    emptyCart: "तुमची कार्ट रिकामी आहे. ऑर्डरसाठी प्रॉडक्ट जोडा.",
    totalLabel: "अंदाजे एकूण",
    continueToOrder: "ऑर्डरकडे जा",
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
    key: "sarees",
    names: {
      en: "Festival Silk Saree",
      mr: "फेस्टिव्हल सिल्क साडी"
    },
    descriptions: {
      en: "A festive drape with rich tones for wedding and celebration wear.",
      mr: "लग्नसमारंभ आणि सणांसाठी उठावदार रंगांची सुंदर साडी."
    },
    price: 1899,
    sizes: [],
    theme: "linear-gradient(135deg, #b63258, #f1a24f)"
  },
  {
    id: "kurti-1",
    key: "kurtis",
    names: {
      en: "Printed Rayon Kurti",
      mr: "प्रिंटेड रेयॉन कुर्ती"
    },
    descriptions: {
      en: "Comfortable daily wear kurti with easy movement and bright prints.",
      mr: "दररोज वापरासाठी आरामदायी आणि आकर्षक प्रिंटची कुर्ती."
    },
    price: 899,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #915f95, #f3c6b4)"
  },
  {
    id: "frock-1",
    key: "frocks",
    names: {
      en: "Floral Party Frock",
      mr: "फ्लोरल पार्टी फ्रॉक"
    },
    descriptions: {
      en: "Soft party frock for special occasions with a playful silhouette.",
      mr: "विशेष प्रसंगांसाठी हलकासा आणि सुंदर पार्टी फ्रॉक."
    },
    price: 799,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #ff907a, #ffd57d)"
  },
  {
    id: "kids-1",
    key: "kids",
    names: {
      en: "Comfort Kids Set",
      mr: "कम्फर्ट किड्स सेट"
    },
    descriptions: {
      en: "Play-friendly kids outfit designed for comfort through the day.",
      mr: "मुलांसाठी दिवसभर आरामदायी आणि खेळकर कपड्यांचा सेट."
    },
    price: 699,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #438d80, #bee5a6)"
  },
  {
    id: "tops-1",
    key: "tops",
    names: {
      en: "Trendy Everyday Top",
      mr: "ट्रेंडी एव्हरीडे टॉप"
    },
    descriptions: {
      en: "Simple and modern top designed for regular wear and easy styling.",
      mr: "दररोज वापरासाठी हलका, आधुनिक आणि सहज जुळणारा टॉप."
    },
    price: 549,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #ca4d73, #f9c884)"
  },
  {
    id: "leggings-1",
    key: "leggings",
    names: {
      en: "Stretch Fit Leggings",
      mr: "स्ट्रेच फिट लेगिंग्स"
    },
    descriptions: {
      en: "Comfort fit leggings for everyday use with soft stretch fabric.",
      mr: "मऊ स्ट्रेच फॅब्रिकमधील आरामदायी रोजच्या वापराच्या लेगिंग्स."
    },
    price: 399,
    sizes: ["S", "M", "XL", "XXL"],
    theme: "linear-gradient(135deg, #424d88, #91c8e4)"
  }
];

export const paymentMarkets = [
  { slug: "togo", flagCode: "tg", name: { en: "Togo", fr: "Togo", zh: "多哥" }, code: "+228", methods: ["Moov Money", "TMoney", "Visa / Mastercard"] },
  { slug: "benin", flagCode: "bj", name: { en: "Benin", fr: "Bénin", zh: "贝宁" }, code: "+229", methods: ["MTN Mobile Money", "Moov Africa"] },
  { slug: "burkina-faso", flagCode: "bf", name: { en: "Burkina Faso", fr: "Burkina Faso", zh: "布基纳法索" }, code: "+226", methods: ["Moov Money", "Orange Money"] },
  { slug: "cameroon", flagCode: "cm", name: { en: "Cameroon", fr: "Cameroun", zh: "喀麦隆" }, code: "+237", methods: ["MTN Mobile Money", "Orange Money"] },
  { slug: "congo-brazzaville", flagCode: "cg", name: { en: "Congo-Brazzaville", fr: "Congo-Brazzaville", zh: "刚果（布）" }, code: "+242", methods: ["MTN Mobile Money", "Airtel Money"] },
  { slug: "gabon", flagCode: "ga", name: { en: "Gabon", fr: "Gabon", zh: "加蓬" }, code: "+241", methods: ["Airtel Money", "Moov Money"] },
  { slug: "cote-divoire", flagCode: "ci", name: { en: "Côte d’Ivoire", fr: "Côte d’Ivoire", zh: "科特迪瓦" }, code: "+225", methods: ["Moov Money", "MTN", "Orange Money", "Wave"] },
  { slug: "mali", flagCode: "ml", name: { en: "Mali", fr: "Mali", zh: "马里" }, code: "+223", methods: ["Orange Money", "Moov Africa"] },
  { slug: "senegal", flagCode: "sn", name: { en: "Senegal", fr: "Sénégal", zh: "塞内加尔" }, code: "+221", methods: ["Mixx by Yas", "Orange Money", "Wave", "Free Money"] },
  { slug: "guinea", flagCode: "gn", name: { en: "Guinea", fr: "Guinée", zh: "几内亚" }, code: "+224", methods: ["Orange Money", "MTN Mobile Money"] },
  { slug: "dr-congo", flagCode: "cd", name: { en: "Democratic Republic of the Congo", fr: "République démocratique du Congo", zh: "刚果（金）" }, code: "+243", methods: ["M-Pesa", "Airtel Money", "Orange Money"] },
  { slug: "ghana", flagCode: "gh", name: { en: "Ghana", fr: "Ghana", zh: "加纳" }, code: "+233", methods: ["MTN Mobile Money", "Vodafone Cash", "AirtelTigo"] },
  { slug: "niger", flagCode: "ne", name: { en: "Niger", fr: "Niger", zh: "尼日尔" }, code: "+227", methods: ["Airtel Money", "Moov Africa"] },
  { slug: "kenya", flagCode: "ke", name: { en: "Kenya", fr: "Kenya", zh: "肯尼亚" }, code: "+254", methods: ["M-Pesa", "Airtel Money"] },
  { slug: "nigeria", flagCode: "ng", name: { en: "Nigeria", fr: "Nigeria", zh: "尼日利亚" }, code: "+234", methods: ["Bank Transfer", "Cards", "USSD"] },
  { slug: "egypt", flagCode: "eg", name: { en: "Egypt", fr: "Égypte", zh: "埃及" }, code: "+20", methods: ["Cards", "Mobile Wallets", "Bank Transfer"] },
  { slug: "pakistan", flagCode: "pk", name: { en: "Pakistan", fr: "Pakistan", zh: "巴基斯坦" }, code: "+92", methods: ["JazzCash", "Easypaisa", "Cards"] },
  { slug: "india", flagCode: "in", name: { en: "India", fr: "Inde", zh: "印度" }, code: "+91", methods: ["UPI", "Cards", "Net Banking"] },
  { slug: "philippines", flagCode: "ph", name: { en: "Philippines", fr: "Philippines", zh: "菲律宾" }, code: "+63", methods: ["GCash", "Maya", "Cards"] }
];

export const paymentOperators = [
  { slug: "moov-money", name: "Moov Money", methodNames: ["Moov Money"] },
  { slug: "tmoney", name: "TMoney", methodNames: ["TMoney"] },
  { slug: "visa-mastercard", name: "Visa / Mastercard", methodNames: ["Visa / Mastercard"] },
  { slug: "mtn-mobile-money", name: "MTN Mobile Money", methodNames: ["MTN Mobile Money", "MTN"] },
  { slug: "moov-africa", name: "Moov Africa", methodNames: ["Moov Africa"] },
  { slug: "orange-money", name: "Orange Money", methodNames: ["Orange Money"] },
  { slug: "airtel-money", name: "Airtel Money", methodNames: ["Airtel Money"] },
  { slug: "wave", name: "Wave", methodNames: ["Wave"] },
  { slug: "mixx-by-yas", name: "Mixx by Yas", methodNames: ["Mixx by Yas"] },
  { slug: "free-money", name: "Free Money", methodNames: ["Free Money"] },
  { slug: "m-pesa", name: "M-Pesa", methodNames: ["M-Pesa"] },
  { slug: "vodafone-cash", name: "Vodafone Cash", methodNames: ["Vodafone Cash"] },
  { slug: "airteltigo", name: "AirtelTigo", methodNames: ["AirtelTigo"] },
  { slug: "jazzcash", name: "JazzCash", methodNames: ["JazzCash"] },
  { slug: "easypaisa", name: "Easypaisa", methodNames: ["Easypaisa"] },
  { slug: "upi", name: "UPI", methodNames: ["UPI"] },
  { slug: "gcash", name: "GCash", methodNames: ["GCash"] },
  { slug: "maya", name: "Maya", methodNames: ["Maya"] }
];

export const operatorSlugByMethod = Object.fromEntries(
  paymentOperators.flatMap((operator) =>
    operator.methodNames.map((method) => [method, operator.slug])
  )
);

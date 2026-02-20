


export const currencyMeta: Record<
  string,
  {
    name: string;
    symbol: string;
    countryCode: string;
  }
> = {
  USD: {
    name: "US Dollar",
    symbol: "$",
    countryCode: "us",
  },

  PKR: {
    name: "Pakistani Rupee",
    symbol: "₨",
    countryCode: "pk",
  },

  EUR: {
    name: "Euro",
    symbol: "€",
    countryCode: "eu", 
  },

  GBP: {
    name: "British Pound",
    symbol: "£",
    countryCode: "gb",
  },

  JPY: {
    name: "Japanese Yen",
    symbol: "¥",
    countryCode: "jp",
  },
  AUD: { name: "Australian Dollar", symbol: "$", countryCode: "au" },
CAD: { name: "Canadian Dollar", symbol: "$", countryCode: "ca" },
CHF: { name: "Swiss Franc", symbol: "CHF", countryCode: "ch" },
CNY: { name: "Chinese Yuan", symbol: "¥", countryCode: "cn" },
INR: { name: "Indian Rupee", symbol: "₹", countryCode: "in" },
SAR: { name: "Saudi Riyal", symbol: "﷼", countryCode: "sa" },
AED: { name: "UAE Dirham", symbol: "د.إ", countryCode: "ae" },




  NZD: { name: "New Zealand Dollar", symbol: "$", countryCode: "nz" },
  SGD: { name: "Singapore Dollar", symbol: "$", countryCode: "sg" },
  HKD: { name: "Hong Kong Dollar", symbol: "$", countryCode: "hk" },
  SEK: { name: "Swedish Krona", symbol: "kr", countryCode: "se" },
  NOK: { name: "Norwegian Krone", symbol: "kr", countryCode: "no" },
  DKK: { name: "Danish Krone", symbol: "kr", countryCode: "dk" },

  ZAR: { name: "South African Rand", symbol: "R", countryCode: "za" },
  TRY: { name: "Turkish Lira", symbol: "₺", countryCode: "tr" },
  THB: { name: "Thai Baht", symbol: "฿", countryCode: "th" },
  MYR: { name: "Malaysian Ringgit", symbol: "RM", countryCode: "my" },
  IDR: { name: "Indonesian Rupiah", symbol: "Rp", countryCode: "id" },
  PHP: { name: "Philippine Peso", symbol: "₱", countryCode: "ph" },

  KRW: { name: "South Korean Won", symbol: "₩", countryCode: "kr" },
  VND: { name: "Vietnamese Dong", symbol: "₫", countryCode: "vn" },

  BRL: { name: "Brazilian Real", symbol: "R$", countryCode: "br" },
  MXN: { name: "Mexican Peso", symbol: "$", countryCode: "mx" },
  ARS: { name: "Argentine Peso", symbol: "$", countryCode: "ar" },
  CLP: { name: "Chilean Peso", symbol: "$", countryCode: "cl" },
  COP: { name: "Colombian Peso", symbol: "$", countryCode: "co" },

  PLN: { name: "Polish Zloty", symbol: "zł", countryCode: "pl" },
  CZK: { name: "Czech Koruna", symbol: "Kč", countryCode: "cz" },
  HUF: { name: "Hungarian Forint", symbol: "Ft", countryCode: "hu" },
  RON: { name: "Romanian Leu", symbol: "lei", countryCode: "ro" },

  ILS: { name: "Israeli Shekel", symbol: "₪", countryCode: "il" },
  EGP: { name: "Egyptian Pound", symbol: "£", countryCode: "eg" },
  QAR: { name: "Qatari Riyal", symbol: "﷼", countryCode: "qa" },
  KWD: { name: "Kuwaiti Dinar", symbol: "KD", countryCode: "kw" },
  OMR: { name: "Omani Rial", symbol: "﷼", countryCode: "om" },



  RUB: { name: "Russian Ruble", symbol: "₽", countryCode: "ru" },
UAH: { name: "Ukrainian Hryvnia", symbol: "₴", countryCode: "ua" },
BGN: { name: "Bulgarian Lev", symbol: "лв", countryCode: "bg" },
HRK: { name: "Croatian Kuna", symbol: "kn", countryCode: "hr" },
ISK: { name: "Icelandic Krona", symbol: "kr", countryCode: "is" },


BDT: { name: "Bangladeshi Taka", symbol: "৳", countryCode: "bd" },
LKR: { name: "Sri Lankan Rupee", symbol: "Rs", countryCode: "lk" },
NPR: { name: "Nepalese Rupee", symbol: "₨", countryCode: "np" },
KHR: { name: "Cambodian Riel", symbol: "៛", countryCode: "kh" },
LAK: { name: "Lao Kip", symbol: "₭", countryCode: "la" },
MMK: { name: "Myanmar Kyat", symbol: "Ks", countryCode: "mm" },


NGN: { name: "Nigerian Naira", symbol: "₦", countryCode: "ng" },
GHS: { name: "Ghanaian Cedi", symbol: "₵", countryCode: "gh" },
KES: { name: "Kenyan Shilling", symbol: "KSh", countryCode: "ke" },
TZS: { name: "Tanzanian Shilling", symbol: "TSh", countryCode: "tz" },
MAD: { name: "Moroccan Dirham", symbol: "MAD", countryCode: "ma" },
DZD: { name: "Algerian Dinar", symbol: "دج", countryCode: "dz" },


PEN: { name: "Peruvian Sol", symbol: "S/", countryCode: "pe" },
UYU: { name: "Uruguayan Peso", symbol: "$U", countryCode: "uy" },
BOB: { name: "Bolivian Boliviano", symbol: "Bs", countryCode: "bo" },
CRC: { name: "Costa Rican Colon", symbol: "₡", countryCode: "cr" },
DOP: { name: "Dominican Peso", symbol: "RD$", countryCode: "do" },

KZT: { name: "Kazakhstani Tenge", symbol: "₸", countryCode: "kz" },
UZS: { name: "Uzbekistani Som", symbol: "so'm", countryCode: "uz" },

JMD: { name: "Jamaican Dollar", symbol: "J$", countryCode: "jm" },
BBD: { name: "Barbadian Dollar", symbol: "Bds$", countryCode: "bb" },
TTD: { name: "Trinidad and Tobago Dollar", symbol: "TT$", countryCode: "tt" },

AFN: { name: "Afghan Afghani", symbol: "؋", countryCode: "af" },
AMD: { name: "Armenian Dram", symbol: "֏", countryCode: "am" },
AOA: { name: "Angolan Kwanza", symbol: "Kz", countryCode: "ao" },
AWG: { name: "Aruban Florin", symbol: "ƒ", countryCode: "aw" },
AZN: { name: "Azerbaijani Manat", symbol: "₼", countryCode: "az" },

BAM: { name: "Bosnia and Herzegovina Convertible Mark", symbol: "KM", countryCode: "ba" },
BHD: { name: "Bahraini Dinar", symbol: ".د.ب", countryCode: "bh" },
BIF: { name: "Burundian Franc", symbol: "FBu", countryCode: "bi" },
BND: { name: "Brunei Dollar", symbol: "B$", countryCode: "bn" },
BMD: { name: "Bermudian Dollar", symbol: "BD$", countryCode: "bm" },
BSD: { name: "Bahamian Dollar", symbol: "B$", countryCode: "bs" },
BTN: { name: "Bhutanese Ngultrum", symbol: "Nu.", countryCode: "bt" },
BWP: { name: "Botswana Pula", symbol: "P", countryCode: "bw" },

ANG: { name: "Netherlands Antillean Guilder", symbol: "ƒ", countryCode: "cw" },
ALL: { name: "Albanian Lek", symbol: "L", countryCode: "al" },
BYN: { name: "Belarusian Ruble", symbol: "Br", countryCode: "by" },
BZD: { name: "Belize Dollar", symbol: "BZ$", countryCode: "bz" },

CDF: { name: "Congolese Franc", symbol: "FC", countryCode: "cd" },
CLF: { name: "Chilean Unit of Account (UF)", symbol: "UF", countryCode: "cl" },
CNH: { name: "Chinese Yuan (Offshore)", symbol: "¥", countryCode: "cn" },
CUP: { name: "Cuban Peso", symbol: "₱", countryCode: "cu" },
CVE: { name: "Cape Verdean Escudo", symbol: "$", countryCode: "cv" },

DJF: { name: "Djiboutian Franc", symbol: "Fdj", countryCode: "dj" },

ERN: { name: "Eritrean Nakfa", symbol: "Nfk", countryCode: "er" },
ETB: { name: "Ethiopian Birr", symbol: "Br", countryCode: "et" },

FJD: { name: "Fijian Dollar", symbol: "FJ$", countryCode: "fj" },
FKP: { name: "Falkland Islands Pound", symbol: "£", countryCode: "fk" },
FOK: { name: "Faroese Króna", symbol: "kr", countryCode: "fo" },

GEL: { name: "Georgian Lari", symbol: "₾", countryCode: "ge" },
GGP: { name: "Guernsey Pound", symbol: "£", countryCode: "gg" },
GIP: { name: "Gibraltar Pound", symbol: "£", countryCode: "gi" },
GMD: { name: "Gambian Dalasi", symbol: "D", countryCode: "gm" },
GNF: { name: "Guinean Franc", symbol: "FG", countryCode: "gn" },

GTQ: { name: "Guatemalan Quetzal", symbol: "Q", countryCode: "gt" },
GYD: { name: "Guyanese Dollar", symbol: "GY$", countryCode: "gy" },

HNL: { name: "Honduran Lempira", symbol: "L", countryCode: "hn" },
HTG: { name: "Haitian Gourde", symbol: "G", countryCode: "ht" },

IMP: { name: "Isle of Man Pound", symbol: "£", countryCode: "im" },

IQD: { name: "Iraqi Dinar", symbol: "ع.د", countryCode: "iq" },
IRR: { name: "Iranian Rial", symbol: "﷼", countryCode: "ir" },

JEP: { name: "Jersey Pound", symbol: "£", countryCode: "je" },
JOD: { name: "Jordanian Dinar", symbol: "د.ا", countryCode: "jo" },

KGS: { name: "Kyrgyzstani Som", symbol: "с", countryCode: "kg" },


};

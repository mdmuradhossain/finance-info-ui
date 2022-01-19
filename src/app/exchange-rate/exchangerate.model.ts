// export interface ExchangeRate {
//   result: string;
//   documentation: string;
//   time_last_update_utc: string;
//   conversion_rates: ConversionRates;
// }

export class ExchangeRate {
  result: string = '';
  documentation: string = '';
  time_last_update_utc: string = '';
  conversion_rates!: ConversionRates;
}

export class ConversionRates {
  USD: String = '';
  // AED: String = '';
  //   AFN:string = '';
  //   ALL:string='';
  //  AMD:string = '';
  //     ANG:string = '';
  //     AOA:string = '';
  //     ARS:string = '';
  //     AUD:string = '';
  //     AWG:string = '';
  //     AZN:string = '';
  //     BAM:string = '';
  //     BBD:string = '';
  //     BDT:string= '';
  //     BGN:string = '';
  //     BHD:string = ''
  //     BIF:string = ''
  //     BMD:string = ''
  //     BND:string = ''
  //     BOB:string = ''
  //     BRL:string = ''
  //     BSD:string = ''
  //     BTN: string=''
  //     BWP: string = ''
  //     BYN: string = ''
  //     BZD: string = ''
  //     CAD: string = ''
  //     CDF: string = ''
  //     CHF: string = ''
  //     CLP: string = ''
  //     CNY: string = ''
  //     COP: string = ''
  //     CRC: string = ''
  //     CUP: string = ''
  //     CVE: string = ''
  //     CZK: string = ''
  //     DJF: string = ''
  //     DKK: string = ''
  //     DOP: string = ''
  //     DZD: string = ''
  //     EGP: string = ''
  //     ERN: string = ''
  //     "ETB": 49.7995,
  //     "EUR": 0.8767,
  //     "FJD": 2.1027,
  //     "FKP": 0.7329,
  //     "FOK": 6.5406,
  //     "GBP": 0.7329,
  //     "GEL": 3.0792,
  //     "GGP": 0.7329,
  //     "GHS": 6.6369,
  //     "GIP": 0.7329,
  //     "GMD": 53.4477,
  //     "GNF": 9127.6007,
  //     "GTQ": 7.7335,
  //     "GYD": 209.6319,
  //     "HKD": 7.7903,
  //     "HNL": 24.7206,
  //     "HRK": 6.6056,
  //     "HTG": 101.7308,
  //     "HUF": 312.8050,
  //     "IDR": 14277.1660,
  //     "ILS": 3.1191,
  //     "IMP": 0.7329,
  //     "INR": 74.2480,
  //     "IQD": 1463.3562,
  //     "IRR": 41872.8805,
  //     "ISK": 128.6142,
  //     "JEP": 0.7329,
  //     "JMD": 154.9919,
  //     "JOD": 0.7090,
  //     "JPY": 114.4940,
  //     "KES": 113.5574,
  //     "KGS": 84.7751,
  //     "KHR": 4083.6457,
  //     "KID": 1.3861,
  //     "KMF": 431.3134,
  //     "KRW": 1191.0971,
  //     "KWD": 0.2996,
  //     "KYD": 0.8333,
  //     "KZT": 436.0343,
  //     "LAK": 11357.3305,
  //     "LBP": 1507.5000,
  //     "LKR": 201.6097,
  //     "LRD": 149.3740,
  //     "LSL": 15.3903,
  //     "LYD": 4.6022,
  //     "MAD": 9.1793,
  //     "MDL": 18.0704,
  //     "MGA": 3050.2262,
  //     "MKD": 53.9610,
  //     "MMK": 1788.1655,
  //     "MNT": 2869.9850,
  //     "MOP": 8.0240,
  //     "MRU": 36.4106,
  //     "MUR": 43.7354,
  //     "MVR": 15.4099,
  //     "MWK": 820.4000,
  //     "MXN": 20.3113,
  //     "MYR": 4.1817,
  //     "MZN": 63.9301,
  //     "NAD": 15.3903,
  //     "NGN": 415.5604,
  //     "NIO": 35.6606,
  //     "NOK": 8.7261,
  //     "NPR": 118.7963,
  //     "NZD": 1.4709,
  //     "OMR": 0.3845,
  //     "PAB": 1.0000,
  //     "PEN": 3.8664,
  //     "PGK": 3.5456,
  //     "PHP": 51.3376,
  //     "PKR": 175.9028,
  //     "PLN": 3.9700,
  //     "PYG": 6925.8089,
  //     "QAR": 3.6400,
  //     "RON": 4.3312,
  //     "RSD": 103.0871,
  //     "RUB": 76.3716,
  //     "RWF": 1038.8589,
  //     "SAR": 3.7500,
  //     "SBD": 8.0357,
  //     "SCR": 13.8113,
  //     "SDG": 437.8819,
  //     "SEK": 9.0180,
  //     "SGD": 1.3478,
  //     "SHP": 0.7329,
  //     "SLL": 11389.9975,
  //     "SOS": 579.9085,
  //     "SRD": 21.2994,
  //     "SSP": 432.8715,
  //     "STN": 21.4794,
  //     "SYP": 2524.8694,
  //     "SZL": 15.3903,
  //     "THB": 33.1307,
  //     "TJS": 11.2667,
  //     "TMT": 3.5001,
  //     "TND": 2.8116,
  //     "TOP": 2.2635,
  //     "TRY": 13.4467,
  //     "TTD": 6.7848,
  //     "TVD": 1.3861,
  //     "TWD": 27.5196,
  //     "TZS": 2306.8290,
  //     "UAH": 28.0998,
  //     "UGX": 3524.3930,
  //     "UYU": 44.7605,
  //     "UZS": 10940.8349,
  //     "VES": 4.6247,
  //     "VND": 22743.0231,
  //     "VUV": 112.5007,
  //     "WST": 2.5716,
  //     "XAF": 575.0845,
  //     "XCD": 2.7000,
  //     "XDR": 0.7109,
  //     "XOF": 575.0845,
  //     "XPF": 104.6196,
  //     "YER": 250.7535,
  //     ZAR:string = '';
  //     ZMW:string = '';
  //     ZWL:string = '';
}

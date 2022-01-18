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
  AED: String = '';
}

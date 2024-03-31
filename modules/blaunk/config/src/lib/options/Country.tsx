import { CountryFlag, CountryName, CountryPhoneCode } from '@li/config/options';
import { optionsFromObject } from '@li/config/utils';
import { Country } from '@li/types/config';
import { AvailableCurrencyCode } from './Currency';

const codes = [
  'in',
  'bh',
  'bd',
  'bt',
  'id',
  'jo',
  'my',
  'mv',
  'np',
  'ph',
  'sg',
  'za',
  'lk',
  'th',
  'ae',
  'vn',
  'qa',
] as const;

export type AvailableCountryCode = (typeof codes)[number];

export const AvailableCountries = codes
  .map<Country | undefined>((code) =>
    CountryFlag[code]
      ? {
          id: code,
          code: CountryPhoneCode[code],
          name: CountryName[code],
          currency: AvailableCurrencyCode[code],
          ...CountryFlag[code]!,
        }
      : undefined,
  )
  .filter((c): c is Country => !!c);

export const CountriesOption = optionsFromObject<AvailableCountryCode>(
  AvailableCountries,
  {
    idPath: 'id',
    itemPath: 'name',
  },
);

export const CountryCodeOptions = optionsFromObject<AvailableCountryCode>(
  AvailableCountries,
  {
    idPath: 'id',
    itemPath: 'code',
  },
).sort((a, b) =>
  a.item === '+91' ? 1 : (a.item as string)?.localeCompare(b.item as string),
);

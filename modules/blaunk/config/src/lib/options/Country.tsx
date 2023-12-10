import { CountryFlags, CountryNames } from '@li/config/options';
import { Country, CountryCode } from '@li/types/config';

const codes: CountryCode[] = [
  'in',
  'jo',
  'mv',
  'lk',
  'bt',
  'bd',
  'np',
  'ph',
  'bh',
];

export const AvailableCountries = codes
  .map((code) =>
    CountryFlags[code]
      ? {
          id: code,
          name: CountryNames[code],
          ...CountryFlags[code]!,
        }
      : undefined,
  )
  .filter((c): c is Country => !!c);

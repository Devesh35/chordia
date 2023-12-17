import { CountryFlag, CountryName, CountryPhoneCode } from '@li/config/options';
import { Country, CountryCode } from '@li/types/config';

const codes: CountryCode[] = [
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
  'ae',
  'vn',
];

export const AvailableCountries = codes
  .map<Country | undefined>((code) =>
    CountryFlag[code]
      ? {
          id: code,
          code: CountryPhoneCode[code],
          name: CountryName[code],
          ...CountryFlag[code]!,
        }
      : undefined,
  )
  .filter((c): c is Country => !!c);

export const CountriesOption = AvailableCountries.map((c) => ({
  id: c.id,
  item: c.name,
}));

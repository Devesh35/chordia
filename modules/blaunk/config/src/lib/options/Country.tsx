import { CountryFlag, CountryName, CountryPhoneCode } from '@li/config/options';
import { optionsFromObject } from '@li/config/utils';
import { Country } from '@li/types/config';
import { SelectItemElement } from '@li/types/design';
import { AvailableCurrencyCode } from './Currency';

export const availableCountryCode = [
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
  // 'za',
  'lk',
  'th',
  'ae',
  'vn',
  'qa',
] as const;

export type AvailableCountryCode = (typeof availableCountryCode)[number];

export const AvailableCountries = availableCountryCode
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

export const CountriesOption = optionsFromObject<AvailableCountryCode>(AvailableCountries, {
  idPath: 'id',
  itemPath: 'name',
});

export const CountriesOptionWithFlag: SelectItemElement<AvailableCountryCode>[] = AvailableCountries.map((c) => ({
  id: c.id as AvailableCountryCode,
  item: (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      {c.Flag}
      {c.name}
    </div>
  ),
}));

export const CountryCodeOptions = optionsFromObject<AvailableCountryCode>(AvailableCountries, {
  idPath: 'id',
  itemPath: 'code',
}).sort((a, b) => (a.item === '+91' ? 1 : (a.item as string)?.localeCompare(b.item as string)));

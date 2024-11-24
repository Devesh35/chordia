import { transposeArray } from '@li/config/utils';
import { AddProductSpecifications } from '@md/blaunk/config';
import tableStyles from './table-inner.module.css';

const PSTitles = AddProductSpecifications.options.form.map((p) => p.title);
const PSItems = transposeArray(AddProductSpecifications.options.form.map((p) => p.items));

export const ProductSpecs = () => {
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          {PSTitles.map((p, i) => (
            <>
              <td colSpan={2} key={p}>
                {p}
              </td>
              <th key={i}></th>
            </>
          ))}
        </tr>
      </thead>
      <tbody>
        {PSItems.map((p, i) => (
          <tr key={i}>
            {p.map((si) =>
              si ? (
                <>
                  <td key={si.label}>{si.label}</td>
                  <td key={si.placeholder}>{si.placeholder}</td>
                  <th key={si.id}></th>
                </>
              ) : (
                <th colSpan={3}></th>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

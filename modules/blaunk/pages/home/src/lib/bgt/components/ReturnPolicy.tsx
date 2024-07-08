import { DetailsTable } from '../../components';
import styles from './selected-item.module.css';

export const ReturnPolicy = () => {
  return (
    <div className={styles['policy-wrapper']}>
      <div className={styles['return-name']}>Return Policy</div>
      <div className={styles['return-desc']}>
        If Customer found to misuse excessively Returning / Cancelling order or
        not accepting the order placed,Blaunk reserve the rights to Warn /
        Suspend / Block / Terminate such customer account as necessary with
        penalty of Rs 500 ($6 ) towards processing charge. "To proceed
        Cancellation contact Blaunk Customer Care Email id: cuscare@blaunk.com
        Subject to Vendor approval and Vendor Policy "{' '}
      </div>
      <div>
        <div className={styles['return-table-header']}>
          <div>Detail</div>
          <div>Refund & Exchange Policy</div>
        </div>
        <DetailsTable
          keyColWidth={200}
          className={styles['return-table']}
          data={[
            ['Product Differ from Image', 'No'],
            ['Quantity Shortage', 'NA'],
            ['Article Colour Bleed', 'FULL REFUND'],
            ['Payment mode', 'MONEY BACK'],
            ['Warranty Period', 'Under Pdt warranty'],
            ['Refund', 'within 4 days'],
            ['Product Dead on Arrival', 'Replacement'],
            ['Damaged Article', 'Replacement'],
            ['Size Different', 'Replacement'],
            ['Logistic Charges', ' One side Refund'],
            ['International Customer', 'No Refund'],
            ['QC Charges', 'Free'],
            ['Customized / Make to Order', 'Applicable'],
            ['Cancellation Policy @ Cus care', 'Immediate'],
            [
              'Delay In supply',
              'Penalty for every 2 days delay (0.05% add on)',
            ],
            ['BLAUNK Charges', 'Levied @ Seller Deduction Only'],
            ['Vendor Payment after Delivery', 'Within 4-7 working days'],
            ['Report an Issue', 'Rs 500 will be levied on seller'],
            ['Sample', 'No'],
          ]}
        />
      </div>
    </div>
  );
};

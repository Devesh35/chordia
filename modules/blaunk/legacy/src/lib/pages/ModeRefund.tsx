// cspell:disable
export const ModeRefund = () => {
  return (
    <div className="">
      <p>We will initiate refund to the following modes</p>
      <table border={3} className="table table-bordered table-dark">
        <tbody>
          <tr>
            <th>PAYMENT MODE</th>
            <th>REFUND MODE OPTIONS</th>
          </tr>
          <tr>
            <td>Credit card / Debit card</td>
            <td>Credit card / Debit card</td>
          </tr>
          <tr>
            <td>IMPS/ Bank Account through net banking</td>
            <td>IMPS/ Bank Account through net banking</td>
          </tr>
          <tr>
            <td>UPI</td>
            <td>UPI</td>
          </tr>
          <tr>
            <td>Cash on Delivery*</td>
            <td>NEFT to Bank account or BLAUNK Wallet</td>
          </tr>
          <tr>
            <td>Gift card / Gift Voucher</td>
            <td>Gift card / Gift Voucher</td>
          </tr>
        </tbody>
      </table>
      <div className="text-left mb-5 ml-3">
        <p>
          <b>1.&nbsp;</b>We may request for information/ documents to verify
          your credentials before initiating the refund.
        </p>
        <p>
          <b>2.&nbsp;</b>Update your bank credential for refund process --&gt;
          Welcome User --&gt; My profile --&gt; Bank{' '}
        </p>
        <p>
          <b>3.&nbsp;</b>If the payment mode has expired or is no longer valid,
          we will refund you through one of the modes mentioned above as agreed
          by you.
        </p>
        <p>
          <b>4.&nbsp;</b>Blaunk wallet will take 2 working days for payment
          credit (exclude week holiday)
        </p>
        <p>
          <b>5.&nbsp;</b>Bank transfer will take max. 3 working days (exclude
          week holiday)
        </p>
        <p>
          <b>6.&nbsp;</b>All refunds shall be made in Indian Rupees only.
        </p>
        <p>
          <b>7.&nbsp;</b>Legal Entity : Subject to Banglore Jurisdiction.
        </p>
      </div>
    </div>
  );
};

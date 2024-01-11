/* eslint-disable @typescript-eslint/no-explicit-any */
import gstImg1 from '../assets/4cb77439.jpg';
import gstImg2 from '../assets/e12f62cb.jpg';

export const GSTITC = () => {
  return (
    <div className="gst__Container">
      <div className="gst__Image d-flex justify-content-center align-items-center">
        <img
          className="mr-5"
          src={(gstImg2 as any).src}
          height="100%"
          alt="GST1"
        />
        <img src={(gstImg1 as any).src} height="100%" alt="GST2" />
      </div>
      <div>
        <p
          className="text-center mt-4"
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
        >
          GST-FAQ's
        </p>
      </div>
      <div className="p-4">
        <div>
          <p style={{ marginBottom: 0 }}>
            1.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              What is GST Invoice option available on the product page?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            It is an option available on select products, through which you can
            enter your GST details during order placement and avail GST tax
            input credit. Separate Order should be placed for GST products.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            2.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              Where can I find the invoice with my GST details printed on it?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            The GST Invoice for your order will be provided by the respective
            Vendor who sold the product along with shipment. You can also
            download the invoice for an already delivered order by visiting the
            'My Orders' section and choosing the order for which you would like
            to download the invoice.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            3.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              Will I be able to edit my GST details after placing an order?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            You can call customer care about error in GST data entry. You can
            also choose to cancel the ongoing order and place a fresh order with
            the correct GST details. But ensure that GST billing product cannot
            be clubbed with Non GST billing purchase Order on BLAUNK.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            4.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              Is the option of GST Invoice available with all products/sellers?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            The option of GST Invoice is currently available only on select
            products offered by participating sellers. You can visit the product
            page and check on Highlights of the product where GST Invoice option
            will be clearly displayed. If the seller details do not call this
            out, it indicates that the seller does not currently provide this
            service.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            5.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              What are the details I should carefully enter while filling out my
              GST details?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            GST number is valid &amp; active and belongs to the same state of
            the delivery address. Also ensure that you mention the exact name of
            your registered business.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            6.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              What happens if I fill incorrect details?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            Please note that in case incorrect GST details are provided during
            order placement, the order will be automatically cancelled by
            Vendor.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            7.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              Can I get GST Invoice for installation / service / demo that will
              be charged by the brand after the delivery?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            If the delivery/installation/demo amount is charged by the brand, it
            is not included in the order invoice issued by the seller. Hence, it
            is not eligible for GST Invoice. Please make request with concern
            service team.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            8.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              What should I do if I missed sharing my GST details / provided
              incorrect details on the invoice?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            The GST related details as provided by the customers are
            automatically captured and printed on the invoice. Hence, this
            cannot be changed once the order has been placed. In case you
            entered the wrong GST details while placing the order, you can
            choose to cancel it and place a fresh order with the correct
            details.
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            9.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              Can I get my invoice modified?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            To modify GST detail error, it will be on Vendor policy. Can call
            Customer care and verify about the same
          </p>
        </div>
        <div>
          <p style={{ marginBottom: '0px' }}>
            10.&nbsp;
            <span style={{ fontWeight: 'bold' }}>
              If I had entered my GST details while placing an earlier order, do
              I have to mention it again for the next orders I place?
              <br />
            </span>
          </p>
          <p className="ml-3" style={{ textAlign: 'justify' }}>
            {' '}
            Please note that the GST details have to be entered each time you
            place an order for an eligible product in order to receive GST
            Invoice
          </p>
        </div>
      </div>
    </div>
  );
};

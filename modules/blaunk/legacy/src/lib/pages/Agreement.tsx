'use client';
// cspell:disable
import { useState } from 'react';

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
};

const agreementData = [
  {
    english: 'BLAUNK.in will act as an intermediate for both BUY & SELL transaction purpose.',
    hindi: 'BLAUNK.in BUY और SELL दोनों लेन-देन के उद्देश्य के लिए एक मध्यवर्ती के रूप में कार्य करेगा।',
  },
  {
    english:
      'BLAUNK.in will deduct commission @Rs 2 per pcs ( qty) or 0.45% or Min Rs 500 /- whichever is highest will be charged as per agreed from both the parties on successful transaction and for cancellation of the transaction will be charged @ Rs 200 from Buyer only',
    hindi:
      'BLAUNK.in 2 रुपये प्रति पीसी (मात्रा) या 0.45% या न्यूनतम 500/- की दर से कमीशन काटेगा, जो भी अधिक हो, सफल लेनदेन पर दोनों पक्षों से सहमति के अनुसार शुल्क लिया जाएगा और लेनदेन को रद्द करने के लिए शुल्क लिया जाएगा। केवल खरीदार से 200 रुपये।',
  },
  {
    english: 'Both parties agreed to carry out the transaction as per their P.O shared individually',
    hindi: 'दोनों पक्ष व्यक्तिगत रूप से साझा किए गए अपने पीओ के अनुसार लेनदेन करने के लिए सहमत हुए।',
  },
  {
    english: 'NO defective / damaged / articles will be delivered',
    hindi: '	कोई दोषपूर्ण / क्षतिग्रस्त / लेख वितरित नहीं किया जाएगा',
  },
  {
    english: 'Articles should reach as per mentioned transport agreed by both parties mutually on mail / whtasapp',
    hindi: 'दोनों पक्षों द्वारा मेल/व्हाट्सएप पर आपसी सहमति से बताए गए परिवहन के अनुसार सामग्री पहुंचनी चाहिए',
  },
  {
    english: 'Buyer had render the payment to BLAUNK as per LOCS agreement',
    hindi: 'क्रेता (BUYER) ने BLAUNK.in को अग्रिम भुगतान प्रस्तुत किया था',
  },
  {
    english: 'BLAUNK will release the payment to seller (parties) as listed within agreed time',
    hindi: 'BLAUNK सहमत समय के साथ सूचीबद्ध विक्रेता (पार्टियों) को भुगतान जारी करेगा',
  },
  {
    english: 'Any damage / defective item supplied payment will be hold or will be return back to supplier',
    hindi:
      'आपूर्ति की गई किसी भी क्षति / दोषपूर्ण वस्तु का भुगतान रोक दिया जाएगा या आपूर्तिकर्ता को वापस कर दिया जाएगा',
  },
  {
    english: 'Rejection of consignment Return delivery charges / expenses will be borne by supplier only',
    hindi: 'वापसी वितरण शुल्क केवल आपूर्तिकर्ता द्वारा वहन किया जाएगा',
  },
  {
    english: 'On inspection of arrived goods intimation will be done to BLAUNK to release payment to supplier',
    hindi: 'पहुंचे माल के निरीक्षण पर BLAUNK को आपूर्तिकर्ता को भुगतान जारी करने की सूचना दी जाएगी',
  },
  {
    english: 'BLAUNK will share this contract PDF via mail to both the parties and will be confirmed as final',
    hindi: 'BLAUNK इस अनुबंध PDF को दोनों पक्षों को मेल के माध्यम से साझा करेगा और अंतिम रूप से पुष्टि की जाएगी',
  },
  {
    english: 'Any shortage of Quantity delivered found after goods received at buyer end need to be compensate.',
    hindi: 'खरीदार के अंत में प्राप्त माल के बाद मिलने वाली मात्रा में कमी की भरपाई करने की आवश्यकता है।',
  },
  {
    english: 'Colour / Size / Ratio if any as per agreed terms will be supplied.',
    hindi: 'रंग/आकार/अनुपात यदि कोई हो, सहमत शर्तों के अनुसार तदनुसार आपूर्ति की जाएगी',
  },
  {
    english: 'Buyer authorized BLAUNK to pay seller due after 5 hrs of reached consignment without any notice',
    hindi: 'खरीदार बिना किसी सूचना के खेप पहुंचने के 4 घंटों के बाद विक्रेता को देय भुगतान करने के लिए सहमत हो गया',
  },
  {
    english:
      'Buyer if found any dispute / inferior product supplied then might instruct BLAUNK to hold the payment for 1 day.',
    hindi:
      'खरीदार को यदि कोई विवाद / घटिया उत्पाद आपूर्ति किया जाता है तो वह BLAUNK को 1 दिन के लिए भुगतान रोकने का निर्देश दे सकता है।',
  },
  {
    english: 'BLAUNK will auto release the Payment to respective Seller Bank a/c within 5 – 6 hours of office time',
    hindi: 'पार्टी (खरीदार) को प्राप्त खेप के 6 घंटे बाद BLAUNK भुगतान (Seller) को स्वतः जारी कर देगा',
  },
];

export const Agreement = () => {
  const [lang, setLang] = useState<'english' | 'hindi'>('english');

  return (
    <div
      className="my-4"
      style={{
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(109, 117, 29)',
      }}
    >
      <div className="mx-auto mt-2 p-3 text-center">
        <label className="" style={{ fontWeight: 600 }}>
          {/* Terms And Conditions */}
          <select
            className="mt-2 form-select text-center"
            style={{ width: '180px', right: '5px', fontWeight: 600 }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e) => setLang(e.target.value as any)}
          >
            <option className="text-center" value="english">
              English
            </option>
            <option className="text-center" value="hindi">
              Hindi
            </option>
          </select>
        </label>
        <div className="container mt-2 mx-auto">
          <style>
            {`
              td {
                text-align: left !important;
                font-weight: 600 !important;
              }
            `}
          </style>
          <table className="table border-collapse table-bordered" style={{ backgroundColor: 'rgb(218, 255, 179)' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Terms And Conditions</th>
              </tr>
            </thead>
            <tbody className="tcbody">
              {agreementData.map((data) => (
                <tr>
                  <td>
                    <CheckIcon />
                  </td>
                  <td>{data[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
// cspell:disable
import board from '../assets/BOARD.a180806f.jpg';
import brand from '../assets/BRAND.dd53a9a8.jpg';
import cwd from '../assets/CWD.e9ed24c9.jpeg';
import cwm2 from '../assets/CWM2.02170758.jpg';
import group from '../assets/group-companies.325e8b7c.jpg';
import pratiksha from '../assets/pratiksha1.f5687ce3.jpeg';
import pravin from '../assets/pravin.1fc04ca3.jpg';
import unnamed from '../assets/unnamed.c2e8049c.png';

export const AboutUs = () => {
  return (
    <div style={{ marginInline: 'auto', width: 'fit-content' }}>
      <div className="container mt-4 About_aboutus__mainContainer__23Wqd">
        <div className="About_aboutus__Info__tJmor">
          <img
            src={(unnamed as any).src}
            alt="About Us"
            style={{ width: '100%', height: '150px' }}
          />
          <div className="mt-3">
            <p style={{ textAlign: 'justify' }}>
              Blaunk.com is the online website for B2C &amp; B2B for selling and
              buying of Garments for women, men &amp; Kids, Accessories viz.,
              Belts, Wallet, Shoe, Bag, Home décor, Electronics &amp; Kitchen
              Appliances, Arts &amp; Crafts, Computer &amp; Industrial products.
              All products sold under Blaunk.com undergo with manually quality
              checking process so that we can ensure you that each and every
              product is value for money to our customer. We believe in customer
              satisfaction &amp; constructing faith between customers and vendor
              who sells their products &amp; services which are verified in
              terms of quality parameter before delivery. We source majority of
              the products directly from Manufacturer or Distributor to get
              deliver to our valued customer for the best price they pay for
              their products.
            </p>
          </div>
        </div>
      </div>
      <div className="group-companies  container mt-5">
        <img
          src={(group as any).src}
          alt="Group Companies"
          style={{ width: '100%', height: '150px' }}
        />
        <div
          className="p-5 d-flex align-items-center about__company"
          style={{ width: '100%' }}
        >
          <div style={{ height: '250px' }}>
            <img src={(cwm2 as any).src} height="250" alt="about the company" />
          </div>
          <div className="ml-4 aboutCompany__content">
            <h5>CHORDIA WEALTH MGT LLP</h5>
            <div className="mt-4" style={{ textAlign: 'justify' }}>
              Chordia Wealth Management LLP -CWM was incorporated under LLP act
              on 11 th May 2015 under leadership of Pravin Chordia who is
              Founder &amp; CEO, having Registered office at Mahim, Mumbai. .
              CWM,a dynamic and rapidly growing a private advisory management
              company. We have witnessed the highest of highs and the lowest of
              lows in our more than of presence in this industry, which we use
              and ensure our clients are fully enriched with.CWM LLP is engaged
              in stock broking ( NSE &amp; BSE), Insurance ( Life &amp; Non
              Life), Home Loan, Mutual Funds, Advisory, Wealth &amp; Advisory
              Management for Retail , HNI client.
              <br />
              <p className="mt-2">
                {' '}
                Read More here :&nbsp; {/* PDF */}
                <a
                  href="/static/media/CWM.83ad9bc4.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download="Chordia Wealth Managment"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path>
                  </svg>
                </a>{' '}
              </p>
              <p className="mt-1">
                Branch:&nbsp;Mumbai, Bangalore
                <a
                  target="_blank"
                  href="linkedin.com/in/chordia-wealth-management-llp-b74850a0"
                  className="social-icon cwm__a ml-4"
                  aria-label="linkedin"
                >
                  {/* <div className="social-container cwm__sc"> */}
                  <svg className="social-svg cwm__svg" viewBox="0 0 64 64">
                    <g className="social-svg-background cwm__g1">
                      <circle cx="32" cy="32" r="31"></circle>
                    </g>
                    <g className="social-svg-icon cwm__g2">
                      <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"></path>
                    </g>
                    <g className="social-svg-mask cwm__g3">
                      <path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z"></path>
                    </g>
                  </svg>
                  {/* </div> */}
                </a>
              </p>
              <p>Email:&nbsp;info.chordiawealth@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          className="p-5 d-flex align-items-center about__company"
          style={{ width: '100%' }}
        >
          <div style={{ height: '250px' }}>
            <img src={(cwd as any).src} height="250" alt="about the company" />
          </div>
          <div className="ml-4 aboutCompany__content">
            <h5>C&amp;D RETAIL (INDIA) LLP</h5>
            <div className="mt-4" style={{ textAlign: 'justify' }}>
              C&amp;D RETAIL (INDIA) LLP was incorporated on 11 th Sep 2018
              having registered office at Bangalore. Our Founder &amp; CEO Mr.
              Pravin Chordia look after entire Retail, Whole sale &amp; Exports
              of Garments, Belts, Wallets, Bags &amp; Accessories. Our Retail
              shops are owned &amp; run under Franchise model as FLASH+.
              <br />
              <p>
                Brands:
                <img
                  src={(brand as any).src}
                  alt="Brand"
                  style={{ width: '90%' }}
                />
              </p>
              <p className="mt-1">
                Branch:&nbsp;R T Nagar, Bangalore
                <a
                  target="_blank"
                  href="linkedin.com/in/chordia-wealth-management-llp-b74850a0"
                  className="social-icon cwm__a  ml-4"
                  aria-label="linkedin"
                >
                  {/* <div className="social-container cwm__sc"> */}
                  <svg className="social-svg cwm__svg" viewBox="0 0 64 64">
                    <g className="social-svg-background cwm__g1">
                      <circle cx="32" cy="32" r="31"></circle>
                    </g>
                    <g className="social-svg-icon cwm__g2">
                      <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"></path>
                    </g>
                    <g className="social-svg-mask cwm__g3">
                      <path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z"></path>
                    </g>
                  </svg>
                  {/* </div> */}
                </a>
              </p>
              <p>Email:&nbsp;info.flash@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2 About_board__directors__2XaEd">
        <img
          className="my-3"
          src={(board as any).src}
          alt="Board Directors"
          style={{ width: '100%', height: '150px' }}
        />
        <div
          className="d-flex align-items-center imageLeft"
          style={{ margin: '5px auto auto', width: '80%' }}
        >
          <div className="About_borderWrapper__BjyiC">
            <div
              className="About_aboutUs__Image__3a2tS"
              style={{
                backgroundImage: `url("${(pravin as any).src}")`,
              }}
            ></div>
          </div>
          <div className="ml-4 About_cardInfo__3M9rj">
            <div>
              <h5 style={{ lineHeight: '0.6' }}>Pravin Chordia</h5>
              <h5>Chairman &amp; Managing Director</h5>
              <p style={{ textAlign: 'justify' }}>
                Pravin Chordia (DIN 07092777) studied MBA from Mepco Schlenk
                College and done Certificate courses on Advertising &amp; NISM,
                He is having more than 20 years of rich and varied working
                experience started career with Paper Industry at Delhi and
                diversified with Printing &amp; Packaging, Financial product
                distribution industry viz., Stock broking, NPS, Mutual Fund,
                Insurance and Retail Chain industry. He is a Founder &amp; CEO
                of his group companies Chordia Wealth Management LLP - An
                Advisory &amp; Investment firm for HNI Clients and Retail
                trading. He also founder &amp; Partner of C&amp;D Retail (India)
                LLP, engaged in retail outlet &amp; Garments &amp; Accessories
                Exporters. Our Retail Franchise model under brand name “ FLASH”
                is well accepted among new business entrepreneur under mission
                &amp; initative to create swavalamban.
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center imageLeft"
          style={{ margin: '5px auto auto', width: '80%' }}
        >
          <div className="mr-4 About_cardInfo__3M9rj">
            <div>
              <h5 style={{ lineHeight: '0.6' }}>Pratiksha Desale</h5>
              <h5>Independent Director</h5>
              <p style={{ textAlign: 'justify' }}>
                Pratiksha Desale (DIN 09408429) is the first woman entrepreneur
                in her family and also fine sketch artist. She is a graduate in
                Mechanical Engineer (BE) from Datta Megha College of
                Engineering, Mumbai and has rich and varied experience of
                Digital Marketing &amp; Direct selling. She also serves as
                working partner in Chordia Wealth Management LLP as technical
                analyst and provides stock recommendation to HNI client. She is
                also a working Partner in C&amp;D Retail (India) LLP, handling
                wholesale selling (Domestic Market)
              </p>
            </div>
          </div>
          <div className="About_borderWrapper__BjyiC">
            <div
              className="About_aboutUs__Image__3a2tS"
              style={{
                backgroundImage: `url("${(pratiksha as any).src}")`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

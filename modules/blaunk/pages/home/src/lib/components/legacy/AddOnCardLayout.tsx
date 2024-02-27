/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react';
import { grid } from '@li/config/design';
import './AddOnCardLayout.css';
// import Modal from 'react-modal';

import shoes from './shoes.jpg';

export function AddOnCardLayout() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // function onImageClick() {
  //   setIsModalOpen(true);
  // }

  return (
    <div className={grid['col-3']}>
      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
      >
        <button
          style={{
            float: 'right',
            width: '5%',
            height: '30px',
            border: 'none',
            fontSize: '1.5rem',
            backgroundColor: '#fff',
          }}
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          X
        </button>
        <div
          style={{
            width: '100%',
            height: '88%',
            backgroundColor: 'yellow',
            marginTop: '3rem',
          }}
        >
          <img src={shoes} height="100%" width="100%" alt="Add On Images" />
        </div>
      </Modal> */}

      <div className="addOn" style={{}}>
        <img
          // onClick={() => {
          //   onImageClick();
          // }}
          src={(shoes as any).src}
          alt="Add On Product"
          height="100"
          width="140"
          style={{ margin: 'auto', display: 'block' }}
        />
        {/* <div className="" style={{ textAlign: 'center' }}>
          <input type="checkbox" />
        </div> */}

        <table
          style={{
            borderCollapse: 'collapse',
            textAlign: 'left',
            margin: 'auto',
            letterSpacing: '1px',
          }}
        >
          <tbody>
            {/* <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr> */}
            <tr>
              <td>Men's</td>
              <td>-</td>
              <td>Wallet</td>
            </tr>
            <tr>
              <td>Code</td>
              <td>-</td>
              <td>MEN24</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>-</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>MRP</td>
              <td>-</td>
              <td>
                <s>
                  &#x20b9;<span style={{ color: 'grey' }}>1299</span>
                </s>
              </td>
            </tr>
            <tr>
              <td>Add ON</td>
              <td>-</td>
              <td>&#x20b9;599</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>-</td>
              <td>BLACK</td>
            </tr>
            <tr>
              <td>Weight(in kg)</td>
              <td>-</td>
              <td>0.20</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>-</td>
              <td>
                <select>
                  <option>3</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" mt-3 addOn__button">
          <button style={{ letterSpacing: '0.8px' }}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

// export default AddOnCardLayout;

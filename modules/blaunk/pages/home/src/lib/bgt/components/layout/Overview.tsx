import React, { useState } from 'react';
import { Col, Container, Nav, Table } from 'react-bootstrap';
import { SizeTable } from './SizeTable';

interface TableRow {
  id: number;
  column1: string;
  column2: string;
}

const initialExportDetails: TableRow[] = [
  // ...Array.from({ length: 10 }, (_, i) => ({
  //   id: i + 1,
  //   column1: `Export Detail ${i + 1}`,
  //   column2: `Value ${i + 1}`,
  // })),
  { id: 1, column1: 'Certification', column2: 'Hardcoded Value ' },
  { id: 2, column1: 'Shipping Port', column2: 'Hardcoded Value ' },
  { id: 3, column1: 'Shipping Terms', column2: 'Hardcoded Value ' },
  { id: 4, column1: 'Bank Terms', column2: 'Hardcoded Value ' },
  { id: 5, column1: 'Advance Payment	', column2: 'Hardcoded Value ' },
  { id: 6, column1: 'Min Days Delivery	', column2: 'Hardcoded Value ' },
  { id: 7, column1: 'Export Min Qty', column2: 'Hardcoded Value ' },
  { id: 8, column1: 'COD Within Country	', column2: 'Hardcoded Value ' },
  { id: 9, column1: 'COD Overseas	', column2: 'Hardcoded Value ' },
  { id: 10, column1: 'Export License	', column2: 'Hardcoded Value ' },
  { id: 11, column1: 'Origin', column2: 'Hardcoded Value ' },
  { id: 12, column1: 'On Delivery Date Payment', column2: 'Hardcoded Value ' },
  { id: 13, column1: 'Swift Bank Charge', column2: 'Hardcoded Value ' },
  { id: 14, column1: 'Currency Acceptance', column2: 'Hardcoded Value ' },
  { id: 15, column1: 'Shipping Container Capacity', column2: 'Hardcoded Value ' },
  { id: 16, column1: 'Export Market', column2: 'Hardcoded Value ' },
];

const initialCompanyProfile: TableRow[] = [
  // ...Array.from({ length: 10 }, (_, i) => ({
  //   id: i + 1,
  //   column1: `Company Profile Detail ${i + 1}`,
  //   column2: `Info ${i + 1}`,
  // })),
  { id: 1, column1: 'Establishment', column2: 'Info 1' },
  { id: 2, column1: 'Origin', column2: 'Info 1' },
  { id: 3, column1: 'City', column2: 'Info 1' },
  { id: 4, column1: 'KYC Member', column2: 'Info 1' },
  { id: 5, column1: 'Grade', column2: 'Info 1' },
  { id: 6, column1: 'Our Banker', column2: 'Info 1' },
  { id: 7, column1: 'Status', column2: 'Info 1' },
  { id: 8, column1: 'Rating', column2: 'Info 1' },
  { id: 9, column1: 'Annual Turnover(Crs)', column2: 'Info 1' },
  { id: 10, column1: 'Avg Response Time', column2: 'Info 1' },
  { id: 11, column1: 'No. of Employees', column2: 'Info 1' },
  { id: 12, column1: 'Communication Mode', column2: 'Info 1' },
  { id: 13, column1: 'No. of Branches', column2: 'Info 1' },
  { id: 14, column1: 'Certificate - Product', column2: 'Info 1' },
  { id: 15, column1: 'No. Of Complaints', column2: 'Info 1' },
  { id: 16, column1: 'Resolved Complaints', column2: 'Info 1' },
  { id: 17, column1: 'No. Of Directors/Partners', column2: 'Info 1' },
  { id: 18, column1: 'Certificate - Tax', column2: 'Info 1' },
  { id: 19, column1: 'Profile Listing', column2: 'Info 1' },
];

const initialProductSpecifications: TableRow[] = [
  // ...Array.from({ length: 10 }, (_, i) => ({
  //   id: i + 1,
  //   column1: `Product Spec ${i + 1}`,
  //   column2: `Specification ${i + 1}`,
  // })),
  { id: 1, column1: 'Group', column2: 'Spec 1' },
  { id: 2, column1: 'Brand', column2: 'Spec 1' },
  { id: 3, column1: 'Article', column2: 'Spec 1' },
  { id: 4, column1: 'HSN code', column2: 'Spec 1' },
  { id: 5, column1: 'Tax Rate', column2: 'Spec 1' },
  { id: 6, column1: 'Material', column2: 'Spec 1' },
  { id: 7, column1: 'Warranty', column2: 'Spec 1' },
  { id: 8, column1: 'Consumable', column2: 'Spec 1' },
  { id: 9, column1: 'Type', column2: 'Spec 1' },
  { id: 10, column1: 'Product Code', column2: 'Spec 1' },
  { id: 11, column1: 'Product Expiry', column2: 'Spec 1' },
  { id: 12, column1: 'Product Origin', column2: 'Spec 1' },
  { id: 13, column1: 'Weight / Pcs', column2: 'Spec 1' },
  { id: 14, column1: 'No. of Pcs Packing', column2: 'Spec 1' },
  { id: 15, column1: 'Shipping weight', column2: 'Spec 1' },
  { id: 16, column1: 'Dimension LxBxH (cms)', column2: 'Spec 1' },
  { id: 17, column1: 'Dimension LxBxH (inch)', column2: 'Spec 1' },
  { id: 18, column1: 'Return Days', column2: 'Spec 1' },
  { id: 19, column1: 'Date of Posting', column2: 'Spec 1' },
  { id: 20, column1: 'Colour/Shades', column2: 'Spec 1' },
  { id: 21, column1: 'Product Condition', column2: 'Spec 1' },
  { id: 22, column1: 'Product Listing', column2: 'Spec 1' },
];

const initialPolicyDetails: TableRow[] = [
  // ...Array.from({ length: 10 }, (_, i) => ({
  //   id: i + 1,
  //   column1: `Policy Detail ${i + 1}`,
  //   column2: `Specification ${i + 1}`,
  // })),
  { id: 1, column1: 'Product Differ from Image	', column2: 'Detail 1' },
  { id: 1, column1: 'Quantity Shortage', column2: 'Detail 1' },
  { id: 1, column1: 'Article Colour Bleed', column2: 'Detail 1' },
  { id: 1, column1: 'Payment mode', column2: 'Detail 1' },
  { id: 1, column1: 'Warranty Period', column2: 'Detail 1' },
  { id: 1, column1: 'Refund', column2: 'Detail 1' },
  { id: 1, column1: 'Product Dead on Arrival', column2: 'Detail 1' },
  { id: 1, column1: 'Damaged Article', column2: 'Detail 1' },
  { id: 1, column1: 'Size Different', column2: 'Detail 1' },
  { id: 1, column1: 'Logistic Charges', column2: 'Detail 1' },
  { id: 1, column1: 'International Customer', column2: 'Detail 1' },
  { id: 1, column1: 'QC Charges', column2: 'Detail 1' },
  { id: 1, column1: 'Customized / Make to Order', column2: 'Detail 1' },
  { id: 1, column1: 'Cancellation Policy @ Cus care', column2: 'Detail 1' },
  { id: 1, column1: 'Delay In supply', column2: 'Detail 1' },
  { id: 1, column1: 'BLAUNK Charges', column2: 'Detail 1' },
  { id: 1, column1: 'Vendor Payment after Delivery', column2: 'Detail 1' },
  { id: 1, column1: 'Report an Issue', column2: 'Detail 1' },
  { id: 1, column1: 'Sample', column2: 'Detail 1' },
];

export const Overview: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('company-profile');

  const handleSelect = (selectedKey: string | null) => {
    if (selectedKey) {
      setActiveKey(selectedKey);
    }
  };

  const activeStyle = {
    color: 'palegoldenrod',
    backgroundColor: '#6d751d',
    marginRight: '10px',
  };

  const defaultStyle = {
    color: '#6d751d',
    backgroundColor: '#fcf4cb',
    marginRight: '10px',
  };

  return (
    <Container className="mt-2">
      <h2>Overview</h2>
      <style>{`
        th {
          background-color: #fcf4cb !important;
        }
      `}</style>
      <Nav variant="tabs" activeKey={activeKey} onSelect={handleSelect} className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="company-profile" style={activeKey === 'company-profile' ? activeStyle : defaultStyle}>
            Company Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="product-specifications"
            style={activeKey === 'product-specifications' ? activeStyle : defaultStyle}
          >
            Product Specifications
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="color-size" style={activeKey === 'color-size' ? activeStyle : defaultStyle}>
            Color & Size Chart
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="export-details" style={activeKey === 'export-details' ? activeStyle : defaultStyle}>
            Export Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="return-exchange" style={activeKey === 'return-exchange' ? activeStyle : defaultStyle}>
            Return & Exchange Policies
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Col>
        {activeKey === 'export-details' && (
          <Table bordered hover>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>Detail</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {initialExportDetails.map((row) => (
                <tr key={row.id}>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {activeKey === 'company-profile' && (
          <Table bordered hover>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>Detail</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {initialCompanyProfile.map((row) => (
                <tr key={row.id}>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {activeKey === 'product-specifications' && (
          <Table bordered hover>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>Specification</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {initialProductSpecifications.map((row) => (
                <tr key={row.id}>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {activeKey === 'color-size' && (
          <Table bordered hover>
            <SizeTable />
          </Table>
        )}
        {activeKey === 'return-exchange' && (
          <Table bordered hover>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>Detail</th>
                <th>Refund & Exchange Policy</th>
              </tr>
            </thead>
            <tbody>
              {initialPolicyDetails.map((row) => (
                <tr key={row.id}>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Container>
  );
};

export default Overview;

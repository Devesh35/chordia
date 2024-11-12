import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { RowData } from "../../utils/interfaces";

interface PriceDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (data: RowData) => void;
  unit?: string;
  minOrderQuantity?: string;
}

function PriceDetailsModal({
  show,
  handleClose,
  handleSave,
  unit,
  minOrderQuantity,
}: Readonly<PriceDetailsModalProps>) {
  const initialValue: RowData = {
    id: 0,
    quantity: "",
    price: "",
    priceDollar: "",
  };

  const [value, setValue] = useState<RowData>(initialValue);

  useEffect(() => {
    if (minOrderQuantity) {
      setValue((prevValue) => ({ ...prevValue, quantity: minOrderQuantity }));
    }
  }, [minOrderQuantity]);

  const handleChange = (
    name: string,
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const selectedValue = e.target.value;

    if (name === "quantity" || name === "price" || name === "priceDollar") {
      if (/^\d*\.?\d*$/.test(selectedValue)) {
        setValue({ ...value, [name]: selectedValue });
      }
    }
  };

  const handleSaveChanges = () => {
    const { quantity, price, priceDollar } = value;

    if (!quantity) {
      alert("Please enter a quantity.");
      return;
    }

    if (!price || price === "" || parseFloat(price) <= 0) {
      alert("Please enter a valid MRP.");
      return;
    }

    if (!priceDollar || priceDollar === "" || parseFloat(priceDollar) <= 0) {
      alert("Please enter a valid selling price.");
      return;
    }

    if (parseFloat(priceDollar) > parseFloat(price)) {
      alert("Price($) cannot be greater than price.");
      return;
    }

    handleSave(value);
    handleClose();
    setValue(initialValue); // Reset the form fields after saving
  };

  const handleModalClose = () => {
    handleClose();
    setValue(initialValue);
  };

  return (
    <Modal show={show} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Quantity ({unit})</Form.Label>
            <Form.Control
              value={value.quantity}
              onChange={(e) => handleChange("quantity", e)}
              maxLength={6}
            />
          </Form.Group>
          <Row>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Price (INR ₹)</Form.Label>
                <Form.Control
                  value={value.price}
                  onChange={(e) => handleChange("price", e)}
                  maxLength={6}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Price($)</Form.Label>
                <Form.Control
                  value={value.priceDollar}
                  onChange={(e) => handleChange("priceDollar", e)}
                  maxLength={6}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PriceDetailsModal;

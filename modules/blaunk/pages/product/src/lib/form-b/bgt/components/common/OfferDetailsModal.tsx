import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { OfferData } from "../../utils/interfaces";

interface OfferDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (data: OfferData) => void;
}

function OfferDetailsModal({
  show,
  handleClose,
  handleSave,
}: OfferDetailsModalProps) {
  const [value, setValue] = useState<OfferData>({
    id: 0,
    offerCode: "",
    quantity: "",
    offerDiscount: "",
  });

  const handleChange = (
    name: string,
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    let selectedValue = e.target.value;

    const numericRegex = /^[0-9]*\.?[0-9]*$/;

    if (name === "offerDiscount") {
      // Remove any non-numeric characters except for the decimal point
      selectedValue = selectedValue.replace(/[^0-9.]/g, "");

      // Ensure the decimal point is inserted after the first two digits
      if (selectedValue.length > 2) {
        selectedValue = selectedValue.replace(/^(\d{2})(\d)/, "$1.$2");
      }

      // Limit to 2 decimal places
      selectedValue = selectedValue.replace(/(\.\d{2})\d+/, "$1");

      // Set the formatted value
      setValue({ ...value, [name]: selectedValue });
    }
    // For other numeric inputs
    else if (numericRegex.test(selectedValue)) {
      setValue({ ...value, [name]: selectedValue });
    } else if (name === "offerCode") {
      setValue({ ...value, [name]: selectedValue });
    }
  };

  const handleSaveChanges = () => {
    if (value.quantity && value.offerDiscount) {
      handleSave(value);
      handleClose();
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Offer Code</Form.Label>
            <Form.Control
              value={value.offerCode ? value.offerCode.toUpperCase() : ""}
              onChange={(e) => handleChange("offerCode", e)}
              maxLength={15}
            />
          </Form.Group>
          <Row>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  value={value.quantity}
                  onChange={(e) => handleChange("quantity", e)}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Offer Discount (%)</Form.Label>
                <Form.Control
                  value={value.offerDiscount}
                  onChange={(e) => handleChange("offerDiscount", e)}
                  placeholder="00.00"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OfferDetailsModal;

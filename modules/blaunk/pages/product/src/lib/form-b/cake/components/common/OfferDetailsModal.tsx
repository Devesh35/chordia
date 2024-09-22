import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { offerCodes } from "../../utils/constants";
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
    offerCode: "FESTIVEOFF",
    maxValue: "",
    offerDiscount: "",
  });

  const handleChange = (
    name: string,
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const selectedValue = e.target.value;

    const numericRegex = /^[0-9]*\.?[0-9]*$/;

    if (numericRegex.test(selectedValue)) {
      setValue({ ...value, [name]: selectedValue });
    } else if (name === "offerCode") {
      setValue({ ...value, [name]: selectedValue });
    }
  };

  const handleSaveChanges = () => {
    handleSave(value);
    handleClose();
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
            <Form.Select
              value={value.offerCode}
              onChange={(e) => handleChange("offerCode", e)}
              autoFocus
            >
              {offerCodes.map((offerCode) => (
                <option key={offerCode.label} value={offerCode.label}>
                  {offerCode.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Row>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Max Purchase Value</Form.Label>
                <Form.Control
                  value={value.maxValue}
                  onChange={(e) => handleChange("maxValue", e)}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Offer Discount</Form.Label>
                <Form.Control
                  value={value.offerDiscount}
                  onChange={(e) => handleChange("offerDiscount", e)}
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

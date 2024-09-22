import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { weightOptions } from "../../utils/constants";
import { Col, Row } from "react-bootstrap";
import { RowData } from "../../utils/interfaces";

interface PriceDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (data: RowData) => void;
}

function PriceDetailsModal({
  show,
  handleClose,
  handleSave,
}: PriceDetailsModalProps) {
  const [value, setValue] = useState<RowData>({
    id: 0,
    weight: "Party/Customized Order",
    mrp: "0",
    sp: "0",
  });

  const handleChange = (
    name: string,
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const selectedValue = e.target.value;

    if (name === "weight") {
      if (selectedValue === "Party/Customized Order") {
        setValue({ ...value, weight: selectedValue, mrp: "0", sp: "0" });
      } else {
        setValue({ ...value, weight: selectedValue, mrp: "", sp: "" });
      }
    } else if (name === "mrp" || name === "sp") {
      if (/^\d*\.?\d*$/.test(selectedValue)) {
        if (
          name === "sp" &&
          parseFloat(selectedValue) > parseFloat(value.mrp)
        ) {
          alert("Selling price cannot be greater than MRP");
          return;
        }
        setValue({ ...value, [name]: selectedValue });
      }
    } else {
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
            <Form.Label>Weight</Form.Label>
            <Form.Select
              value={value.weight}
              onChange={(e) => handleChange("weight", e)}
              autoFocus
            >
              {weightOptions.map((weight) => (
                <option key={weight.label} value={weight.label}>
                  {weight.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Row>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>MRP</Form.Label>
                <Form.Control
                  value={value.mrp}
                  onChange={(e) => handleChange("mrp", e)}
                  disabled={value.weight === "Party/Customized Order"}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control
                  value={value.sp}
                  onChange={(e) => handleChange("sp", e)}
                  disabled={value.weight === "Party/Customized Order"}
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

export default PriceDetailsModal;

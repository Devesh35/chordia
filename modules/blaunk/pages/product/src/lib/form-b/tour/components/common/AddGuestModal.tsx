import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { guestOptions } from "../../utils/constants";
import { Col, Row } from "react-bootstrap";
import { GuestData } from "../../utils/interfaces";

interface AddGuestModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (data: GuestData) => void;
}

function AddGuestModal({
  show,
  handleClose,
  handleSave,
}: Readonly<AddGuestModalProps>) {
  const [value, setValue] = useState<GuestData>({
    id: 0,
    guest: "",
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

    if (name === "mrp" || name === "sp") {
      if (/^\d*\.?\d*$/.test(selectedValue)) {
        setValue({ ...value, [name]: selectedValue });
      }
    } else {
      setValue({ ...value, [name]: selectedValue });
    }
  };

  const handleSaveChanges = () => {
    const { guest, mrp, sp } = value;

    if (!guest || guest === "") {
      alert("Please select a guest.");
      return;
    }

    if (!mrp || mrp === "" || parseFloat(mrp) <= 0) {
      alert("Please enter a valid MRP.");
      return;
    }

    if (!sp || sp === "" || parseFloat(sp) <= 0) {
      alert("Please enter a valid selling price.");
      return;
    }

    if (parseFloat(sp) > parseFloat(mrp)) {
      alert("Selling price cannot be greater than MRP.");
      return;
    }

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
            <Form.Label>Guest</Form.Label>
            <Form.Select
              value={value.guest}
              onChange={(e) => handleChange("guest", e)}
              autoFocus
            >
              <option value="">Select Guest</option>
              {guestOptions.map((guest) => (
                <option key={guest.label} value={guest.label}>
                  {guest.label}
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
                  maxLength={6}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control
                  value={value.sp}
                  onChange={(e) => handleChange("sp", e)}
                  maxLength={6}
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

export default AddGuestModal;

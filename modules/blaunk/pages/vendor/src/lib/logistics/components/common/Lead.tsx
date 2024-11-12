import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

interface DataRow {
  loginDate: string;
  city: string;
  pincode: string;
  area: string;
  requirement: string;
  purpose: string;
  services: string;
  from: string;
  toDestination: string;
  pickUpDate: string;
  dropDate: string;
  pickUpSlot: string;
  otp: string;
  contact: string;
  response: "Pending" | "Accepted";
}

const sampleData: DataRow[] = [
  {
    loginDate: "01-01-2024",
    city: "New York",
    pincode: "10001",
    area: "Manhattan",
    requirement: "Transport",
    purpose: "Business",
    services: "Car Rental",
    from: "Airport",
    toDestination: "Hotel",
    pickUpDate: "01-02-2024",
    dropDate: "01-02-2024",
    pickUpSlot: "10:00 AM",
    otp: "1234",
    contact: "1234567890",
    response: "Pending",
  },
  {
    loginDate: "02-01-2024",
    city: "Los Angeles",
    pincode: "90001",
    area: "Downtown",
    requirement: "Transport",
    purpose: "Personal",
    services: "Taxi",
    from: "Train Station",
    toDestination: "Office",
    pickUpDate: "02-02-2024",
    dropDate: "02-02-2024",
    pickUpSlot: "11:00 AM",
    otp: "5678",
    contact: "0987654321",
    response: "Pending",
  },
  {
    loginDate: "03-01-2024",
    city: "Chicago",
    pincode: "60601",
    area: "Loop",
    requirement: "Transport",
    purpose: "Business",
    services: "Shuttle",
    from: "Bus Stop",
    toDestination: "Mall",
    pickUpDate: "03-02-2024",
    dropDate: "03-02-2024",
    pickUpSlot: "12:00 PM",
    otp: "------",
    contact: "1122334455",
    response: "Pending",
  },
];

const Lead: React.FC = () => {
  const [data, setData] = useState<DataRow[]>(sampleData);

  const toggleResponse = (index: number) => {
    setData((prevData) => {
      const updatedData: DataRow[] = prevData.map((row, rowIndex) => {
        if (rowIndex === index) {
          // Set the selected row's response to "Accepted" and update OTP
          return {
            ...row,
            response: "Accepted" as const, // Ensuring response is typed as "Accepted"
            otp: row.otp === "------" ? "1234" : row.otp,
          };
        } else if (row.response === "Accepted") {
          // Set other rows' response to "Pending" and hide OTP
          return {
            ...row,
            response: "Pending" as const, // Ensuring response is typed as "Pending"
            otp: "------",
          };
        }
        return row;
      });
      return updatedData;
    });
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Date Entry</th>
          <th>City</th>
          <th>Pincode</th>
          <th>Area</th>
          <th>Requirement</th>
          <th>Purpose</th>
          <th>Services</th>
          <th>From</th>
          <th>To Destination</th>
          <th>Pick-up Date</th>
          <th>Drop Date</th>
          <th>Pick-up Slot</th>
          <th>OTP</th>
          <th>Contact</th>
          <th>Response</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.loginDate}</td>
            <td>{row.city}</td>
            <td>{row.pincode}</td>
            <td>{row.area}</td>
            <td>{row.requirement}</td>
            <td>{row.purpose}</td>
            <td>{row.services}</td>
            <td>{row.from}</td>
            <td>{row.toDestination}</td>
            <td>{row.pickUpDate}</td>
            <td>{row.dropDate}</td>
            <td>{row.pickUpSlot}</td>
            <td>{row.response === "Accepted" ? row.otp : "------"}</td>
            <td>{row.contact}</td>
            <td>
              <Button
                variant={row.response === "Accepted" ? "success" : "danger"}
                onClick={() => toggleResponse(index)}
              >
                {row.response}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Lead;

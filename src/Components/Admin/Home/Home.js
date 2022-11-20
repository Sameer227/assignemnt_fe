import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as React from "react";
import "./home.css";

export default function AdminHome() {
  return (
    <div className="outerDiv">
      <Card className="card">
        <Card.Body>
          <Card.Title
            style={{ fontSize: "19px", textAlign: "left", marginLeft: "5%" }}
          >
            Product Master
          </Card.Title>
          <hr />
          <Button variant="primary" className="button">
            manage
          </Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Body>
          <Card.Title
            style={{ fontSize: "18px", textAlign: "left", marginLeft: "5%" }}
          >
            Unique Product Code
          </Card.Title>
          <hr />
          <Button variant="primary" className="button">
            Generate
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

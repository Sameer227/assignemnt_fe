import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./login.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <div className="outerDiv">
      <Card className="card">
        <Card.Body>
          <Card.Title
            style={{ fontSize: "24px", textAlign: "left", marginLeft: "5%" }}
          >
            Login
          </Card.Title>
          <hr />
          <Card.Text>
            <Box
              className="textField"
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="UserName"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Passowrd"
                variant="outlined"
              />
            </Box>
          </Card.Text>
          <Button variant="primary" className="button">
            Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

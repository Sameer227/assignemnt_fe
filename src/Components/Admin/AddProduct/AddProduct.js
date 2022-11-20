import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import "./login.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AddProduct() {
  const [product, setProduct] = useState({
    productID: "",
    productName: "",
    image:
      "http://127.0.0.1:3001/360_F_215616130_e3PiQsnDJbPFChViGx5XjyBwGjEkgLfA.jpg",
  });

  const storeData = (e, fieldName, type) => {
    console.log(e.target.files, fieldName);
    let value;
    if ((type = "text")) {
      value = e.target.value;
    } else {
      value = URL.createObjectURL(e.target.files[0]);
      // return false;
    }
    setProduct((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  return (
    <div className="outerDiv">
      <Card className="card">
        <Card.Body>
          <Card.Title
            style={{ fontSize: "24px", textAlign: "left", marginLeft: "5%" }}
          >
            Add Product
          </Card.Title>
          <hr />
          {/* <Card.Text> */}
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
              onChange={(e) => storeData(e, "productID")}
              id="outlined-basic"
              label="Unique Product ID"
              variant="outlined"
            />
            <TextField
              onChange={(e) => storeData(e, "productName")}
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
            />
            <TextField
              type="file"
              onChange={(e) => storeData(e, "image")}
              id="outlined-basic"
              variant="outlined"
            />
          </Box>
          {product.image && (
            <div>
              <img
                style={{
                  width: "30%",
                  height: "30%",
                  margin: "10px",
                  border: "1px solid",
                }}
                src={product.image}
              />
            </div>
          )}
          {/* </Card.Text> */}
          <Button variant="primary" className="button">
            Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

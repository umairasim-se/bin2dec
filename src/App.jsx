import "./App.css";

import Stack from "@mui/material/Stack";
import Textfield from "@mui/material/Textfield";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

const buttonStyle = {
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: 500,
  fontFamily: "inherit",
  backgroundColor: "#ff8e8e",
  cursor: "pointer",
  transition: "border-color 0.25s",
  color: "#3d4348",
  "&:focus": {
    outline: "none",
  },
};

function App() {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    if (value.match(/^[0-1]+$/g) === null && value !== "") {
      setError("Only 0s & 1s");
      return;
    }

    setError("");
    setBinaryInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const reverseBinaryInput = binaryInput.split("").reverse();
    let decimalResult = reverseBinaryInput.reduce(
      (acc, value, i) => acc + parseInt(value) * Math.pow(2, i),
      0
    );

    setDecimalOutput(decimalResult);
  };

  return (
    <div className="App">
      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h2" sx={{ fontFamily: "Shantell Sans" }}>
          {" "}
          Binary to Deciaml Converter{" "}
        </Typography>

        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            color: "#fff",
            width: "500px",
            background: "#fff",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <Textfield
            label="Binary"
            name="binary"
            placeholder="e.g 0111"
            onChange={handleChange}
            inputProps={{ maxLength: 8 }}
          />
          {error && <code style={{ color: "red" }}>{error}</code>}
          <Textfield
            label="Decimal"
            name="decimal"
            inputProps={{ readOnly: true }}
            value={decimalOutput}
          />
          <Button onClick={onSubmit} sx={buttonStyle}>
            Convert
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;

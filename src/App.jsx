import React from "react";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Button Examples</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Primary Buttons</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="small" onClick={handleClick}>
            Small Primary
          </Button>
          <Button size="medium" onClick={handleClick}>
            Medium Primary
          </Button>
          <Button size="large" onClick={handleClick}>
            Large Primary
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Button Variants</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" onClick={handleClick}>
            Primary
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary
          </Button>
          <Button variant="success" onClick={handleClick}>
            Success
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Danger
          </Button>
          <Button variant="outline" onClick={handleClick}>
            Outline
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Disabled Buttons</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button disabled onClick={handleClick}>
            Disabled Primary
          </Button>
          <Button variant="secondary" disabled onClick={handleClick}>
            Disabled Secondary
          </Button>
          <Button variant="outline" disabled onClick={handleClick}>
            Disabled Outline
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

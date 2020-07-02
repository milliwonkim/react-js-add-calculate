import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// ----------------------------------------

const Div1 = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100vw;
  ${"" /* height: 100vw; */}
  font-family: 'Heebo', sans-serif;
`;

const Input = styled.input`
  padding: 5px;
  width: 100px;
  text-align: center;
  font-family: "Heebo", sans-serif;
`;

const Total = styled.div`
  font-family: "Heebo", sans-serif;
  color: #2e86de;
`;

// ----------------------------------------

const _defaultCosts = [
  {
    name: "Rice",
    price: 40
  },
  {
    name: "Noodle",
    price: 20
  }
];

const App = () => {
  const [costs, setCosts] = useState(_defaultCosts);

  const handleCostsChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
  };

  const addNewCost = () => {
    setCosts(prevCosts => [...prevCosts, { name: "", price: 0 }]);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };

  return (
    <Div1 className="table">
      <h1>Food costs</h1>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <h2>Item</h2>
            </div>
            <div className="table-data">
              <h2>Price</h2>
            </div>
          </div>
        </div>
        <div className="table-body">
          {costs.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <Input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleCostsChange}
                />
              </div>
              <div className="table-data">
                <Input
                  name="price"
                  data-id={index}
                  type="text"
                  value={item.price}
                  onChange={handleCostsChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <Button variant="outlined" color="primary" onClick={addNewCost}>
                +
              </Button>
            </div>
          </div>
        </div>
        <Total className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <h2>Total</h2>
            </div>
            <div className="table-data">
              <h2>{getTotalCosts()}</h2>
            </div>
          </div>
        </Total>
      </div>
    </Div1>
  );
};

export default App;

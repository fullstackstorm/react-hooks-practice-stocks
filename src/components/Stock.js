import React from "react";

function Stock({ onBuy, onSell, stock, containerType }) {
  const { name, price } = stock;

  const handleClick = () => {
    if (containerType === "PortfolioContainer") {
      onSell(stock); 
    } else {
      onBuy(stock); 
    }
  };

  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;

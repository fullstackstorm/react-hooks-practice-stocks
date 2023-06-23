import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, sellStock }) {
  const handleRemoveStock = (stock) => {
    sellStock(stock);
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock onSell={() => handleRemoveStock(stock)} containerType="PortfolioContainer" key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default PortfolioContainer;

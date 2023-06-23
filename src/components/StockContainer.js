import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock }) {
  const handleAddPortfolio = (stock) => {
    buyStock(stock);
  };

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock
          onBuy={() => handleAddPortfolio(stock)}
          containerType="StockContainer"
          key={stock.id}
          stock={stock}
        />
      ))}
    </div>
  );
}

export default StockContainer;

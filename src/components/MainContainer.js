import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(
    () =>
      fetch("http://localhost:3001/stocks")
        .then((r) => r.json())
        .then((data) => {
          setStocks(data);
          setFilteredStocks(data);
        }),
    []
  );

  function handleBuyStock(stock) {
    setPortfolio((prevFolio) => [...prevFolio, stock]);
  }

  function handleSellStock(stock) {
    const newPortfolio = portfolio.filter(
      (currentStock) => currentStock.id !== stock.id
    );
    setPortfolio(newPortfolio);
  }

  function handleSort(sortBy) {
    console.log(sortBy)
    let sortedStocks = [...filteredStocks];
    if (sortBy === "Alphabetically") {
      sortedStocks = sortedStocks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Price") {
      sortedStocks = sortedStocks.sort((a, b) => a.price - b.price);
    }
    setFilteredStocks(sortedStocks);
  }

  function handleFilter(filterBy) {
    if (filterBy === "Tech") {
      setFilteredStocks(stocks.filter((stock) => stock.type === "Tech"));
    } else if (filterBy === "Sportswear") {
      setFilteredStocks(stocks.filter((stock) => stock.type === "Sportswear"));
    } else if (filterBy === "Finance") {
      setFilteredStocks(stocks.filter((stock) => stock.type === "Finance"));
    } else {
      setFilteredStocks(stocks);
    }
  }

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} buyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            sellStock={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetProductsData } from "../../../redux/Products/api_actions";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../../../components/CustomCard";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";

const ShopPage = () => {
  const [genreFilters, setGenreFilters] = useState([]);
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  const getProducts = async () => {
    dispatch(GetProductsData());
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filteredBooks = product
    .filter((book)=>book.title.toLowerCase().trim().includes(searchFilter.toLowerCase().trim()))
      .filter(
        (book) => genreFilters.length === 0 || genreFilters.includes(book.genre)
      )
      .filter((book) => {
        const price = book.price || 0;
        const minPrice = minPriceFilter ? parseFloat(minPriceFilter) : 0;
        const maxPrice = maxPriceFilter ? parseFloat(maxPriceFilter) : Infinity;
        return price >= minPrice && price <= maxPrice;
      });
    setBooks(filteredBooks);
  }, [product, genreFilters, minPriceFilter, maxPriceFilter, searchFilter]);

  const handleGenreChange = (genre) => {
    setGenreFilters((prevFilters) =>
      prevFilters.includes(genre)
        ? prevFilters.filter((filter) => filter !== genre)
        : [...prevFilters, genre]
    );
  };

  return (
    <StyledBookList>
      <Row>
        <Col xs={24} md={6}>
          <div className="filter-container">
            <div className="filter-item">
              <Title level={5} className="sidebar-title">
                Search by Name:
              </Title>
              <StyledSearch className="header-search-block">
                <input type="text" placeholder="Search here" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)}/>
                <button><i class="fa-regular fa-magnifying-glass"></i></button>
              </StyledSearch>
            </div>
            <div className="filter-item">
              <Title level={5} className="sidebar-title">
                Filter by Genre:
              </Title>
              {Array.from(new Set(product.map((book) => book.genre))).map(
                (genre) => (
                  <div key={genre} className="filter-checkbox">
                    <input
                      type="checkbox"
                      id={genre}
                      checked={genreFilters.includes(genre)}
                      onChange={() => handleGenreChange(genre)}
                    />
                    <label htmlFor={genre}>{genre}</label>
                  </div>
                )
              )}
            </div>
            <div className="filter-item filter-price">
              <Title level={5} className="sidebar-title">
                Filter by Price:
              </Title>
              <Row style={{ margin: "0 -6px" }}>
                <Col xs={12} md={24} style={{ padding: "0 6px" }}>
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={minPriceFilter}
                    min={0}
                    onChange={(e) => setMinPriceFilter(e.target.value)}
                  />
                </Col>
                <Col xs={12} md={24} style={{ padding: "0 6px" }}>
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPriceFilter}
                    min={0}
                    onChange={(e) => setMaxPriceFilter(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <div className="book-container">
            {books.map((book) => (
              <CustomCard key={book.id} item={book} />
            ))}
          </div>
        </Col>
      </Row>
    </StyledBookList>
  );
};

const StyledBookList = styled.div`
  .filter-container {
    width: 100%;
    padding: 20px;
    input {
      margin-right: 5px;
    }
  }
  .sidebar-title {
    font-size: 15px;
    text-transform: capitalize;
    margin: 10px 0 20px 0;
    text-align: left;
    font-weight: 700;
    display: block;
    line-height: 52px;
    background: #62ab00;
    text-align: center;
    color: #fff;
    border-radius: 3px;
  }
  .filter-item {
    margin-bottom: 30px;
  }
  .filter-checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
    input[type="checkbox"]:checked {
      background-color: ##62ab00;
      border-color: ##62ab00;
    }
  }
  .filter-container label {
    display: block;
  }
  .book-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
    & > div {
      width: 50%;
    }
  }
  .filter-price input {
    margin-right: 5px;
    border: 1px solid #f3f3f3;
    background: #f3f3f3;
    padding: 8px 12px;
    margin-bottom: 12px;
    width: 100%;
    height: 40px;
    outline: none;
  }
  .filter-price input:focus-visible {
    border: 1px solid #62ab00;
  }
  .product-card {
    position: relative;
  }

  @media screen and (max-width: 480px) {
    .book-container > div {
      width: 100% !important;
    }
  }
  @media screen and (max-width: 766px) {
    .ant-row {
      display: flex;
      flex-flow: row wrap;
      min-width: 0;
      flex-direction: column-reverse;
    }
  }
`;

const StyledSearch = styled.div`
    position: relative;
    width: 100%;
    input {
      font-size: 16px;
      color: #333;
      width: 100%;
      height: 40px;
      float: none;
      font-weight: 400;
      background: #fff;
      border: 2px solid #eee;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      padding: 0 46px 0 20px;
      outline: none;
    }
   button {
     position: absolute;
     top: 0;
     right: 0;
     height: 40px;
     background: #e8e7e7;
     border: 0;
     box-shadow: none !important;
     margin: 0;
     font-size: 15px;
     font-weight: 700;
     padding: 0 12px;
     color: #333;
     border-radius: 0;
     border-top-right-radius: 3px;
     border-bottom-right-radius: 3px;
    } 
    `

export default ShopPage;

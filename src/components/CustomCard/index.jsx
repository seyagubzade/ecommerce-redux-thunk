import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomCard = ({ item }) => {
  return (
    <StyledCard>
      <div style={{ minWidth: "250px" }} className="product-card">
        <div className="product-header">
          <span className="author" tabindex="0">
            {item.author}
          </span>
          <h3>
            <a href="product-details.html" tabindex="0">
              {item.title}
            </a>
          </h3>
        </div>
        <div className="product-card--body">
          <div className="card-image">
            <img
              src={item.imageUrl}
              alt=""
              style={{ width: "180px", height: "280px", objectFit: "contain" }}
            />
            <div className="hover-contents">
              <a
                href="product-details.html"
                className="hover-image"
                tabindex="0"
              >
                <img src="image/products/product-6.jpg" alt="" />
              </a>
              <div className="hover-btns">
                <Link href="cart.html" className="single-btn" tabindex="0">
                  <i className="fas fa-shopping-basket"></i>
                </Link>
                <Link href="wishlist.html" className="single-btn" tabindex="0">
                  <i className="fas fa-heart"></i>
                </Link>
                <Link
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quickModal"
                  className="single-btn"
                  tabindex="0"
                >
                  <i className="fas fa-eye"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="price-block">
            <span className="price">£{item.price}</span>
            <del className="price-old">£15.20</del>
            {/* <span className="price-discount">20%</span> */}
          </div>
        </div>
      </div>
    </StyledCard>
  );
};
const StyledCard = styled.div`
  a {
    color: #333;
  }
  margin: 20px auto;
  .product-card {
    text-align: center;
    padding: 20px;
  }
  .product-card .product-header {
    padding: 0 15px;
  }
  .product-card .author {
    font-size: 14px;
    font-weight: 400;
    padding: 0;
    color: #333;
    text-transform: capitalize;
    display: block;
    margin-bottom: 5px;
  }
  product-card .card-image {
    position: relative;
  }
  .product-card .hover-contents {
    position: absolute;
    top: 0;
    left: 50%;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  .product-card h3 a {
    padding: 0;
    display: block;
    text-transform: capitalize;
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .product-card:hover .hover-contents {
    visibility: visible;
    opacity: 1;
  }
  .product-card:hover .hover-contents .hover-btns {
    opacity: 1;
    top: 50%;
    background: #fff;
  }
  .hover-contents .hover-btns .single-btn {
    line-height: 27px;
    padding: 17px;
    border-right: 1px solid #e5e5e5;
  }
  .hover-contents .hover-btns {
    position: absolute;
    opacity: 0;
    top: 55%;
    left: 50%;
    margin: auto;
    background: #fff;
    z-index: 3;
    border-radius: 3px;
    -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.15);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .product-card--body::before {
    position: absolute;
    content: "";
    background: #e5e5e5;
    left: 0px;
    top: 0;
    height: 100%;
    width: 1px;
    margin: 12px 0;
  }
  .product-card .price-block {
    text-align: center;
    position: relative;
    margin-top: 24px;
  }
  .price {
    color: #929292;
    font-size: 18px;
    color: #62ab00;
    font-weight: 600;
  }
  .price-old {
    color: #999999;
    text-decoration: line-through;
    font-size: 14px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

export default CustomCard;

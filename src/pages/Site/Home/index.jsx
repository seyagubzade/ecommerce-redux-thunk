import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCarousel from "../../../components/HomeCarousel";
import Features from "../../../components/Features";
import { GetProductsData } from "../../../redux/Products/api_actions";
import { Spin } from "antd";
import SwiperCardList from "../../../components/SwiperCardList";
import styled from "styled-components";
import BestSellers from "../../../components/BestSellers";

const Home = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  const getProducts = async () => {
    dispatch(GetProductsData());
  };
  const allFeatures = [
    {
      key: "shipping",
      title: "Free Shipping Item",
      desc: "Orders over $500",
      icon: <i class="fas fa-shipping-fast"></i>,
    },
    {
      key: "money-back",
      title: "Money Back Guarantee",
      desc: "100% money back",
      icon: <i class="fas fa-redo-alt"></i>,
    },
    {
      key: "cash-delivery",
      title: "Cash On Delivery",
      desc: "Lorem ipsum dolor amet",
      icon: <i class="fas fa-piggy-bank"></i>,
    },
    {
      key: "cash-delivery",
      title: "Help & Support",
      desc: "Call us : + 0123.4567.89",
      icon: <i class="fas fa-life-ring"></i>,
    },
  ];
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <HomeCarousel />
      <StyledContainer>
        <Features allFeatures={allFeatures} />
        {console.log(product)}
        {loading && <Spin />}
        {product && <SwiperCardList items={product} />}
      </StyledContainer>
      <BestSellers items={product} />
    </React.Fragment>
  );
};
const StyledContainer = styled.div`
  max-width: 920px;
  margin: 20px auto;
  @media screen and (max-width: 920px) {
    max-width: 720px;
  }
`;
export default Home;

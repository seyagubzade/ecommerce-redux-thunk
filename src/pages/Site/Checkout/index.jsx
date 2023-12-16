import { Col, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DeleteAllCartItems, GetCartItems } from "../../../redux/Cart/api_actions";
import { Link, useNavigate } from "react-router-dom";
import { PostOrederItem } from "../../../redux/Orders/api_actions";
import toast from "react-hot-toast";

const Checkout = () => {
  const dispatch = useDispatch();
  const { carts, loading, error } = useSelector((state) => state.cart);
  const [totalPriceAll, setTotalPriceAll] = useState(0);
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    },
    onSubmit: async(values) => {
      let newId = new Date().getTime()
      let newOrdersArr = carts.map((cart)=> {return ({...cart, status: "Pending", customerID: newId})})
      let newOrder = { ...values, orders: [...newOrdersArr], id: newId };
      await dispatch(PostOrederItem(newOrder))

      toast.success('Order completed')
      dispatch(DeleteAllCartItems())
      navigate(`/order-complate/${newId}`)
    },
  });

  const getCarts = async () => {
    dispatch(GetCartItems());
  };
  useEffect(() => {
    getCarts();
  }, []);

  useEffect(() => {
    const finalPrice = carts.reduce(
      (accumulator, cart) => accumulator + cart.totalPrice,
      0
    );
    setTotalPriceAll(finalPrice);
  }, [carts]);
  return (
    <StyledCheckout>
      <Typography style={{ marginBottom: "30px" }}>
        <Title level={5}>
          <Link to="/" >Home</Link> / Cart
        </Title>
      </Typography>
      <Title level={3} style={{ padding: "0 15px" }}>
        Checkout
      </Title>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col xs={24} md={12} lg={14} style={{ padding: "0 15px" }}>
            <h4 className="checkout-title">Billing Address</h4>

            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <label htmlFor="phone">Phone No</label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              required
            />
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              onChange={formik.handleChange}
              value={formik.values.address}
              required
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="city"
              placeholder="City"
              onChange={formik.handleChange}
              value={formik.values.city}
              required
            />
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="state"
              placeholder="State"
              onChange={formik.handleChange}
              value={formik.values.state}
            />
          </Col>
          <Col xs={24} md={12} lg={10} style={{ padding: "0 15px" }}>
            <div class="checkout-cart-total">
              <h2 class="checkout-title">YOUR ORDER</h2>
              <h4>
                Product <span>Total</span>
              </h4>
              <ul>
                {carts &&
                  carts.map((item, index) => {
                    return (
                      <li>
                        <span class="left">
                          {item.title} 
                        </span>
                        <span class="right">{item.count} x ${item.price}</span>
                      </li>
                    );
                  })}
              </ul>

              <h4>
                Grand Total <span>${parseFloat(totalPriceAll).toFixed(2)}</span>
              </h4>
              <br />
              <button class="place-order" style={{ width: "100%" }}>
                Place order
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </StyledCheckout>
  );
};

const StyledCheckout = styled.div`
  background-color: #fff;
  padding: 20px;
  .checkout-title {
    border-bottom: 1px solid #e6e6e6;
    margin: 0 0 20px;
    padding-bottom: 10px;
    text-transform: none;
    width: 100%;
    color: #1a1f2b;
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
  }
  .ant-typography a {
    color: #333;
}
  label {
    color: #1a1f2b;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    margin: 0 0 5px;
    display: inline-block;
  }
  input {
    width: 100%;
    background-color: #f4f4f4;
    border: 1px solid transparent;
    border-radius: 0;
    line-height: 23px;
    padding: 10px 20px;
    font-size: 14px;
    color: #14191e;
    margin-bottom: 15px;
  }
  input:focus {
    box-shadow: none;
    outline: none;
    border-color: #62ab00;
  }
  .checkout-cart-total {
    background-color: #f9f9f9;
    color: #333;
    padding: 35px 30px;
  }
  .checkout-title {
    border-bottom: 1px solid #dfdfdf;
    font-size: 24px;
    margin: 0 0 20px;
    padding-bottom: 10px;
    text-transform: capitalize;
    width: 100%;
    font-weight: 700;
  }
  h4 {
    line-height: 23px;
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
  }
  ul {
    border-bottom: 1px solid #dfdfdf;
    color: #333;
    margin: 15px 0;
  }
  ul li {
    color: inherit;
    font-size: 14px;
    line-height: 23px;
    font-weight: 400;
    display: block;
    margin-bottom: 16px;
    overflow: hidden;
  }
  li span.left {
    float: left;
    width: 70%;
  }
  li span {
    color: inherit;
    float: right;
  }
  span {
    float: right;
    display: block;
  }
  .place-order {
    border-radius: 3px;
    height: 50px;
    border: none;
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 20px;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    background-color: #62ab00;
    transition: 0.4s;
    cursor: pointer
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    .checkout-title {
      font-size: 33px;
    }
  }
`;

export default Checkout;

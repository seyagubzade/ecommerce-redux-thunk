import React, { useEffect, useState } from "react";
import { Select } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { UpdateOrder } from "../../redux/Orders/api_actions";
import { useNavigate } from "react-router";

const StatusSelect = ({ item, updateStatusOrder }) => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch()
  const {id} = item

  const handleStatusChange = (value) => {
    setStatus(value);
    // console.log({ ...item, status:value })
    updateStatusOrder({ ...item, status:value })
    // dispatch(UpdateOrder({ id, item: {...item, status:value} }));

  };
  useEffect(()=>{
    setStatus(item.status)
  }, [item])

  const statuses = [
    {
      label: "Accepted",
      value: "Accepted",
      color: "green",
      background: "lightgreen",
    },
    {
      label: "Pending",
      value: "Pending",
      color: "orange",
      background: "lightyellow",
    },
    {
      label: "On Courier",
      value: "On Courier",
      color: "#0073ff",
      background: "#b7d8ff",
    },
    {
      label: "Rejected",
      value: "Rejected",
      color: "red",
      background: "#ffb8b8",
    },
  ];

  return (
    <CustomSelect>
      <Select
        value={status}
        onChange={handleStatusChange}
        style={{ width: 120, height:'36px', outline:'none' }}
      >
        {statuses.map((statusItem) => (
          <Select.Option
            key={statusItem.value}
            value={statusItem.value}
            style={{
              color: statusItem.color,
              background: statusItem.background,
              marginTop: "8px",
            }}
          >
            <span
              style={{
                color: statusItem.color,
                background: statusItem.background,
                height:"36px",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              {statusItem.label}
            </span>
          </Select.Option>
        ))}
      </Select>
    </CustomSelect>
  );
};

const CustomSelect = styled.div`
  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    outline: none;
  }
  .ant-select-selector:focus {
    background-color: transparent !important;
    border: none !important;
  }
  :where(.css-dev-only-do-not-override-6j9yrn).ant-select .ant-select-arrow {
    display: none;
  }
  :where(
      .css-dev-only-do-not-override-6j9yrn
    ).ant-select-single.ant-select-show-arrow
    .ant-select-selection-item {
    padding-inline-end: 0px;
  }
  .ant-select-selector {
    padding: 0 !important;
  }
  .ant-select-selection-item>span{
    width: 100%!important;
    text-align: center;
  }
  
`;

export default StatusSelect;

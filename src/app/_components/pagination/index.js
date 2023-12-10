"use client";
import React from "react";
import { Pagination } from "antd";
import "./index.scss";

function PaginationComp() {
  const clickPage = (page, pageSize) => {
    console.log("page, pageSize: ", page, pageSize);
  };
  return (
    <div className="pagination-wrap">
      <Pagination
        defaultCurrent={6}
        total={500}
        showSizeChanger={false}
        onChange={clickPage}
      />
    </div>
  );
}

export default PaginationComp;

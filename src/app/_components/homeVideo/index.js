"use client";

import React from "react";
import logo from "@/assets/logo.png";
import { Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Link from "next/link";

import "./index.scss";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
];

function HomeVideo() {
  return (
    <div className="video-wrap">
      <div className="phimage">
        <div className="preloadLine"></div>
        <Link href="/" className="link">
          <img className="img" src={logo.src} alt="/" />
          <div className="time">41:00</div>
        </Link>
      </div>
      <div className="msg">
        <div className="msg-up">
          <div className="user">sdsd</div>
          <div className="check">
            <div className="view">250k</div>
            <div className="like">86%</div>
          </div>
        </div>
        <div className="msg-down">
          <div className="title">d的发动机妇女对方的你快放手的那发到你</div>
          <div className="more">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <MoreOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeVideo;

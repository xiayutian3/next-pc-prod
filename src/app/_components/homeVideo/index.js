"use client";

import React from "react";
import logo from "@/assets/logo.png";
import { Dropdown } from "antd";
import { 
  MoreOutlined,
  StarOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  LikeOutlined,
  PlusOutlined,
  WifiOutlined,
  CloseCircleOutlined
 } from "@ant-design/icons";
import Link from "next/link";

import "./index.scss";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    icon: <PlusOutlined />,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    icon:  <WifiOutlined />,
    key: "1",
  },
  {
    label: <a href="https://www.aliyun.com">3nd menu item</a>,
    icon:  <CloseCircleOutlined />,
    key: "2",
  },
];

function HomeVideo(props) {
  const {videoItem} = props;
  // console.log('videoItem: ', videoItem);

  return (
    <div className="video-wrap">
      <div className="phimage">
        <div className="preloadLine"></div>
        <Link href="/" className="link">
          <img className="img" src={logo.src} alt="/" />
          <div className="free"><StarOutlined className="free-icon" /> 免费</div>
          <div className="time">41:00</div>
          <video autoPlay muted loop className="video-pre" poster="">
            <source src="/1.mp4" type="video/mp4"></source>
          </video>
        </Link>
      </div>
      <div className="msg">
        <div className="msg-up">
          <div className="user">
            <Link className="user-link" href="/" >sdsd</Link>
            <CheckCircleOutlined className="user-icon"/>
          </div>
          <div className="check">
            <div className="view">
            <EyeOutlined className="view-icon" />
              250k
              </div>
            <div className="like">
            <LikeOutlined className="like-icon" />
              86%
              </div>
          </div>
        </div>
        <div className="msg-down">
          <div className="title">
            <Link className="title-link" href={"/"}>
              d的发动机妇女对方的你快放手的那发到你
              d的发动机妇女对方的你快放手的那发到你
              d的发动机妇女对方的你快放手的那发到你
            </Link>
          </div>
          <div className="more">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName="video-more"
              getPopupContainer={(triggerNode) => triggerNode.parentNode || document.body}
            >
              <a onClick={(e) => e.preventDefault()}>
                <MoreOutlined className="more-img" />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeVideo;

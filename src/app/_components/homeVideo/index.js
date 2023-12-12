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
        <Link href={`/playpage?videoSrc=${videoItem.videoSrc}`} className="link">
          <img className="img" src={videoItem.poster} alt={videoItem.title} />
          <div className={videoItem.free?"free":"none"} ><StarOutlined className="free-icon" /> 免费</div>
          <div className="time">{videoItem.time}</div>
          <video autoPlay muted loop className="video-pre" poster="">
            <source src={videoItem.preview} type="video/mp4"></source>
          </video>
        </Link>
      </div>
      <div className="msg">
        <div className="msg-up">
          <div className="user">
            <Link className="user-link" href={videoItem.authLink} >{videoItem.auth}</Link>
            <CheckCircleOutlined className="user-icon"/>
          </div>
          <div className="check">
            <div className="view">
            <EyeOutlined className="view-icon" />
              {videoItem.view}
              </div>
            <div className="like">
            <LikeOutlined className="like-icon" />
              {videoItem.like}
              </div>
          </div>
        </div>
        <div className="msg-down">
          <div className="title">
            <Link className="title-link" href={`/playpage?videoSrc=${videoItem.videoSrc}`} >
            {videoItem.title}
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

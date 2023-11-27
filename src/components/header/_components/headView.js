import React from "react";
import Link from "next/link";
import { RocketOutlined, FireOutlined } from "@ant-design/icons";
import "./headView.scss";
import logo from "@/assets/logo.png";

function headView({ videoItem }) {
  // console.log("videoItem: ", videoItem);

  return (
    <div className="head-view">
      <Link className="view-link" href={"/"}>
        <img className="poster" src={logo.src} alt="logo" />
        <div className="free-icon">
          <FireOutlined />
          <span className="free">免费</span>
        </div>
        <div className="time">15:00</div>
        <video autoPlay muted loop className="video-preview" poster="">
          <source src="/1.mp4" type="video/mp4"></source>
        </video>
      </Link>
      <div className="info-wrap">
        <span className="title">
          <Link href={"/"}>titletitletitletitle</Link>
        </span>
        <div className="username">
          <RocketOutlined />
          <Link href="/" title="username">
            username
          </Link>
        </div>
        <div className="views">2m次观看</div>
      </div>
    </div>
  );
}

export default headView;

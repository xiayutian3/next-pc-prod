"use client";
import React from "react";
import Link from "next/link";
import {
  StarOutlined,
  CheckCircleOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import "./index.scss";

function GuessVideo(props) {
  const { videoItem } = props;
  return (
    <div className="hot-video">
      <div className="phimage">
        <div className="preloadLine"></div>
        <Link
          href={`/playpage?videoSrc=${videoItem.videoSrc}`}
          className="link"
        >
          <img className="img" src={videoItem.poster} alt={videoItem.title} />
          <div className={videoItem.free ? "free" : "none"}>
            <StarOutlined className="free-icon" /> 免费
          </div>
          <div className="time">{videoItem.time}</div>
          <video autoPlay muted loop className="video-pre" poster="">
            <source src={videoItem.preview} type="video/mp4"></source>
          </video>
        </Link>
      </div>
      <div className="msg">
        <div className="v-title">
          <Link
            className="link"
            href={`/playpage?videoSrc=${videoItem.videoSrc}`}
          >
            {" "}
            {videoItem.title}
          </Link>
        </div>
        <div className="name-wrap">
          <Link href={videoItem.authLink}>
            <Space>
              <CheckCircleOutlined className="icon" />
              <span className="name">
                {videoItem.auth}
              </span>
            </Space>
          </Link>
        </div>
        <div className="view">
          <Space>
            <span>666K 次观看</span>
            <span>
              <LikeOutlined /> 75%
            </span>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default GuessVideo;

"use client";
import React from "react";
import Link from "next/link";
import {
  AndroidOutlined,
  RightOutlined,
  RocketOutlined,
  FireOutlined,
} from "@ant-design/icons";
import "./wideDropdown.scss";
import HeadView from "./headView";
import logo from "@/assets/logo.png";
// import videodemo from "../../../assets/1.mp4"
// console.log('videodemo: ', videodemo);

function WideDropdown(props) {
  const videoItem = {};
  const {className} = props
  return (
    <>
      <div className={`wideDropdown ${className}`}>
        <div className="innerDropdown">
          <div className="leftPanel videos">
            <a href="/video" className="title">
              探索视频
            </a>
            <ul className="discover" style={{ display: "inline-block" }}>
              <li className="alpha">
                <a href="/recommended">
                  <AndroidOutlined />
                  推荐视频{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=ht">
                  <AndroidOutlined />
                  最热门{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=mv">
                  <AndroidOutlined />
                  最多次观看{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=tr">
                  <AndroidOutlined />
                  最高分{" "}
                </a>
              </li>
              <li>
                <a href="/video?p=homemade&amp;o=tr">
                  <AndroidOutlined />
                  热门自制{" "}
                </a>
              </li>
              <li>
                <a href="/explore">
                  <AndroidOutlined />
                  探索{" "}
                </a>
              </li>
              <li>
                <a href="/playlists">
                  <AndroidOutlined />
                  片单{" "}
                </a>
              </li>
              <li>
                <a href="/channels">
                  <AndroidOutlined />
                  频道{" "}
                </a>
              </li>
              <li>
                <a href="/video/random">
                  <AndroidOutlined />
                  随机{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=cm">
                  <AndroidOutlined />
                  最新{" "}
                </a>
              </li>
              <li className="omega">
                <a rel="nofollow" href="/contest_hub/viewers_choice">
                  <AndroidOutlined />
                  观众之选{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="headerSubMenu">
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">最热门</span>
                <RightOutlined className="allow" />
              </Link>
              <HeadView videoItem={videoItem}></HeadView>
            </div>
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">最热门</span>
                <RightOutlined className="allow" />
              </Link>
              <HeadView videoItem={videoItem}></HeadView>
            </div>
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">最热门</span>
                <RightOutlined className="allow" />
              </Link>
              <HeadView videoItem={videoItem}></HeadView>
            </div>
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">最热门</span>
                <RightOutlined className="allow" />
              </Link>
              <HeadView videoItem={videoItem}></HeadView>
            </div>
            <div className="innerHeaderSubMenu ">
                <span className="tag-title">热门搜索</span>
              <div className="tag-wrap">
                <Link className="tag" href={"/"}>
                  标签1
                </Link>
                <Link className="tag" href={"/"}>
                  标标签标签11签1
                </Link>
                <Link className="tag" href={"/"}>
                  标标签1签1
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WideDropdown;

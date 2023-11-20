"use client";

import React, { useState } from "react";
import {
  UnorderedListOutlined,
  SearchOutlined,
  PlaySquareOutlined,
  CameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, AutoComplete } from "antd";
import logo from "@/assets/logo.png";
import styles from "./index.module.scss";

export default function Header() {
  // AutoComplete相关
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getPanelValue = (searchText) => {
    setSearchText(searchText);
    if (!searchText) {
      setShowHot(true);
      return [];
    } else {
      setShowHot(false);
      return [
        mockVal(searchText),
        mockVal(searchText, 2),
        mockVal(searchText, 3),
      ];
    }
  };
  const blurHandle = () => {
    setShowHot(false);
  };

  //热门推荐
  const [showHot, setShowHot] = useState(false);
  const hotList = ["颜值", "漫展"];
  const handleFouce = () => {
    if (!searchText) {
      setShowHot(true);
    }
  };

  return (
    <div className={styles.headerwrap}>
      <div className="networkBarWrapper">
        <div id="js-networkBar" className="networkBar">
          <ul className="networkListContent">
            <li className="alpha">
              <a
                className="networkTab"
                href="https://landing.spicevids.com/?ats=eyJhIjo4NDcyMSwiYyI6NTk5NTYyODgsIm4iOjEyMCwicyI6NjgwLCJlIjoxMDQzMiwicCI6MzkzfQ=="
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Spicevids
              </a>
            </li>
            <li>
              <a
                className="networkTab"
                href="https://www.uviu.com/?ata=phnavbar&amp;atc=navbar&amp;utm_source=pornhub&amp;utm_medium=network-bar&amp;utm_campaign=pornhub-networkbar"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                UViU
              </a>
            </li>
            <li>
              <a
                className="networkTab"
                href="https://www.pornhub.com/sex/?utm_source=pornhub&amp;utm_medium=network-bar&amp;utm_campaign=pornhub-networkbar"
              >
                Sexual wellness
              </a>
            </li>
            <li>
              <a
                className="networkTab"
                href="https://www.pornhub.com/insights/?utm_source=pornhub&amp;utm_medium=network-bar&amp;utm_campaign=pornhub-networkbar"
              >
                Insights
              </a>
            </li>
            <li className="dropdownTrigger wide sitesDropdown">
              <span className="networkTab">sites</span>
            </li>
            <li>
              <a
                className="networkTab"
                href="https://www.pornhubapparel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                className="networkTab"
                href="https://help.pornhub.com/hc/en-us/categories/4419836212499"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trust &amp; Safety
              </a>
            </li>
            {/* <li className="dropdownTrigger languageDropdown omega">
              <span className="networkTab">cn</span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="search-wrap">
        <div className="header-in">
          <div className="left">
            <div className="desktopNavigation">
              <UnorderedListOutlined className="hamburgerIcon" />
            </div>
            <img className="logo" src={logo.src} alt="logo" />
          </div>
          <div className="mid-wrap">
            <div className="mid">
              <SearchOutlined className="search" />
              <div className="input-wrap">
                <AutoComplete
                  style={{ width: "100%", height: "40px" }}
                  allowClear
                  options={options}
                  placeholder="搜索内容"
                  onSearch={(text) => setOptions(getPanelValue(text))}
                  onSelect={globalThis.console.log}
                  bordered={false}
                  onFocus={handleFouce}
                  onBlur={blurHandle}
                  popupClassName="search-results"
                />
                <div className={showHot ? "hot show" : "hot"}>
                  <div className="title">热门搜索</div>
                  <div className="item">漫展</div>
                </div>
              </div>
            </div>
            <PlaySquareOutlined className="play-square" />
            <CameraOutlined className="camera" />
          </div>

          <div className="right">
            <UserOutlined className="user" />
          </div>
        </div>
      </div>
    </div>
  );
}

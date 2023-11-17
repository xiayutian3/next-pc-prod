"use client";

import React from "react";
import {
  UnorderedListOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import logo from "@/assets/logo.png";
import "./index.scss";

export default function Header() {
  return (
    <div className="header-wrap">
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

      <div className="header-in">
          <div className="left">
            <div className="desktopNavigation">
              <UnorderedListOutlined className="hamburgerIcon" />
            </div>
            <img className="logo" src={logo.src} alt="logo"/>
          </div>
          <div className="mid">
             <Input size="large" placeholder="搜索内容" bordered={false} prefix={<SearchOutlined />} />
          </div>
          <div className="right"></div>
      </div>
    </div>
  );
}

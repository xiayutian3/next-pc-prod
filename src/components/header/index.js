"use client";

import React, { useEffect, useState } from "react";
import {
  UnorderedListOutlined,
  SearchOutlined,
  PlaySquareOutlined,
  CameraOutlined,
  UserOutlined,
  StrikethroughOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { Input, AutoComplete, Dropdown } from "antd";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import WideDropdown from "./_components/wideDropdown";
import TypeWIdeDropdown from "./_components/typeWIdeDropdown";
import StarWideDropdown from "./_components/starWideDropdown";
import logo from "@/assets/logo.png";
import styles from "./index.module.scss";

export default function Header() {
  // 获取当前路径名
  const pathname = usePathname()
  const [localPath, setLocalPath] = useState(('/'))
  const getPathname = () =>{
    setLocalPath(pathname)
  }
  useEffect(()=>{
    getPathname()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


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
  const [hotList, setHotList] = useState(["颜值", "漫展"]);
  const handleFouce = () => {
    if (!searchText) {
      setShowHot(true);
    }
  };

  //个人中心
  const items = [
    {
      label: "登录",
      key: "0",
    },
    {
      label: "注册",
      key: "1",
    },
  ];

  // 菜单nav
  // <CaretDownOutlined />
  // <CaretUpOutlined />
  const [navItems, setNavItems] = useState([
    {
      label: "首页",
      key: "0",
      icon: <StrikethroughOutlined className="label-icon" />,
      unfold: false,
      children: [
        {
          label: "首页123",
          key: "0-1",
          icon: <StrikethroughOutlined className="label-icon" />,
        },
      ],
    },
    {
      label: "分类",
      key: "1",
      icon: <StrikethroughOutlined className="label-icon" />,
    },
  ]);
  // 控制展开收起
  // const [unfoldFlag, setUnfoldFlag] = useState(false)
  const handleItem = () => {};
  const handleChildItem = () => {};
  const handleIcon = (item, e) => {
    // 阻止合成事件间的冒泡
    e.stopPropagation();
    const newArr = navItems.map((navItem) => {
      if (item.key === navItem.key) {
        navItem.unfold = !navItem.unfold;
      }
      return navItem;
    });
    setNavItems(newArr);
  };

  const handleUnfoldIcons = (item) => {
    if (item.children) {
      if (item.unfold) {
        return <CaretUpOutlined />;
      } else {
        return <CaretDownOutlined />;
      }
    }
  };

  const dropdownRender = () => {
    return (
      <div className="dyrender-wrap">
        {navItems.map((item) => {
          return (
            <div className="item-wrap" key={item.key}>
              <div className="item" onClick={handleItem}>
                <div className="label">
                  {item.icon}
                  <div className="name">{item.label}</div>
                </div>
                <div className="icon" onClick={(e) => handleIcon(item, e)}>
                  {handleUnfoldIcons(item)}
                </div>
              </div>
              {item.children &&
                item.children.map((childItem) => {
                  return (
                    <div
                      className={item.unfold ? "child showlist" : "child"}
                      key={childItem.key}
                    >
                      <div className="item" onClick={handleChildItem}>
                        <div className="label">
                          {childItem.icon}
                          <div className="name">{childItem.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    );
  };

  //菜单下边按钮

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
              <Dropdown
                overlayClassName="nav-dropdown"
                trigger={["click"]}
                dropdownRender={dropdownRender}
              >
                <UnorderedListOutlined className="hamburgerIcon" />
              </Dropdown>
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
                  {hotList.map((item, index) => (
                    <div key={index} className="item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <PlaySquareOutlined className="play-square" />
            <CameraOutlined className="camera" />
          </div>

          <div className="right">
            <Dropdown
              overlayClassName="user-dropdown"
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <UserOutlined className="user" />
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="headerMenuContainer">
        <div className="headerMainMenuInner">
          <div className="headerCampaignDiv">
            <ul className="headerMainMenu">
              <li className="menuItem">
                <Link className="link" href="/">
                  首页
                <span className={localPath=="/"?"activeLine":"activeLine disShow"} ></span>
                </Link>
              </li>
              <li className="menuItem menuItem1">
                <Link className="link" href="/">
                  视频
                  <CaretDownOutlined className="icon"/>
                </Link>
                <WideDropdown className="menuItemInner" />
              </li>
              <li className="menuItem menuItem1">
                <Link className="link" href="/">
                  分类
                  <CaretDownOutlined className="icon"/>
                </Link>
                <TypeWIdeDropdown className="menuItemInner"></TypeWIdeDropdown>
              </li>
              <li className="menuItem menuItem1">
                <Link className="link" href="/">
                  明星
                  <CaretDownOutlined className="icon"/>
                </Link>
                <StarWideDropdown className="menuItemInner"></StarWideDropdown>
              </li>
              <li className="menuItem">
                <Link className="link" href="/">
                  社区
                  <CaretDownOutlined className="icon"/>
                </Link>
              </li>
              <li className="menuItem">
                <Link className="link" href="/">
                  照片及动图
                  <CaretDownOutlined className="icon"/>
                </Link>
              </li>
              <li className="menuItem nohover">
                {/* <Link className="link" href="/">
                  照片及动图
                </Link> */}
              </li>
              <li className="menuItem nohover">
                {/* <Link className="link" href="/">
                  照片及动图
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

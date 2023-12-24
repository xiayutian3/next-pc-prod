"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  PlusOutlined,
  DislikeOutlined,
  LikeOutlined,
  HeartOutlined,
  FlagOutlined,
  FundViewOutlined,
  WifiOutlined,
  UserAddOutlined,
  CloseOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Space, Tooltip, Divider, Select } from "antd";
import { videoList } from "@/mock/index";
import GuessVideo from "../guessVideo";
import HotVideo from "../hotVideo";
import Player from "@/components/player";
import Link from "next/link";
import logo from "@/assets/logo.png";

import "./index.scss";

function ContentComp() {
  //标签添加列表
  const [tags, setTags] = useState(false);
  const closeTags = () => {
    setTags(!tags);
  };

  //视频部分分割线加载更多
  const [addMoreVideo, setAddMoreVideo] = useState(10);
  const addMoreVideoHandle = () => {
    if (addMoreVideo === 10) {
      return setAddMoreVideo(20);
    }
    setAddMoreVideo(10);
  };

  //右侧加载更多按钮
  const [addNumber, setAddNumber] = useState(5);
  const addMore = () => {
    let num;
    if (addNumber === 5) {
      num = 10;
    } else {
      num = 5;
    }
    setAddNumber(num);
  };

  //评论选择切换
  const commentHandleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="play-wrap">
      <div className="part1">
        <div className="part1-video">
          <Player></Player>
        </div>
        <div className="title">titletitletitle</div>
        <div className="detail">
          <div className="det-left">582K 次观看 | 78% | 2年前</div>
          <div className="det-right">
            <div className="action action1">
              <Tooltip
                getPopupContainer={(el) => el.parentNode}
                color="#2f2f2f"
                title="顶一下"
              >
                <Space>
                  <LikeOutlined />
                  <span className="num">2k</span>
                </Space>
              </Tooltip>
            </div>
            <div className="action action2">
              <Tooltip
                getPopupContainer={(el) => el.parentNode}
                color="#2f2f2f"
                title="踩一下"
              >
                <Space>
                  <DislikeOutlined />
                  <span className="num">123</span>
                </Space>
              </Tooltip>
            </div>
            <div className="action action3">
              <Tooltip
                getPopupContainer={(el) => el.parentNode}
                color="#2f2f2f"
                title="赞一下"
              >
                <Space>
                  <HeartOutlined className="like" />
                  <span className="num">123</span>
                </Space>
              </Tooltip>
            </div>
            {/* <div className="action4">添加至</div> */}
            <div className="action action5">
              <Tooltip
                getPopupContainer={(el) => el.parentNode}
                color="#2f2f2f"
                title="举报此评论"
              >
                <Space>
                  <FlagOutlined />
                  <span className="num">举报</span>
                </Space>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="auth-wrap">
          <div className="auth-left">
            <img src="" className="img" alt="" />
            <div className="msg">
              <div className="name">
                <Link className="wrap-link" href="/">
                  <Space>
                    kusoko <FundViewOutlined className="icon-l" />
                  </Space>
                  <div className="info">
                    <div className="bg">
                      <img src={logo.src} alt="" />
                    </div>
                    <div className="user">
                      <div className="avtar">
                        <img src={logo.src} alt="" />
                      </div>
                      <div className="user-msg">
                        <div className="user-name">
                          dhdj dfd
                          <FundViewOutlined className="user-icon" />
                        </div>
                        <div className="detail-wrap">
                          <div className="detail-1">
                            <div className="detail-num">40.2K</div>
                            <div className="detail-msg">Subs</div>
                          </div>
                          <div className="detail-1">
                            <div className="detail-num">53</div>
                            <div className="detail-msg">视频</div>
                          </div>
                          <div className="detail-1">
                            <div className="detail-num">5.4M</div>
                            <div className="detail-msg">次观看</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btns">
                      <div className="btn">
                        <Space>
                          <UserAddOutlined className="icon" /> 添加好友
                        </Space>
                      </div>
                      <div className="btn">
                        <Space>
                          <WifiOutlined className="icon" /> 订阅
                        </Space>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="play-msg">137 视频 | 25.7K 订阅者</div>
            </div>
          </div>
          <div className="auth-right">
            <WifiOutlined className="icon" />
            订阅
          </div>
        </div>
        <div className="type-wrap">
          <div className="type-title">分类</div>
          <div className="type-list">
            <Link className="type" href={"/"}>
              分类1
            </Link>
            <div className="suggest" onClick={closeTags}>
              <Space>
                <div className="add">
                  <PlusOutlined />
                </div>
                建议
              </Space>
            </div>
          </div>
          <div className={tags ? "tag-wrap" : "tag-wrap hide"}>
            <div className="tag-close" onClick={closeTags}>
              <CloseOutlined />
            </div>
            <div className="tag-title">给分类投票</div>
            <div className="tags">
              <div className="tag">
                <Space>
                  <ArrowUpOutlined className="icon-g act-g" />
                  <ArrowDownOutlined className=".icon-b act-b" />
                  素颜
                </Space>
              </div>
              <div className="tag">
                <Space>
                  <ArrowUpOutlined className="icon-g " />
                  <ArrowDownOutlined className="icon-b " />
                  素颜
                </Space>
              </div>
            </div>
            <div className="tip">You need to enter a category</div>
            <div className="inp">
              <input placeholder="推荐一个新分类" />
            </div>
            <div className="btns">
              <div className="btn">提交</div>
            </div>
          </div>
        </div>
        <div className="guess">
          {videoList.map((item, index) => {
            return (
              <GuessVideo key={index + "guess"} videoItem={item}></GuessVideo>
            );
          })}
        </div>
        <Divider className="line" onClick={addMoreVideoHandle}>
          {addMoreVideo === 10 ? "显示更多" : "查看更少"}
        </Divider>
        <div className="comments">
          <div className="top-wrap">
            <div className="title-wrap">
              <div className="title">所有评论 (14)</div>
              <div className="tip">
                <Link className="link" href={"/login"}>
                  登录
                </Link>
                或
                <Link className="link" href={"/register"}>
                  注册
                </Link>
                马上射条评论!
              </div>
            </div>
            <div className="select-wrap">
              <Select
                defaultValue="lucy"
                getPopupContainer={(el) => el.parentNode}
                style={{ width: 180 }}
                onChange={commentHandleChange}
                options={[
                  { value: "hot", label: "热门评论" },
                  { value: "new", label: "最新评论" },
                ]}
              />
            </div>
          </div>
          <div className="comment-wrap">
            <div className="comment">
              <div className="top">
                <Space>
                  <Link href={"/"}>
                    <img className="img" src={logo.src} alt="" />
                  </Link>
                  <Link className="name" href={"/"}>
                    Briaa42
                  </Link>
                  <span className="time">2年前</span>
                </Space>
                <div className="comment-info">
                  <div className="bg">
                    <img src={logo.src} alt="" />
                  </div>
                  <div className="user">
                    <div className="avtar">
                      <img src={logo.src} alt="" />
                    </div>
                    <div className="user-msg">
                      <div className="user-name">
                        dhdj dfd
                        <FundViewOutlined className="user-icon" />
                      </div>
                      <div className="detail-wrap">
                        <div className="detail-1">
                          <div className="detail-num">40.2K</div>
                          <div className="detail-msg">Subs</div>
                        </div>
                        <div className="detail-1">
                          <div className="detail-num">53</div>
                          <div className="detail-msg">视频</div>
                        </div>
                        <div className="detail-1">
                          <div className="detail-num">5.4M</div>
                          <div className="detail-msg">次观看</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btns">
                    <div className="btn">
                      <Space>
                        <UserAddOutlined className="icon" /> 添加好友
                      </Space>
                    </div>
                    <div className="btn">
                      <Space>
                        <WifiOutlined className="icon" /> 订阅
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mid">write down</div>
              <div className="action">
                <Space>
                  <div>
                    <LikeOutlined className="icon" /> 10
                  </div>
                  <div>
                    <DislikeOutlined className="icon" /> 10
                  </div>
                  <div className="reply">· 回复</div>
                </Space>
              </div>
            </div>
            <div className="comment next-comment">
              <div className="top">
                <Space>
                  <Link href={"/"}>
                    <img className="img" src={logo.src} alt="" />
                  </Link>
                  <Link className="name" href={"/"}>
                    Briaa42
                  </Link>
                  <span className="time">2年前</span>
                </Space>
                <div className="comment-info">
                  <div className="bg">
                    <img src={logo.src} alt="" />
                  </div>
                  <div className="user">
                    <div className="avtar">
                      <img src={logo.src} alt="" />
                    </div>
                    <div className="user-msg">
                      <div className="user-name">
                        dhdj dfd
                        <FundViewOutlined className="user-icon" />
                      </div>
                      <div className="detail-wrap">
                        <div className="detail-1">
                          <div className="detail-num">40.2K</div>
                          <div className="detail-msg">Subs</div>
                        </div>
                        <div className="detail-1">
                          <div className="detail-num">53</div>
                          <div className="detail-msg">视频</div>
                        </div>
                        <div className="detail-1">
                          <div className="detail-num">5.4M</div>
                          <div className="detail-msg">次观看</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btns">
                    <div className="btn">
                      <Space>
                        <UserAddOutlined className="icon" /> 添加好友
                      </Space>
                    </div>
                    <div className="btn">
                      <Space>
                        <WifiOutlined className="icon" /> 订阅
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mid">write down</div>
              <div className="action">
                <Space>
                  <div>
                    <Tooltip
                      getPopupContainer={(el) => el.parentNode}
                      color="#2f2f2f"
                      title="顶一下"
                    >
                      <span>
                        <LikeOutlined className="icon" /> 10
                      </span>
                    </Tooltip>
                  </div>
                  <div>
                    <Tooltip
                      getPopupContainer={(el) => el.parentNode}
                      color="#2f2f2f"
                      title="踩一下"
                    >
                      <DislikeOutlined className="icon" /> 10
                    </Tooltip>
                    <span></span>
                  </div>
                  <div className="reply">· 回复</div>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="hot-title">热推</div>
        {videoList.slice(0, addNumber).map((item, index) => {
          return (
            <HotVideo key={index + "hotvideo"} videoItem={item}></HotVideo>
          );
        })}
        <div className="add" onClick={addMore}>
          {addNumber === 5 ? "加载更多" : "显示更少"}
        </div>
      </div>
    </div>
  );
}

export default ContentComp;

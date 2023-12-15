"use client";

import React, { useRef, useEffect } from "react";
import {
  PlusOutlined,
  DislikeOutlined,
  LikeOutlined,
  HeartOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Space, Tooltip } from "antd";
import { videoList } from "@/mock/index";
import GuessVideo from "../guessVideo";
import Player from "@/components/player";

import "./index.scss";

function ContentComp() {
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
              <div className="name">kusoko</div>
              <div className="play-msg">137 视频 | 25.7K 订阅者</div>
            </div>
          </div>
          <div className="auth-right">订阅</div>
        </div>
        <div className="types">
          <div className="type">分类1</div>
          <div className="type add">
            <PlusOutlined />
            建议
          </div>
        </div>
        <div className="guess">
          {videoList.map((item, index) => {
            return (
              <GuessVideo key={index + "guess"} videoItem={item}></GuessVideo>
            );
          })}
        </div>
        <div className="comments">
          <div className="title">所有评论 (14)</div>
          <div className="comment-wrap">
            <div className="comment">
              <div className="top">
                <img className="img" src="" alt="" />
              </div>
              <div className="mid"></div>
              <div className="action"> 回复</div>
            </div>
          </div>
        </div>
      </div>
      <div className="part2"></div>
    </div>
  );
}

export default ContentComp;

"use client";

import React from "react";
import {
  PlusOutlined,
} from '@ant-design/icons';
import {videoList} from "@/mock/index";
import GuessVideo from "../guessVideo";

import "./index.scss";

function ContentComp() {
  return (
    <div className="play-wrap">
      <div className="part1">
        <div className="play-wrap">hello</div>
        <div className="title">titletitletitle</div>
        <div className="detail">
          <div className="det-left">582K 次观看 | 78% |2年前</div>
          <div className="det-right">
            <div className="action1">2k</div>
            <div className="action2">123</div>
            <div className="action3">123</div>
            {/* <div className="action4">添加至</div> */}
            <div className="action5">举报</div>
          </div>
        </div>
        <div className="auth-wrap">
          <div className="auth-left">
            <img src="" className="" alt="" />
            <div className="msg">
              <div className="name">kusoko</div>
              <div className="play-msg">
              137 视频 | 25.7K 订阅者
              </div>
            </div>
          </div>
          <div className="auth-right">
            订阅
          </div>
        </div>
        <div className="types">
          <div className="type">分类1</div>
          <div className="type add"><PlusOutlined />建议</div>
        </div>
        <div className="guess">
          {
            videoList.map((item,index)=>{
              return (
                <GuessVideo key={index+"guess"} videoItem={item}></GuessVideo>
              )
            })
          }
        </div>
        <div className="comments">
          <div className="title"></div>
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

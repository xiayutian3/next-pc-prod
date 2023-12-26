"use client";

import React, { useEffect, useState } from "react";
import { Input, Modal, Checkbox } from "antd";
import logo from "@/assets/logo.png";

import "./index.scss";
import Link from "next/link";

function LoginComp(props) {
  const handleOk = () => {};
  const handleCancel = () => {};

  // 协议同意
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  });

  return (
    <Modal
      wrapClassName="login-comp"
      centered
      footer={null}
      width="420px"
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <img className="logo" src={logo.src} alt="" />
      <div className="title-wrap">
        <div className="top">Member Sign in</div>
        <div className="down">Access your Pornhub account</div>
      </div>
      <div className="login">
        <Input className="account" placeholder="用户名（大于6个字符）" />
        <br />
        <Input className="pws" placeholder="密码（大于6个字符）" />
        <br />
        <div className="remember">
          <Checkbox onChange={onChange}>
            <span className="top">在这台电脑上记住我</span>
            <br />
            <span className="down">(不推荐在公共或者共享的电脑上播放)</span>
          </Checkbox>
        </div>
        <div className="btn">登录</div>
        <div className="tips">
          <div className="tip1">
            Don&rsquo;t have an account yet?
            <Link className="link" href={"/"}>
              注册
            </Link>
            here
          </div>
          <div className="tip2">
            <Link className="link" href={"/"}>
              忘了用户名和密码？
            </Link>
            <Link className="link" href={"/"}>
              重新发送确认邮件
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LoginComp;

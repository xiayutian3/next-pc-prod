"use client";

import React,{useEffect,useState} from "react";
import { Input, Modal } from "antd";

import "./index.scss"

function LoginComp(props) {

  const handleOk = () => {
  };

  const handleCancel = () => {
  };

  const [show, setShow] = useState(false)
  useEffect(()=>{
    setShow(true)
  })

  return (
    <div>
      <Modal
        wrapClassName="login-comp"
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default LoginComp;

"use client";

import React, { useEffect } from "react";
import { useStore } from "@/store/index";
import { observer } from "mobx-react-lite";
import {useGetLangHook} from "@/hook/langHook"

function TestStore() {
  const store = useStore();

  const  [localLang,setlangFn] = useGetLangHook()
  console.log('localLang: ', localLang);


  // 获取user Store里面的信息
  console.log(store.user.userInfo);
  // 设置user Store里面的信息
  useEffect(() => {
    store.user.setUserInfo({
      userId: "TestStore",
      nickname: "TestStore",
    });

  }, []);

  //点击事件
  const handleClick = () => {
    store.user.setUserInfo({
      userId: "改变了",
      nickname: "改变了",
    });
  };

  const changeLang = ()=>{
     setlangFn('en')
  }

  return (
    <div>
      <h1>TestStore</h1>
      <button onClick={handleClick}>改变nickname</button>
      nickname: {store.user.userInfo.nickname}
      <button onClick={changeLang}>切换英文</button>
      <div>国际化：{localLang?.products?.cart}</div>
    </div>
  );
}

export default observer(TestStore);

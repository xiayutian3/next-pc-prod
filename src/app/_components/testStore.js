"use client";

import React, { useEffect,useState } from "react";
import { useStore } from "@/store/index";
import { observer } from "mobx-react-lite";
import { getLang } from "@/lang/getLang";

function TestStore() {
  const store = useStore();
  const [localLang, setLocalLang] = useState({})

  const getlangFn = async () => {
    // 获取
    // const lang =  await getLang()

    //设置语言
    const lang = await getLang("en");
    store.setLangType("en");
    console.log("lang: ", lang);
    setLocalLang(lang)
  };

  // 获取user Store里面的信息
  console.log(store.user.userInfo);
  // 设置user Store里面的信息
  useEffect(() => {
    store.user.setUserInfo({
      userId: "TestStore",
      nickname: "TestStore",
    });
    getlangFn();
  }, []);

  //点击事件
  const handleClick = () => {
    store.user.setUserInfo({
      userId: "改变了",
      nickname: "改变了",
    });
  };

  return (
    <div>
      <h1>TestStore</h1>
      <button onClick={handleClick}>改变nickname</button>
      nickname: {store.user.userInfo.nickname}
      <div>国际化：{localLang?.products?.cart}</div>
    </div>
  );
}

export default observer(TestStore);

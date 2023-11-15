//获取或这是语言变量hook
import { useState, useEffect } from 'react';
import { getLang } from "@/lang/getLang";
import { useStore } from "@/store/index";

const useGetLangHook = (langZh) =>{
  const store = useStore();
  const [localLang, setLocalLang] = useState({})

  const setlangFn = async (langType=langZh) => {
    if(langType){
    //设置语言
    const lang = await getLang(langType);
    store.setLangType(langType);
    // console.log("lang: ", lang);
    setLocalLang(lang)
    }else{
    // 获取
    const lang =  await getLang()
    setLocalLang(lang)
    }
  };

  useEffect(()=>{
    setlangFn();
  },[])

  return [localLang,setlangFn]
}
export {useGetLangHook}
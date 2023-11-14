import userStore from "./userStore";

export default function createStore(initialValue) {
  return () => {
    return {
      langType:'zh-CN',
      setLangType(langType){
        this.langType = langType
      },
      user: { ...userStore(), ...initialValue?.user }, // 这里的...initialValue会对userStore的一些默认key进行覆盖更新
    };
  };
}

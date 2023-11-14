
const userStore = () => {
  return {
    userInfo: {},
    setUserInfo: function (value) {
      this.userInfo = value;
    },
  };
};
export default userStore;

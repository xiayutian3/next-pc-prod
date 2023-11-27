import React from "react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import "./typeWIdeDropdown.scss";

function typeWIdeDropdown(props) {
  const {className} = props

  return (
    <>
      <div className={`type-dropdown ${className}`}>
        <div className="innerDropdown">
          <div className="leftPanel videos">
            <span className="tag-title">分类</span>
              <div className="tag-wrap">
                <Link className="tag" href={"/"}>
                  标签1
                </Link>
                <Link className="tag" href={"/"}>
                  标标签标签11签1
                </Link>
                <Link className="tag" href={"/"}>
                  标标签1签1
                </Link>
              </div>
          </div>

          <div className="headerSubMenu">
            <div className="innerHeaderSubMenu innerWideMenu">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">最热门</span>
              </Link>
              <ul className="catHeaderSubMenu">
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
                <li className="tone">
                  <Link className="tone-link" href={"/"}>
                    <img className="tone-img" src={logo.src} />
                    <span className="tone-info">
                      <strong>类型1</strong>
                      <var>37,425 </var> 视频 
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="innerHeaderSubMenu ">
              <span className="tag-title">热门搜索</span>
              <div className="tag-wrap">
                <Link className="tag" href={"/"}>
                  标签1
                </Link>
                <Link className="tag" href={"/"}>
                  标标签标签11签1
                </Link>
                <Link className="tag" href={"/"}>
                  标标签1签1
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default typeWIdeDropdown;

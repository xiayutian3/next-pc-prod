import React from "react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import "./starWideDropdown.scss";

function StarWideDropdown(props) {
  const { className } = props;

  return (
    <>
      <div className={`start-dropdown ${className}`}>
        <div className="innerDropdown">
          <div className="leftPanel videos">
            <a href="/video" className="title">
              明星探索视频
            </a>
            <ul className="discover" style={{ display: "inline-block" }}>
              <li className="alpha">
                <a href="/recommended">已认证 </a>
              </li>
              <li>
                <a href="/video?o=ht">最热门 </a>
              </li>
              <li>
                <a href="/video?o=mv">最多次观看 </a>
              </li>
              <li>
                <a href="/video?o=tr">最高分 </a>
              </li>
            </ul>
          </div>

          <div className="headerSubMenu">
            <div className="part1">
              <div className="content">
                <Link className="title" href={"/"}>
                  最热门
                </Link>
                <div className="list">
                  <div className="item">
                    <Link className="link" href={"/"}>
                      <img src={logo.src} alt="" />
                      <span>12345</span>
                    </Link>
                    <div className="msg">
                      <div className="name">hello kity</div>
                      <div className="opus-wrap">
                        <div className="opus">30 视频</div>
                        <div className="views">138M 次观看</div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <Link className="link" href={"/"}>
                      <img src={logo.src} alt="" />
                      <span>12345</span>
                    </Link>
                    <div className="msg">
                      <Link className="name" href={"/"}>
                        hello kity
                      </Link>
                      <div className="opus-wrap">
                        <div className="opus">30 视频</div>
                        <div className="views">138M 次观看</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <Link className="title" href={"/"}>
                  最热门
                </Link>
                <div className="list">
                  <div className="item">
                    <Link className="link" href={"/"}>
                      <img src={logo.src} alt="" />
                      <span>12345</span>
                    </Link>
                    <div className="msg">
                      <div className="name">hello kity</div>
                      <div className="opus-wrap">
                        <div className="opus">30 视频</div>
                        <div className="views">138M 次观看</div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <Link className="link" href={"/"}>
                      <img src={logo.src} alt="" />
                      <span>12345</span>
                    </Link>
                    <div className="msg">
                      <Link className="name" href={"/"}>
                        hello kity
                      </Link>
                      <div className="opus-wrap">
                        <div className="opus">30 视频</div>
                        <div className="views">138M 次观看</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <Link className="title" href={"/"}>
                  最热门
                </Link>
                <div className="list">
                  <div className="item">
                    <Link className="link" href={"/"}>
                      <img src={logo.src} alt="" />
                      <span>12345</span>
                    </Link>
                    <div className="msg">
                      <div className="name">hello kity</div>
                      <div className="opus-wrap">
                        <div className="opus">30 视频</div>
                        <div className="views">138M 次观看</div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <Link className="link" href={"/"}>
                      <img src={logo.src} alt="" />
                      <span>12345</span>
                    </Link>
                    <div className="msg">
                      <Link className="name" href={"/"}>
                        hello kity
                      </Link>
                      <div className="opus-wrap">
                        <div className="opus">30 视频</div>
                        <div className="views">138M 次观看</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="part2">
              <div className="title">
                热门筛选条件
              </div>
              <div className="list">
                <div className="tag-wrap">
                  <Link href={"/"} className="tag">标签1</Link>
                </div>
                <div className="tag-wrap">
                  <Link href={"/"} className="tag">标标签1签标签11</Link>
                </div>
                <div className="tag-wrap">
                  <Link href={"/"} className="tag">标签1标签1</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarWideDropdown;

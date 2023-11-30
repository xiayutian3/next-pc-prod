import React from "react";
import { AndroidOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "./pictureWideDropdown.scss";

function PictureWideDropdown(props) {
  const { className } = props;

  //视频播放问题
  const ref = [];
  const handleMouseOver = () => {
    console.log("ref[0]", ref[0]);
    // if(ref[0]) {
    //   ref[0].currentTime = 0;
    //   ref[0].muted = true;
    //   ref[0].pause();
    // }

    // ref[0].play();

    if (ref[0]) {
      ref[0].pause();
      ref[0].currentTime = 0;
      ref[0].play();
    }
  };
  const handleMouseOut = () => {
    ref[0].pause();
    ref[0].load();
  };

  return (
    <>
      <div className={`pictureDropdown ${className}`}>
        <div className="innerDropdown">
          <div className="leftPanel videos">
            <a href="/video" className="title">
              探索视频
            </a>
            <ul className="discover" style={{ display: "inline-block" }}>
              <li className="alpha">
                <a href="/recommended">
                  <AndroidOutlined />
                  推荐视频{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=ht">
                  <AndroidOutlined />
                  最热门{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=mv">
                  <AndroidOutlined />
                  最多次观看{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=tr">
                  <AndroidOutlined />
                  最高分{" "}
                </a>
              </li>
              <li>
                <a href="/video?p=homemade&amp;o=tr">
                  <AndroidOutlined />
                  热门自制{" "}
                </a>
              </li>
              <li>
                <a href="/explore">
                  <AndroidOutlined />
                  探索{" "}
                </a>
              </li>
              <li>
                <a href="/playlists">
                  <AndroidOutlined />
                  片单{" "}
                </a>
              </li>
              <li>
                <a href="/channels">
                  <AndroidOutlined />
                  频道{" "}
                </a>
              </li>
              <li>
                <a href="/video/random">
                  <AndroidOutlined />
                  随机{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=cm">
                  <AndroidOutlined />
                  最新{" "}
                </a>
              </li>
              <li className="omega">
                <a rel="nofollow" href="/contest_hub/viewers_choice">
                  <AndroidOutlined />
                  观众之选{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="headerSubMenu">
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">评价最好</span>
                <RightOutlined className="allow" />
              </Link>
              <div className="pic-list">
                <div className="item">
                  <Link href={"/"}>
                    <video
                      muted={true}
                      // autoPlay
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      className="video_class"
                      poster={logo.src}
                      ref={(el) => {
                        ref[0] = el;
                      }}
                    >
                      <source src="/1.mp4" type="video/mp4"></source>
                      您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
                    </video>
                    <div className="name">huli oj</div>
                  </Link>
                </div>
                <div className="item">
                  <Link href={"/"}>
                    <video
                      muted={true}
                      // autoPlay
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      className="video_class"
                      poster={logo.src}
                      ref={(el) => {
                        ref[0] = el;
                      }}
                    >
                      <source src="/1.mp4" type="video/mp4"></source>
                      您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
                    </video>
                    <div className="name">huli oj</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">浏览最多</span>
                <RightOutlined className="allow" />
              </Link>
              <div className="pic-list">
                <div className="item">
                  <Link href={"/"}>
                    <video
                      muted={true}
                      // autoPlay
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      className="video_class"
                      poster={logo.src}
                      ref={(el) => {
                        ref[0] = el;
                      }}
                    >
                      <source src="/1.mp4" type="video/mp4"></source>
                      您的浏览器暂不支持播放该视频，请升级至最新版浏览器。
                    </video>
                    <div className="name">huli oj</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">最热门</span>
                <RightOutlined className="allow" />
              </Link>
              <div className="pic-list">
                <div className="item">
                  <Link href={"/"}>
                    <img className="img" src={logo.src} alt=""/>
                    <span className="albumCover">
                        <div className="title-album">My ti  </div>
                        <p>30 照片</p>
                        <p className="album-photo-percentage">100%</p>
                    </span>
                  </Link>
                </div>
                <div className="item">
                  <Link href={"/"}>
                    <img className="img" src={logo.src} alt=""/>
                    <span className="albumCover">
                        <div className="title-album">My ti  </div>
                        <p>30 照片</p>
                        <p className="album-photo-percentage">100%</p>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="innerHeaderSubMenu ">
              <Link className="sub-link" href={"/hot"}>
                <span className="type">最热门</span>
                <RightOutlined className="allow" />
              </Link>
              <div className="pic-list">
                <div className="item">
                  <Link href={"/"}>
                    <img className="img" src={logo.src} alt=""/>
                    <span className="albumCover">
                        <div className="title-album">My ti  </div>
                        <p>30 照片</p>
                        <p className="album-photo-percentage">100%</p>
                    </span>
                  </Link>
                </div>
                <div className="item">
                  <Link href={"/"}>
                    <img className="img" src={logo.src} alt=""/>
                    <span className="albumCover">
                        <div className="title-album">My ti  </div>
                        <p>30 照片</p>
                        <p className="album-photo-percentage">100%</p>
                    </span>
                  </Link>
                </div>
              </div>
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

export default PictureWideDropdown;

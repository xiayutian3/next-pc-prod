import React from "react";
import {
  AndroidOutlined,
  RightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import "./communityWideDropdown.scss";

function CommunityWideDropdown(props) {
  const { className } = props;

  return (
    <>
      <div className={`community-dropdown ${className}`}>
        <div className="innerDropdown">
          <div className="leftPanel videos">
            <a href="/video" className="title">
              探索社区
            </a>
            <ul className="discover" style={{ display: "inline-block" }}>
              <li className="alpha">
                <a href="/recommended">
                  <AndroidOutlined />
                  在线成员{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=ht">
                  <AndroidOutlined />
                  会员搜索{" "}
                </a>
              </li>
              <li>
                <a href="/video?o=mv">
                  <AndroidOutlined />
                  成为会员{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="headerSubMenu">
            <div className="titles">
              <div className="contest">
                <span>竞赛</span>
              </div>
              <div className="popular">
                <span>热门</span>
              </div>
            </div>
            <div className="com-list">
              <div className="com-item">
                <div className="com-link-wrap">
                  <Link className="com-link" href={"/"}>
                    观众之选
                  </Link>{" "}
                  <span>
                    {" "}
                    <RightOutlined />
                  </span>
                </div>

                <div className="com-content">
                  <ul className="communityContent communityContentList viewersChoiceInner ">
                    <li className="col-span-2 month alpha">November</li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">horny69rabbits</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sunn Guevara</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sweetie Fox</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li className="omega">
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">CorujaPreta</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="com-item">
                <div className="com-link-wrap">
                  <Link className="com-link" href={"/"}>
                    观众之选
                  </Link>{" "}
                  <span>
                    {" "}
                    <RightOutlined />
                  </span>
                </div>

                <div className="com-content">
                  <ul className="communityContent communityContentList viewersChoiceInner viewersChoiceInner1 ">
                    <li className="col-span-2 month alpha">November</li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">horny69rabbits</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sunn Guevara</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li className="col-span-2 month alpha">November</li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sweetie Fox</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li className="omega">
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">CorujaPreta</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="com-item">
                <div className="com-link-wrap">
                  <Link className="com-link" href={"/"}>
                    观众之选
                  </Link>{" "}
                  <span>
                    {" "}
                    <RightOutlined />
                  </span>
                </div>

                <div className="com-content">
                  <ul className="communityContent communityContentList viewersChoiceInner ">
                    <li className="col-span-2 month alpha"></li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">horny69rabbits</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sunn Guevara</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sweetie Fox</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li className="omega">
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">CorujaPreta</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="com-item">
                <div className="com-link-wrap">
                  <Link className="com-link" href={"/"}>
                    观众之选
                  </Link>{" "}
                  <span>
                    {" "}
                    <RightOutlined />
                  </span>
                </div>

                <div className="com-content">
                  <ul className="communityContent communityContentList viewersChoiceInner ">
                    <li className="col-span-2 month alpha"></li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">horny69rabbits</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sunn Guevara</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">Sweetie Fox</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                    <li className="omega">
                      <Link href="/" className="link-a">
                        <Image src={logo.src} width="74" height="74" alt="" />
                        <span className="link">CorujaPreta</span>
                        <CheckCircleOutlined className="check"/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityWideDropdown;

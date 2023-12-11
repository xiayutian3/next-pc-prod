"use client";
import React from "react";
import Link from "next/link";
import { CommentOutlined } from "@ant-design/icons";
import "./index.scss";

function FooterCopm() {
  const catalogList = [
    {
      title: "信息",
      list: [
        {
          name: "视觉障碍者",
          link: "/",
        },
      ],
    },
  ];
  return (
    <div className="footer-wrap">
      <div className="interpret">
        以前的 directory
        通常是一本簿子，上面會寫著工商單位的名稱、地址及聯絡資訊，讓需要相關服務的人能找到聯絡方式。在網路和社群媒體還不太發達時，directory
        是很重要的聯絡工具，但是，隨著現在的資料逐漸電子化之後，就越來越少看到實體了。我们一直不断努力增加更多的特色来保证您“性致盎然”。如果您有任何问题或建议，欢迎留言。
      </div>
      <div className="catalog">
        <div className="list">
          <div className="item-wrapper">
            <div className="item">
              <div className="title">信息</div>
              <div>
                <Link className="link" href="/">
                  新闻媒体
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  target="_blank"
                  href="https://english.cool/contents-directory-catalog/"
                >
                  新闻媒体
                </Link>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item">
              <div className="title">信息</div>
              <div>
                <Link className="link" href="/">
                  新闻媒体
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  target="_blank"
                  href="https://english.cool/contents-directory-catalog/"
                >
                  新闻媒体
                </Link>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item">
              <div className="title">信息</div>
              <div>
                <Link className="link" href="/">
                  新闻媒体
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  target="_blank"
                  href="https://english.cool/contents-directory-catalog/"
                >
                  新闻媒体
                </Link>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item">
              <div className="title">信息</div>
              <div>
                <Link className="link" href="/">
                  新闻媒体
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  target="_blank"
                  href="https://english.cool/contents-directory-catalog/"
                >
                  新闻媒体
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="record">
        <div className="left">
          <CommentOutlined className="icon" />
          <CommentOutlined className="icon" />
          <CommentOutlined className="icon" />
        </div>
        <div className="right">© mysite.com, 2023</div>
      </div>
    </div>
  );
}

export default FooterCopm;

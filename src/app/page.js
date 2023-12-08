import Image from "next/image";
import "./home.scss";
// import TestStore from "./_components/testStore";
import Header from "@/components/header";
import HomeVideo from "./_components/homeVideo";
import {videoList} from "@/mock/index";


export default function Home() {


  return (
    <>
      <Header />
      <div className="home-list">
        {
          videoList.map((item,idx) =>{
            return (
              <HomeVideo key={idx} videoItem={item}/>
            )
          })
        }
      </div>
    </>
  );
}

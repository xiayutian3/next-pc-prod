"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';
import { useRouter } from 'next/navigation'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./index.scss";

const MenuSlider = (props) => {
  let { navList } = props;
  const router = useRouter()

  const handleClickNav = (item) => {
    console.log('item: ', item);
    router.push(`/video?search=${item.search}`);
  }

  return (
    <Swiper
      className="menu-slider"
      modules={[Navigation]}
      navigation
      // spaceBetween={50}
      slidesPerView={"auto"}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {navList.map((navItem, index) => {
        return (
          <SwiperSlide key={"nav" + index}>
            <div 
              className="nav-item"
              onClick={() => handleClickNav(navItem)}
            >
              {navItem.name}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default MenuSlider;

import Image from "next/image";
import "./home.scss";
import TestStore from "./_components/testStore";

export default function Home() {

  return (
    <>
      <h1>hello</h1>
      <div className="in">
        <span>123456</span>
      </div>
      <TestStore />
    </>
  );
}

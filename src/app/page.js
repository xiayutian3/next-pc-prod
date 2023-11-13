import Image from 'next/image'
// import styles from './page.module.css'
import "./test.scss"
import lang from '@/lang/getLang'

export default function Home() {
console.log('lang',lang)
  return (
    <>
    <h1>hello</h1>
    <div className="in">
      <span>123456</span>
    </div>
    </>
    
  )
}

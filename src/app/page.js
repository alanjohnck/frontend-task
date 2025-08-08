"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import PopUp from "./components/PopUp";
export default function Home() {

  const [isPopUpVisible, setPopUpVisible] = useState(false);
  
  return (
    <div className={styles.container}>
      <button onClick={()=>{setPopUpVisible(!isPopUpVisible)}} className={styles.grayButton}>
         EXPORT CODE
      </button>
      {isPopUpVisible && <PopUp onClose={() => setPopUpVisible(false)} /> }
    </div>
  );
}

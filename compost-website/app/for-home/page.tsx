"use client";

import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import styles from '../../styles/Text.module.css';
import Image from "../../components/Image";
import { WasteCalculator } from "./components/WasteCalculator";
import { forhomeText } from '../../public/text';

export default function ForHomePage() {
    return (
        <div>
            <Header title="Composting for Home" imageSrc={'/tree.jpg'}/>
            <Navigator />

            <div className={styles.bodyContainer}>

                <div className={styles.title}>Getting Started with Home Composting</div>
                <div className={styles.text}>
                    {forhomeText.gettingStarted1}
                    <br /><br />
                    This page will guide you through ways to make an impact from home, and includes an interactive module at the end. 
                </div>

                <div className={styles.subtitle}>Pickup Services</div>
                <div className={styles.text}>
                    {forhomeText.pickup1}
                    <br /><br />
                    {forhomeText.pickup2}
                </div>
                <Image src={'/curbside.jpg'} description={'Image from wgbh.org, https://www.wgbh.org/news/local/2022-07-29/bostons-new-curbside-composting-program-is-here-the-demands-been-there-for-a-long-time'}/>

                <div className={styles.subtitle}>Open Air Composting</div>
                <div className={styles.text}>
                    {forhomeText.openAir1}
                    <br /><br />
                    {forhomeText.openAir2}
                    <a className={styles.link} href="https://www.epa.gov/recycle/composting-home#whatcom">here on epa.gov.</a>
                </div>
            </div> 
            <WasteCalculator />
        </div>
    );
}


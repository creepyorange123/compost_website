import CopyText from "./components/CopyText";
import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import { forcommunityText, letter } from '../../public/text';
import styles from '../../styles/Text.module.css';

export default function ForCommunityPage() {
    return (
        <div>
            <Header title="Composting for Community" imageSrc="/tree.jpg"/>
            <Navigator />

            <div className = {styles.bodyContainer}>
                <div className={styles.title}>What Can The Community Do?</div>
                <div className={styles.text}>
                    {forcommunityText.intro1}
                    <br /><br />
                    {forcommunityText.intro2}
                </div>

                <div className={styles.subtitle}>Example Activities</div>
                <div className={styles.text}>
                    <b>School garden compost system:</b> Schools can compost food scraps and yard waste directly on campus and use the finished compost to enrich soil in school gardens.
                    <br /><br />
                    <b>Community drop-off site:</b> Neighborhoods can set up a shared compost drop-off location where residents bring food scraps, making composting accessible even for those without space at home.
                    <br /><br />
                    <b>Municipal partnership bins:</b> Communities can work with local governments to install compost bins that are collected and processed through city-run or contracted composting programs.
                    <br /><br />
                    <b>Large-scale hot composting:</b> Organizations with higher waste volumes can use hot composting systems to break down organic waste more quickly while managing odor and pests effectively.
                    <br /><br /><br />
                    Below is a sample letter that you can use to advocate for starting a composting program at your school or in your community.
                </div>


                <CopyText text={letter} />

            </div>

        </div>
        
    );
}
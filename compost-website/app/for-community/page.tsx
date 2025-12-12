import CopyText from "./components/CopyText";
import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import { letter } from '../../public/text';
import styles from '../../styles/Text.module.css';

export default function ForCommunityPage() {
    const stupidText : string = "dhwudhodhwihdquhwhdoqdhodhodhwiodjqowdhwodhqwidh";
    
    return (
        <div>
            <Header title="Composting for Community" imageSrc="/tree.jpg"/>
            <Navigator />

            <div className = {styles.bodyContainer}>
                <div className={styles.title}>What can the community do?</div>
                <CopyText text={letter} />

            </div>

        </div>
        
    );
}
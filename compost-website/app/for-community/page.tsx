import CopyText from "./components/CopyText";
import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import { letter } from '../../public/text';
import styles from './styles/Community.module.css';

export default function ForCommunityPage() {
    const stupidText : string = "dhwudhodhwihdquhwhdoqdhodhodhwiodjqowdhwodhqwidh";
    
    return (
        <div>
            <Header title="Composting for Community" imageSrc="/tree.jpg"/>
            <Navigator />
            <div className = {styles.bodyContainer}>
                <CopyText text={letter} />
            </div>
        </div>
        
    );
}
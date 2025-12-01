
import TextContainer from "../../components/TextContainer";
import Header from "../../components/Header";
import Navigator from "../../components/Navigator";
import TreeImage from '../../public/tree.jpg';

export default function ForHomePage() {

    const dummyText: string = "This is some information about composting at home.\n".repeat(5000);

    return (
        <div>
            <Header title="Composting for Home" imageSrc={TreeImage.src}/>
            <Navigator />
            <TextContainer title={"Composting at Home"} content={dummyText} />
        </div>
    );
}


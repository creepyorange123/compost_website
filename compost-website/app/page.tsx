
import Header from '@/components/Header';
import Navigator from '@/components/Navigator';
import TreeImage from '../public/tree.jpg';
import TextContainer from '@/components/TextContainer';
import ImageChecker from '@/components/ImageChecker';

export default function Home() {

  const dummyText: string = "content\n".repeat(10000);

  return (
    <div>
      <Header title="Welcome to Compost Website" imageSrc={TreeImage.src} />
      <Navigator />
      <TextContainer title={"sample title"} content={dummyText} />
    </div>
  );
}

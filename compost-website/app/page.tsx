
import Header from '@/components/Header';
import Navigator from '@/components/Navigator';
import TextContainer from '@/components/TextContainer';
import Image from '@/components/Image';

export default function Home() {

  const dummyText: string = "content\n".repeat(10);

  return (
    <div>
      <Header title="Welcome to Compost Website" imageSrc={'/tree.jpg'} />
      <Navigator />
      <TextContainer title={"sample title"} content={dummyText} />
      <Image src={'/full-trash.png'} description={'compost bins'} />
    </div>
  );
}

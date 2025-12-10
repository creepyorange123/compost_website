
import Header from '@/components/Header';
import Navigator from '@/components/Navigator';
import TextContainer from '@/components/TextContainer';

export default function Home() {

  const dummyText: string = "content\n".repeat(10000);

  return (
    <div>
      <Header title="Welcome to Compost Website" imageSrc={'/tree.jpg'} />
      <Navigator />
      <TextContainer title={"sample title"} content={dummyText} />
    </div>
  );
}

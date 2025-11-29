import Header from '@/components/Header';
import Navigator from '@/components/Navigator';

export default function Home() {

  const dummyText: string = "content\n".repeat(10000);
  return (
    <div>
      <Header title="Welcome to Compost Website" imageSrc="/path/to/image.jpg" />
      <Navigator />
      <p>Homepage</p>
      <p>{dummyText}</p>
    </div>
  );
}

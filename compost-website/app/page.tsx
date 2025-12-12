
import Header from '@/components/Header';
import Navigator from '@/components/Navigator';
import Image from '@/components/Image';
import styles from '../styles/Text.module.css';
import Link from 'next/dist/client/link';
import { homeText } from '../public/text';

export default function Home() {

  const dummyText: string = "content\n".repeat(10);

  return (
    <div>
      <Header title="Welcome to Compost Website" imageSrc={'/tree.jpg'} />
      <Navigator />

      <div className={styles.bodyContainer}>

        <div className={styles.title}>Turn Waste Into Resource</div>
        <div className={styles.text}>
          Learn how you can reduce waste and contribute to a healthier planet through composting. 
          <br /><br />
          See <Link className={styles.link} href="/for-home">For Home</Link> to learn about composting at home.
          <br />
          See <Link className={styles.link} href="/for-community">For Community</Link> to learn about composting in your community.
          <br />
          Check out <Link className={styles.link} href="/references">References</Link> for articles referenced and more information on composting.
        </div>
        

        <div className={styles.title}>What Is Composting?</div>
        <div className={styles.text}>{homeText.whyCompost1}</div>
        <Image src={'/trash.jpg'} description={'Image from epa.gov'}/>
        <div className={styles.text}>{homeText.whyCompost2}</div>
        <div className={styles.text}>{homeText.whyCompost3}</div>
        <Image src={'/decomposition.png'} description={'image from compostcrew.com'}/>
      
      </div>

    </div>
  );
}

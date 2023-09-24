import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        
        <p>Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things about yourself.</p>
        <p></p>
        <p className='answer'>I am Carmela Sunga and my hobbies are driving an airplane, eating whole menu of Jollibee and I like to spend my vacation out country.</p>
        <p>
        Why did you take up IT?
        </p>
        <p className='answer'>
          Because my mother said that IT will take over the jobs in the future and we will be visited by aliens.
        </p>
        <p>
        What career do you see yourself exploring after graduation.
        </p>
        <p className='answer'>
          I want to be an engineer that have a vacation for 11 months and will work for a month every year.
        </p>
      </section>
    </Layout>
  );
}

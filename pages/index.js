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
        <p>I'm Carmela Sunga, a third-year Computer Engineering student from the University of the Assumption. My hobbies include sleeping, and my favorite music is 
        "Que Sera, Sera" by Jay Livingston and Ray Evans. When it comes to comfort food, I absolutely love ice cream</p>
        <p>I chose Computer Engineering not only due to its family-centered nature but also because of my deep-rooted desire to comprehend its inner workings. My journey has been incredibly exhilarating, and I am eagerly 
        anticipating the ongoing exploration, learning, and innovation within this ever-evolving field.</p>
       <p>I'm excited about the progress I've made so far and eager to delve deeper into more advanced topics 
        while also considering how I can apply my knowledge to real-world knowledge</p>
        <p>Were trying to build a website hardware engineering, software development, and system analysis</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
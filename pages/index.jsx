import { AskForm, SaidAboutUs, Content, LandingComponent, Description } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div>
      <LandingComponent />
      <div className="container mx-auto px-10 mb-8">
        <Description />
        <Content />
        <SaidAboutUs />
        <AskForm />
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
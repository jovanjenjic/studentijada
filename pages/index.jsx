import { AskForm, SaidAboutUs, Content, LandingComponent, Description } from '../components';
import { getPosts } from '../services';

export default function Home() {
  return (
    <div>
      <LandingComponent />
      <div className="container mx-auto lg:px-10 px-4 mb-8">
        <Description />
        <Content />
        <SaidAboutUs />
        <AskForm />
      </div>
    </div>
  );
}

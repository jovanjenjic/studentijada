import Layout from '../sections/Layout'
import { Hero, Services, Featured, Team, Finisher, Contact } from '../components';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <Hero />
    <Services/>
    <Featured/>
    <Team/>
    <Finisher/>
    <Contact/>
   
  </Layout>
)

export default IndexPage;
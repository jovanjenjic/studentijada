import Layout from '../sections/Layout'
import { Hero, Services, Team, Finisher, Contact, Gallery, Wave, WaveRevarse, DJ, Video, Support } from '../components';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <Hero />
    <Services/>
    <WaveRevarse bgColor="bg-red-500" />
    <Support />
    <Wave bgColor="bg-red-500"/>
    <Video/>
    <DJ />
    <Wave waveColor="#f3f4f6" />
    <Team/>
    <WaveRevarse />
    <Gallery />
    {/* <Finisher/> */}
    <WaveRevarse bgColor="bg-red-500" waveColor={"#ffffff"} />
    <Contact/>
    <Wave bgColor="bg-red-500" waveColor="#f3f4f6" />

  </Layout>
)

export default IndexPage;
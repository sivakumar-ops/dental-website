import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import ContactWithTeam from '../components/sections/ContactWithTeam';

const Home = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Dentovate';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience gentle and comprehensive dentistry with award-winning dental professionals. Book your consultation today for preventive, cosmetic, and restorative dental services.');
    }
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <ContactWithTeam />
      {/* <Team /> */}
    </>
  );
};

export default Home;

import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';
import { Experience } from '../components/home/Experience';
import { Footer } from '../components/home/Footer';
import { Hero } from '../components/home/Hero';
import { Highlights } from '../components/home/Highlights';
import { Navbar } from '../components/home/Navbar';
import { Projects } from '../components/home/Projects';
import { Stack } from '../components/home/Stack';
import { Seo } from '../components/seo/Seo';
import { site } from '../data/site';

export default function Index() {
  const homeUrl = `${site.baseUrl}/`;

  return (
    <main className="min-h-screen bg-bg text-text">
      <Seo
        title={site.seo.homeTitle}
        description={site.seo.homeDescription}
        url="/"
        canonical="/"
        image={site.seo.ogImage}
        type="website"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: site.name,
            jobTitle: site.role,
            url: homeUrl,
            image: `${site.baseUrl}${site.seo.ogImage}`,
            email: site.contactInfo.email,
            sameAs: [site.contactInfo.githubUrl, site.contactInfo.linkedinUrl],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: site.seo.siteName,
            url: homeUrl,
            inLanguage: site.locale,
            description: site.seo.homeDescription,
          },
        ]}
      />
      <Navbar />
      <Hero />
      <Highlights />
      <Projects />
      <About />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

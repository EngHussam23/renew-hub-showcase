import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TeamSection } from "@/components/TeamSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { Footer } from "@/components/Footer";

/**
 * Index Page Component
 *
 * Main landing page that combines all sections in order:
 * 1. Header - Navigation and branding
 * 2. HeroSection - Main promotional content with slides
 * 3. CoursesSection - Course catalog with filtering
 * 4. FeaturesSection - Institute features and benefits
 * 5. TeamSection - Instructor profiles and expertise
 * 6. ClientsSection - Client logos and business metrics
 * 7. FeedbackSection - Student testimonials and reviews
 * 8. Footer - Contact info and links
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="courses">
          <CoursesSection />
        </section>

        <section id="about">
          <FeaturesSection />
        </section>

        <section id="team">
          <TeamSection />
        </section>

        <ClientsSection />

        <FeedbackSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import BestSellerSection from "@/components/best-seller-section";
import CustomerFeedbackSection from "@/components/customer-feedback-section";
import FooterSection from "@/components/footer-section";
import Hero from "@/components/hero";
import PartnersSection from "@/components/partners-section";
import TeamMemberSection from "@/components/team-member-section";

export default function Home() {


  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BestSellerSection />
      <CustomerFeedbackSection />
      <TeamMemberSection />
      <PartnersSection />
      <FooterSection />
    </main>
  );
}

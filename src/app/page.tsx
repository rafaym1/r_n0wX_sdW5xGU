import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Verdict } from "@/components/verdict";
import { ComparisonTable } from "@/components/comparison-table";
import { PricingSnapshot } from "@/components/pricing-snapshot";
import { DeepDive } from "@/components/deep-dive";
import { Faq } from "@/components/faq";
import { Sources } from "@/components/sources";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Verdict />
        <ComparisonTable />
        <PricingSnapshot />
        <DeepDive />
        <Faq />
        <Sources />
      </main>
      <CtaFooter />
    </>
  );
}

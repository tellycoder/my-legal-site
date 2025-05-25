// src/app/landlord-services/[slug]/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

type ServiceContent = {
  title: string;
  definition: string;
  description: string;
  sources: string[];
};

// ← Make sure each slug below exactly matches
const SERVICES: Record<string, ServiceContent> = {
  "abandoned-belongings": {
    title: "Abandoned Belongings",
    definition: "Abandoned belongings are items left behind by a tenant after moving out.",
    description:
      "Abandoned property refers to personal property left behind by an owner who has intentionally relinquished all rights to its control. Once property is deemed abandoned, ownership typically transfers to the first person who takes possession with the intent to claim it.",
    sources: [
      "https://www.legalmatch.com/law-library/article/abandoned-personal-property.html",
      "https://www.lsd.law/define/abandoned-property",
      "https://www.cobrief.app/resources/legal-glossary/abandoned-property-overview-definition-and-example/",
      "https://www.hellodata.ai/help-articles/abandonment-real-estate",
    ],
  },
  "evicting-when-selling": {
    title: "Evicting When Selling",
    definition:
      "Selling a rental property doesn’t automatically grant the right to evict existing tenants.",
    description:
      "In Ontario, tenants cannot be evicted solely because a landlord is listing their property for sale. If the tenant is in a lease, the new owner assumes the tenant; if month-to-month, the buyer can give 60 days’ notice on Form N12 plus one month’s rent compensation. Selling does not nullify a lease—new owner inherits it.",
    sources: [
      "https://www.getwhatyouwant.ca/ontario-tenant-rights-faq-when-youre-landlord-is-selling",
      "https://tribunalsontario.ca/documents/ltb/Interpretation%20Guidelines/12%20-%20Eviction%20for%20Personal%20Use.html",
    ],
  },
  "pets-lease-issues": {
    title: "Pets, Lease Issues",
    definition:
      "In Ontario, landlords cannot enforce “no pets” clauses in lease agreements.",
    description:
      "Section 14 of the RTA voids any “no pets” clause. Landlords can refuse before signing, but once leased cannot evict for pets unless harm or interference occurs. No pet fees or deposits allowed; service animals always accommodated under the Human Rights Code.",
    sources: [
      "https://www.oduraalegalservices.ca/blog/can-landlords-refuse-pets-in-ontario",
      "https://toronto.citynews.ca/2023/09/04/ontario-tenancy-rights-pets-maintenance/",
      "https://defendit.ca/EN/tenancy-disputes/general-concerns/pets-lease-issues",
      "https://humberviewinsurance.ca/knowledge/no-pets-clause-ontario/",
      "https://www.mipropertyportal.com/understanding-pet-policies-for-rental-properties-in-ontario/",
    ],
  },
  "smoking-by-tenant": {
    title: "Smoking By Tenant",
    definition:
      "Tenants may smoke in their units unless restricted by a lease clause or if it interferes with others’ enjoyment.",
    description:
      "Under Section 64 of the RTA, tenants can smoke in their unit unless a no‐smoking clause exists. Landlords may act if smoke substantially interferes with others. Common areas are smoke‐free per the Smoke‐Free Ontario Act.",
    sources: [
      "https://housingrightscanada.com/resources/ontario-housing-law-basics-smoking/",
      "https://smokefreehousingon.ca/common-questions/rentals/",
      "https://ranger.legal/EN/landlord-tenant/landlord-concerns/smoking-by-tenant",
      "https://www.ontario.ca/page/where-you-cant-smoke-or-vape-ontario",
      "https://landlordselfhelp.com/ufaqs/FAQ-789/",
    ],
  },
  "vexatious-litigation": {
    title: "Vexatious Litigation",
    definition:
      "Repeatedly filing legal actions without merit, often to harass or burden the opposing party.",
    description:
      "A party declared vexatious under Rule A8.2 of SJTO is barred from further proceedings without permission. Example: TST‐69169‐15 (Re).",
    sources: [
      "https://tribunalsontario.ca/documents/ltb/Rules/LTB%20Rules%20of%20Procedure.html",
      "https://riverview.legal/encyclopedia/index.php/Vexatious_Litigant_%28LTB%29",
      "https://sfg.legal/EN/landlord-tenant-services/landlord-services/vexatious-litigation",
      "https://georgebrown.biz/vexatious-litigation/",
    ],
  },
  "shared-living-rights": {
    title: "Shared Living Rights",
    definition:
      "Your rights depend on who you live with and how your rental is structured.",
    description:
      "1. Joint Tenancy – one lease, shared responsibility.\n2. Tenants in Common – separate leases & liabilities.\n3. Occupants – no lease, no LTB recourse.\n4. Sharing with Owner – RTA doesn’t apply; common law governs.\n5. Privacy – 24h notice private, none for common.\n6. Human Rights – no discrimination under the Code.",
    sources: [
      "https://www.acto.ca/for-tenants/renting-with-roommates-in-ontario-heres-the-rights-and-regulations-you-should-know/",
      "https://tribunalsontario.ca/documents/ltb/Interpretation%20Guidelines/21%20-%20Landlords%20Tenants%20Occupants%20and%20Residential%20Tenancies.html",
      "https://landlordselfhelp.com/rta-fact-sheet-share-kitchen-bath/",
      "https://toronto.citynews.ca/2023/07/31/what-you-need-to-know-about-living-with-roommates-in-ontario/",
      "https://www3.ohrc.on.ca/en/human-rights-and-rental-housing-ontario-background-paper/rental-housing-and-ontario-human-rights",
    ],
  },
  "unreasonable-interference": {
    title: "Unreasonable Interference",
    definition:
      "Landlords must not disrupt a tenant’s use or enjoyment of their rental unit.",
    description:
      "Section 22 of the RTA forbids substantial interference. Tenants may file a T2 to stop interference or seek compensation.",
    sources: [
      "https://www.ontario.ca/laws/statute/06r17",
      "https://tribunalsontario.ca/documents/ltb/Interpretation%20Guidelines/06%20-%20Tenants%20Rights.html",
      "https://tribunalsontario.ca/documents/ltb/Interpretation%20Guidelines/19%20-%20The%20Landlords%20Right%20of%20Entry%20into%20a%20Rental%20Unit.html",
      "https://dklegalpractice.ca/EN/landlord-tenant/landlord-services-information-for-landlords/unreasonable-interference",
      "https://ranger.legal/EN/landlord-tenant-services/other-issues/unreasonable-interference",
    ],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES[params.slug];
  if (!service) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="font-semibold mb-4">{service.definition}</p>
        <p className="text-gray-700 mb-6">{service.description}</p>
        <div className="space-y-2">
          {service.sources.map((url, i) => (
            <p key={i}>
              <span className="font-semibold">({i + 1}) </span>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                {url}
              </a>
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Landlord & Tenant Disputes",
    description: "Evictions, arrears, rent increases, and LTB representation.",
  },
  {
    title: "Small Claims Court",
    description: "Representation for monetary disputes under $35,000.",
  },
  {
    title: "Traffic & Provincial Offences",
    description: "Fighting speeding tickets and other provincial offences.",
  },
  {
    title: "Human Rights Tribunal",
    description: "Representation in discrimination or harassment matters.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Legal Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

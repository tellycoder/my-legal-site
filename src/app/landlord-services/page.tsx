import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  "abandoned-belongings",
  "evicting-when-selling",
  "pets-lease-issues",
  "smoking-by-tenant",
  "vexatious-litigation",
  "shared-living-rights",
  "unreasonable-interference",
];

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export default function LandlordServicesIndex() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Landlord Services</h1>
        <ul className="space-y-3">
          {services.map((slug) => (
            <li key={slug}>
              <Link
                href={`/landlord-services/${slug}`}
                className="text-lg text-blue-600 hover:underline"
              >
                {slugToTitle(slug)}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
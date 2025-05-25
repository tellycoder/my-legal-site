import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Thanks for reaching out!</h1>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
          We’ve received your message and will be in touch within 1–2 business days.
        </p>
      </main>
      <Footer />
    </div>
  );
}
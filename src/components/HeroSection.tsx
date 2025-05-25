export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Accessible, Reliable Legal Support</h2>
        <p className="text-lg text-gray-600 mb-6">
          Offering expert paralegal services across Ontario—now with online consultations.
        </p>
        <a
          href="/book"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
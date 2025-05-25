import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form
          action="https://formspree.io/f/mqaqvebg"
          method="POST"
          className="space-y-6"
        >
          {/* ✅ Hidden input to redirect after form submission */}
          <input
            type="hidden"
            name="_redirect"
            value="http://localhost:3000/thank-you"
          />

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tell us how we can help you"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
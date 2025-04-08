import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 md:px-12 py-10 font-sans">
      {" "}
      {/* Hero Section */}{" "}
      <section className="text-center max-w-3xl mx-auto py-10">
        {" "}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {" "}
          Elevate Your Phone’s Style with{" "}
          <span className="text-black">
            Premium Transparent Cases and Custom Skins. Protection and Beauty in
            One.
          </span>{" "}
        </h1>{" "}
        <p className="text-lg text-gray-600 mb-6">
          {" "}
          YOUR PHONE. YOUR STYLE. FULL PROTECTION.{" "}
        </p>{" "}
        <Link
          href="https://wa.me/918553855378"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition"
        >
          {" "}
          Contact on WhatsApp{" "}
        </Link>{" "}
      </section>
      {/* How It Works Section */}
      <section className="bg-gray-100 rounded-xl p-8 my-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <Image
              src="/icons/choose.svg"
              alt="Choose"
              width={64}
              height={64}
              className="mx-auto mb-2"
            />
            <p>Choose your favorite skin design</p>
          </div>
          <div>
            <Image
              src="/icons/apply.svg"
              alt="Apply"
              width={64}
              height={64}
              className="mx-auto mb-2"
            />
            <p>Apply it on your phone carefully</p>
          </div>
          <div>
            <Image
              src="/icons/protect.svg"
              alt="Protect"
              width={64}
              height={64}
              className="mx-auto mb-2"
            />
            <p>Finish it with an iPaky case</p>
          </div>
        </div>
      </section>
      {/* Design Gallery Preview */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Skin Designs Preview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src="/designs/astronaut.jpg"
              alt="Astronaut Design"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src="/designs/samurai.jpg"
              alt="Samurai Design"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          {/* Add more designs later */}
        </div>
      </section>
      {/* Benefits Section */}
      <section className="bg-gray-50 py-10 mt-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-semibold">No Yellowing</p>
          </div>
          <div>
            <p className="font-semibold">Scratch Protection</p>
          </div>
          <div>
            <p className="font-semibold">Premium Look</p>
          </div>
          <div>
            <p className="font-semibold">Customizable</p>
          </div>
        </div>
      </section>
      {/* Final WhatsApp CTA */}
      <section className="text-center py-10">
        <p className="text-lg mb-4">
          Tell us your phone model & preferred design
        </p>
        <Link
          href="https://wa.me/918553855378"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition"
        >
          Message on WhatsApp
        </Link>
      </section>
    </main>
  );
}

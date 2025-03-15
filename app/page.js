import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div  className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold gradient-title pb-6">
            simplify your scheduling
          </h1>
           <p className="text-xl text-gray-600 mb-10">
            Schedulrr helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
        </div>
                <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
          <Image src='/poster.png' alt="schedular ilusturation" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </main>
  );
}

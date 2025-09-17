export default function About() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Ro-Deck</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Ro-Deck is a cutting-edge platform dedicated to enhancing security and trust within the Ethereum ecosystem. We leverage advanced AI and machine learning to provide real-time fraud detection, protecting users from malicious activities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://images.pexels.com/photos/6771740/pexels-photo-6771740.jpeg" alt="Our Mission" className="rounded-2xl shadow-lg shadow-orange-500/20" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            To empower individuals and organizations to navigate the Ethereum ecosystem with confidence by providing cutting-edge fraud detection and prevention solutions. We are committed to creating a safer environment for innovation and investment in the decentralized world.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
          <img src="https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg" alt="Our Vision" className="rounded-2xl shadow-lg shadow-orange-500/20" />
        </div>
        <div className="md:order-1">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Vision</h2>
          <p className="text-gray-300 text-lg">
            To be the leading force in creating a secure and trustworthy decentralized future, free from fraud and accessible to all. We envision a world where blockchain technology can flourish without the threat of bad actors, fostering greater adoption and progress.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="p-6 border border-orange-500 rounded-xl bg-black shadow-lg shadow-orange-500/20 text-center">
            <h2 className="text-xl font-semibold text-white">Roy James Karoki</h2>
            <p className="text-orange-500">Geomatics & GIS</p>
            <p className="text-gray-400 mt-2">roy.karoki22@students.dkut.ac.ke</p>
          </div>
          <div className="p-6 border border-orange-500 rounded-xl bg-black shadow-lg shadow-orange-500/20 text-center">
            <h2 className="text-xl font-semibold text-white">Timothy Odek</h2>
            <p className="text-orange-500">Telecommunication Engineering</p>
            <p className="text-gray-400 mt-2">odektimothy@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Header Component with animated select
const Header = React.memo(() => {
  const [selected, setSelected] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <header className="bg-white py-4 px-6 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Navigation */}
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold">
            Work
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-semibold flex items-center"
          >
            Collections
            <span className="ml-1 text-xs px-2 py-0.5 bg-red-500 text-white rounded-full">
              NEW
            </span>
          </a>
        </nav>
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <select
            className={`bg-gray-100 px-3 py-1 rounded-md text-gray-700 font-semibold focus:outline-none transition duration-300 ${animate ? "ring-2 ring-purple-400 animate-pulse" : ""}`}
            aria-label="Recent Shots"
            value={selected}
            onChange={handleChange}
          >
            <option value="" disabled>
              Recent Shots
            </option>
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>
    </header>
  );
});

// ShotCard Component
const ShotCard = React.memo(({ title, imageUrl, likes, comments }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full object-cover h-52 rounded-t-lg transition-transform duration-500 hover:scale-110"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/400x300/000/FFF?text=${title.replace(/ /g, "+")}`;
        }}
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-base text-gray-800 mb-2">{title}</h3>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          {likes}
          {/* Save button  SAVE SVG*/}
          <button
            className="ml-2 p-1 cursor-pointer hover:bg-gray-200 transition"
            aria-label="Save project"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-5-7 5V5z"
              />
            </svg>
          </button>
        </span>
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.746-1.378L2 17l1.339-3.14a7.989 7.989 0 01-2.678-5.872C1 6.134 4.582 3 9 3s8 3.134 8 7zM9 11a1 1 0 100-2 1 1 0 000 2zm3-1a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
              clipRule="evenodd"
            />
          </svg>
          {comments}
        </span>
      </div>
    </div>
  </div>
));
ShotCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number,
  comments: PropTypes.number,
};

// Async data loader function
export const fetchProjectData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = [
    {
      title: "Claim your self-sovereign identity on Bitcoin",
      imageUrl: "https://placehold.co/600x400/000/FFF?text=Bitcoin+Identity",
      likes: 256,
      comments: 18,
      description: "Claim your unique, self-sovereign identity on the Bitcoin blockchain and take control of your digital presence.",
    },
    {
      title: "Bridge your Bitcoin, start earning.",
      imageUrl: "https://placehold.co/600x400/333/EEE?text=Bitcoin+Earning",
      likes: 412,
      comments: 35,
      description: "Bridge your Bitcoin to DeFi platforms and start earning passive income with your assets.",
    },
    {
      title: "Explore the future of Bitcoin NFTs",
      imageUrl: "https://placehold.co/600x400/444/FFF?text=Bitcoin+NFTs",
      likes: 198,
      comments: 22,
      description: "Discover and trade unique NFTs secured by the Bitcoin network.",
    },
    {
      title: "Decentralized Finance on Bitcoin",
      imageUrl: "https://placehold.co/600x400/555/FFF?text=Bitcoin+DeFi",
      likes: 320,
      comments: 27,
      description: "Access decentralized finance solutions built on top of Bitcoin for lending, borrowing, and more.",
    },
    {
      title: "Secure your assets with Bitcoin multisig",
      imageUrl: "https://placehold.co/600x400/666/FFF?text=Bitcoin+Multisig",
      likes: 150,
      comments: 12,
      description: "Enhance your Bitcoin security using multisignature wallets for personal or business use.",
    },
    {
      title: "Bitcoin Layer 2 Solutions",
      imageUrl: "https://placehold.co/600x400/777/FFF?text=Bitcoin+Layer+2",
      likes: 275,
      comments: 30,
      description: "Scale your Bitcoin transactions with fast and affordable Layer 2 solutions.",
    },
    {
      title: "Bitcoin Payment Solutions for Merchants",
      imageUrl: "https://placehold.co/600x400/888/FFF?text=Bitcoin+Payments",
      likes: 400,
      comments: 50,
      description: "Accept Bitcoin payments easily and securely with our merchant solutions.",
    },
    {
      title: "Bitcoin Wallets: Security and Usability",
      imageUrl: "https://placehold.co/600x400/999/FFF?text=Bitcoin+Wallets",
      likes: 220,
      comments: 18,
      description: "Find the best Bitcoin wallets that balance security and usability for your needs.",
    },
  ];
  // Add key and index to each object
  return data.map((item, idx) => ({
    ...item,
    key: `project-${idx}`,
    index: idx,
  }));
};

const ProjectCard = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of projects to show

  useEffect(() => {
    fetchProjectData().then((data) => setAllProjects(data));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(allProjects.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      <Header />
      <main className="container mx-auto p-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Most Popular Projects</h2>
        <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleCount).map((project) => (
            <Link
              key={project.key}
              to={`/projects/${project.index}`}
              className="block"
              style={{ textDecoration: "none" }}
            >
              <ShotCard {...project} />
            </Link>
          ))}
        </div>
        {visibleCount < allProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              className="px-8 py-3 bg-slate-600 cursor-pointer text-white font-bold rounded-lg shadow hover:bg-slate-800 transition-all duration-200 flex items-center gap-2"
              style={{ minWidth: 160 }}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectCard;

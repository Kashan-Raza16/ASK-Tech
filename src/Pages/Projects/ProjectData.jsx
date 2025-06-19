import React from "react";
import ochi from "../../assets/img/ochi-1.png";


export const fetchProjectData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = [
    {
      title: "Ochi",
      imageUrl: typeof ochi === "string" ? ochi : (ochi?.default || ""),
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
  // Add key and index to each object for React rendering and routing
  return data.map((item, idx) => ({
    ...item,
    key: `project-${idx}`,
    index: idx,
  }));
};
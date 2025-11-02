// client/components/projects/data/projects.ts

import { Project } from './types';

export const projects: Project[] = [
  {
    title: "Axon-Pharma – LLM-Powered Pharmacy Service App",
    description:
      "Conversational pharmacy app that helps users check medicines, prices, and place orders. Admins can manage inventory and post Telegram updates.",
    detailedDescription:
      "Streamlit + Firebase app that uses LLm function calling to power a pharmacy assistant. Customers can chat to check medicine availability, place and track orders, while pharmacy admins manage inventory and broadcast updates via Telegram directly in the admin dashboard.",
    image: "/axon-pharmacy.png",
    github: "https://github.com/AlexKalll/axon-pharma",
    demo: "https://axon-automation.streamlit.app/",
    tags: [
      "LLM",
      "Healthcare",
      "Pharmacy",
      "Python",
      "Firebase",
      "Streamlit",
      "Telegram Bot",
    ],
    keyFeatures: [
      "AI chatbot for real-time medicine availability checks",
      "Guest mode for demo access without account signup",
      "Admin panel for inventory & order management and telegram posting",
      "Telegram integration for automated announcements",
    ],
    technicalChallenges: [
      "Connecting LLMs with app functions using function calling",
      "Securing Firebase authentication and Firestore data",
      "Building a seamless user experience across roles",
    ],
    techStack: [
      {
        name: "Streamlit",
        description:
          "Simplifies building interactive data-driven web apps directly from Python.",
      },
      {
        name: "Firebase",
        description:
          "Provides secure authentication, cloud data storage, and real-time syncing.",
      },
      {
        name: "Google Gemini API",
        description:
          "Supplies the large language model for conversational and contextual reasoning.",
      },
      {
        name: "Telegram Bot API",
        description:
          "Used to send automated updates and alerts from the admin dashboard.",
      },
    ],
  },

  {
    title: "Image Segmentation Studio (FH Edition)",
    description: "Interactive web app for segmenting and analyzing images using AI.",
    detailedDescription:
      "A professional image segmentation platform built with Streamlit that applies the Felzenszwalb–Huttenlocher graph-based algorithm. Users can adjust parameters in real time, view side-by-side results, and download segmented images with analytics. Designed for research, education, and computer vision exploration.",
    image: "/img-segmentation.png",
    github: "https://github.com/AlexKalll/img-segmentation",
    demo: "https://img-seg.streamlit.app",
    tags: [
      "Machine Learning",
      "Computer Vision",
      "Python",
      "Streamlit",
      "AI Tools",
      "Data Visualization",
      "Image Processing",
      "Open Source",
    ],
    keyFeatures: [
      "Adjustable segmentation parameters (k, sigma, min_size)",
      "Real-time image processing and visualization",
      "Downloadable segmented results and analytics",
      "Clean dark UI theme with responsive layout",
    ],
    technicalChallenges: [
      "Building a real-time, latency-free image processing pipeline",
      "Optimizing algorithm performance on large images",
      "Designing a clear and intuitive Streamlit UI",
    ],
    techStack: [
      {
        name: "Python",
        description:
          "Used for developing the core segmentation logic and data handling processes.",
      },
      {
        name: "Streamlit",
        description:
          "Framework that transforms Python scripts into interactive web applications easily.",
      },
      {
        name: "scikit-image",
        description:
          "A Python library that provides efficient image processing and analysis functions.",
      },
      {
        name: "NumPy & Matplotlib",
        description:
          "Handle mathematical operations and visualization for performance and clarity.",
      },
    ],
  },

  {
    title: "Crowdfunding DApp",
    description:
      "Decentralized crowdfunding platform enabling transparent blockchain-based fundraising.",
    detailedDescription:
      "This Web3 application allows users to launch campaigns, contribute funds, and claim rewards directly on the Ethereum blockchain. Built with Solidity smart contracts and a Next.js frontend, it ensures trustless transactions and transparent fund management.",
    image: "/crowdfunding.png",
    github: "https://github.com/AlexKalll/crowd-funding-DApp",
    demo: "https://crowdfundiing-dapp.vercel.app/",
    tags: [
      "Blockchain",
      "Web3",
      "Ethereum",
      "Smart Contracts",
      "Next.js",
      "TypeScript",
      "Decentralized Apps",
      "Crypto",
    ],
    keyFeatures: [
      "Launch and fund campaigns securely via blockchain",
      "Tiered reward system for contributors",
      "MetaMask wallet integration",
      "Automatic refunds for failed campaigns",
    ],
    technicalChallenges: [
      "Integrating on-chain smart contract data with a modern frontend",
      "Ensuring smooth user transactions and error handling",
      "Maintaining security and transparency across blockchain interactions",
    ],
    techStack: [
      {
        name: "Solidity",
        description:
          "Programming language for writing smart contracts that power campaign logic on Ethereum.",
      },
      {
        name: "Next.js & React",
        description:
          "Used for building the responsive and dynamic user interface for the web platform.",
      },
      {
        name: "Hardhat",
        description:
          "Framework for testing, deploying, and debugging Ethereum smart contracts.",
      },
      {
        name: "ethers.js",
        description:
          "Library that enables the frontend to interact seamlessly with blockchain networks and wallets.",
      },
    ],
  },

  {
    title: "Top Academy – Educational Website with AI Assistant",
    description:
      "Multi-page educational platform with an integrated AI chatbot for academic support.",
    detailedDescription:
      "Top Academy is a responsive educational website offering tutoring, research guidance, and coding classes. It includes an embedded AI assistant powered by the Groq API (Llama 3) to answer inquiries about services and programs in real time.",
    image: "/top-academy.png",
    github: "https://github.com/AlexKalll/top-academy",
    demo: "https://alexkalll.github.io/top-academy",
    tags: [
      "Web Development",
      "AI Assistant",
      "Education",
      "Frontend",
      "Chatbot",
      "HTML",
      "JavaScript",
      "Groq API",
    ],
    keyFeatures: [
      "Built-in AI chatbot answering company-specific questions",
      "Expandable FAQ section with smooth animations",
      "Clean design optimized for desktop and mobile",
      "Accessible UI with keyboard shortcuts and ARIA labels",
    ],
    technicalChallenges: [
      "Embedding LLM-based AI securely in a static website",
      "Handling cross-page component loading on GitHub Pages",
      "Ensuring performance and accessibility on all devices",
    ],
    techStack: [
      {
        name: "HTML, CSS, and JavaScript",
        description:
          "Core technologies used to build and style the responsive web pages.",
      },
      {
        name: "Groq API (Llama 3)",
        description:
          "Provides the AI chatbot’s natural conversation capabilities.",
      },
      {
        name: "LocalStorage",
        description:
          "Used for saving user preferences and secure API configurations on the client side.",
      },
      {
        name: "GitHub Pages",
        description:
          "Free hosting for the website, ensuring global availability and easy updates.",
      },
    ],
  },

  {
    title: "Smart-Housing – AI-Powered House Price Predictor",
    description:
      "Django web app that predicts house prices using machine learning and automated retraining.",
    detailedDescription:
      "An end-to-end ML web application that predicts house prices using a Linear Regression model built with scikit-learn. It retrains automatically through Celery and Redis, offering continuous improvement and live predictions via a Django-based web interface.",
    image: "/smart-housing.png",
    github: "https://github.com/AlexKalll/smart-housing",
    demo: "https://smart-housing.up.railway.app",
    tags: [
      "Machine Learning",
      "AI",
      "Web App",
      "Python",
      "Django",
      "Celery",
      "Redis",
      "Data Science",
    ],
    keyFeatures: [
      "Predicts house prices with adjustable input fields",
      "Background model retraining using Celery tasks",
      "Interactive and responsive interface",
      "Reliable model persistence and checkpoints",
    ],
    technicalChallenges: [
      "Integrating background ML retraining into a live web app",
      "Optimizing prediction speed while maintaining accuracy",
      "Handling data scaling and encoding consistency",
    ],
    techStack: [
      {
        name: "Django",
        description:
          "Web framework used for backend logic, routing, and UI templates.",
      },
      {
        name: "scikit-learn",
        description:
          "Library used to train, test, and serve the Linear Regression model.",
      },
      {
        name: "Celery + Redis",
        description:
          "Tools that automate model retraining tasks and manage background job scheduling.",
      },
      {
        name: "Railway",
        description:
          "Cloud platform that hosts and deploys the app, making it publicly accessible.",
      },
    ],
  },

  {
    title: "CrediTrust Complaint RAG Chatbot",
    description:
      "AI-powered chatbot that analyzes customer complaints using retrieval-augmented generation.",
    detailedDescription:
      "A financial complaint analysis assistant that uses RAG (Retrieval-Augmented Generation) to search, understand, and summarize thousands of customer complaints. It provides interactive visual dashboards and natural-language insights for business teams.",
    image: "/creditrust.png",
    github: "https://github.com/AlexKalll/CrediTrust-Complaint-RAG-Chatbot",
    demo: "https://creditrust-complaint-assistant.streamlit.app/",
    tags: [
      "Artificial Intelligence",
      "Chatbot",
      "RAG",
      "LangChain",
      "FAISS",
      "Data Visualization",
      "Streamlit",
      "NLP",
    ],
    keyFeatures: [
      "AI-powered complaint understanding and trend detection",
      "Semantic search and summarized insights with citations",
      "Interactive analytics dashboard",
      "Real-time filtering and product-based analysis",
    ],
    technicalChallenges: [
      "Combining retrieval and generation for fact-based AI answers",
      "Optimizing vector search for speed and accuracy",
      "Building a professional, responsive Streamlit UI",
    ],
    techStack: [
      {
        name: "LangChain",
        description:
          "Framework that connects LLMs with custom retrieval and reasoning pipelines.",
      },
      {
        name: "FAISS",
        description:
          "High-performance vector search library that powers semantic retrieval.",
      },
      {
        name: "Streamlit",
        description:
          "Frontend library used for building the interactive interface and dashboard.",
      },
      {
        name: "Sentence Transformers",
        description:
          "Converts complaint text into numerical embeddings for better search and understanding.",
      },
    ],
  },
];

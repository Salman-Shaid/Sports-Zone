import React, { useState, useContext } from 'react';
import bimage from "../assets/1.png";
import bimage2 from "../assets/top5.jpg";
import bimage3 from "../assets/3.jpg";
import { ThemeContext } from '../AuthProvider/ThemeProvider'; 

const BlogSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  
  const { theme } = useContext(ThemeContext);

  
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

 
  const posts = [
    {
      title: "How to Choose the Right Sports Equipment",
      description: "Discover expert tips on selecting the best sports equipment for your needs. Here's a detailed guide on how to make the right choice for different sports. From understanding the materials to knowing which features matter most, choosing the right equipment can make a huge difference in your performance and safety. Whether you're a beginner or a seasoned athlete, this article offers valuable advice to help you select the equipment that fits your needs.",
      fullContent: "Discover expert tips on selecting the best sports equipment for your needs. Here's a detailed guide on how to make the right choice for different sports. From understanding the materials to knowing which features matter most, choosing the right equipment can make a huge difference in your performance and safety. Whether you're a beginner or a seasoned athlete, this article offers valuable advice to help you select the equipment that fits your needs. Make sure to choose durable, comfortable, and performance-enhancing gear that can support you in achieving your goals."
    },
    {
      title: "5 Exercises to Improve Your Performance",
      description: "No matter what sport you play, improving your overall fitness can significantly enhance your performance. These exercises will help build strength, endurance, and agility. By incorporating these into your routine, you'll be able to boost your athletic performance and reduce the risk of injury. Whether you're aiming to build strength or improve flexibility, these exercises are a great starting point for any athlete.",
      fullContent: "No matter what sport you play, improving your overall fitness can significantly enhance your performance. These exercises will help build strength, endurance, and agility. By incorporating these into your routine, you'll be able to boost your athletic performance and reduce the risk of injury. Whether you're aiming to build strength or improve flexibility, these exercises are a great starting point for any athlete. These exercises include squats for strength, lunges for balance, planks for core stability, push-ups for upper body strength, and jumping rope for agility and cardio. Each exercise focuses on a different aspect of fitness, ensuring a well-rounded approach to training."
    },
    {
      title: "Top Trends in Sports Equipment for 2024",
      description: "The sports equipment industry is evolving rapidly. With innovations like smart gear, sustainable materials, and custom designs, 2024 promises a game-changing year for athletes. Smart equipment, such as tennis rackets with built-in sensors and footballs with speed trackers, will help athletes improve their performance by providing real-time data. Sustainable materials are also becoming a priority, reducing the environmental impact of manufacturing.",
      fullContent: "The sports equipment industry is evolving rapidly. With innovations like smart gear, sustainable materials, and custom designs, 2024 promises a game-changing year for athletes. Smart equipment, such as tennis rackets with built-in sensors and footballs with speed trackers, will help athletes improve their performance by providing real-time data. Sustainable materials are also becoming a priority, reducing the environmental impact of manufacturing. Custom designs and personalization options are allowing athletes to tailor their gear for optimal performance. Additionally, lightweight and high-performance gear will continue to dominate the market, ensuring that athletes can perform at their best without compromising comfort. These trends will shape the future of sports equipment in 2024 and beyond."
    }
  ];

  return (
    <section className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} py-10`}>
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Our Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {posts.map((post, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}>
              <img src={index === 0 ? bimage : index === 1 ? bimage2 : bimage3} alt={`Blog Post ${index + 1}`} className="w-full h-48 object-cover mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {post.title}
              </h3>
              <p className={`text-gray-500 mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                {truncateText(post.description, 30)}
              </p>
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${theme === "dark" ? "bg-blue-400" : ""}`}
                onClick={() => openModal({ title: post.title, content: post.fullContent })}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-white p-8 rounded-lg max-w-lg w-full ${theme === "dark" ? "bg-gray-700" : ""}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {modalContent.title}
            </h3>
            <p className={`text-gray-700 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              {modalContent.content}
            </p>
            <button
              className={`mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg ${theme === "dark" ? "bg-blue-400" : ""}`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;

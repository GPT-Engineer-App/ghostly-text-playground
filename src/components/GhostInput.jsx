import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";

const startupIdeas = [
  "AI-powered personal shopping assistant",
  "Sustainable packaging solutions for e-commerce",
  "Virtual reality language learning platform",
  "Blockchain-based voting system for HOAs",
  "Personalized meal planning app for dietary restrictions",
  "Drone delivery service for rural areas",
  "Augmented reality home decoration tool",
  "Microlearning platform for professional skills",
  "Smart water conservation system for homes",
  "Peer-to-peer car sharing app for electric vehicles",
  "AI-driven resume optimization tool",
  "Virtual pet adoption and care platform",
  "Subscription box for eco-friendly household products",
  "Gamified financial literacy app for kids",
  "On-demand handyman services platform",
  "AI-powered legal document generator",
  "Virtual reality meditation and mindfulness app",
  "Personalized skincare formulation service",
  "Blockchain-based music royalty distribution platform",
  "AI-driven personal carbon footprint tracker"
];

const GhostInput = ({ typingSpeed = 50, pauseDuration = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentIdea = startupIdeas[currentIdeaIndex];

    if (isTyping) {
      if (currentCharIndex < currentIdea.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + currentIdea[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        const timer = setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCurrentCharIndex(0);
          setCurrentIdeaIndex((prev) => (prev + 1) % startupIdeas.length);
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    }
  }, [currentCharIndex, currentIdeaIndex, isTyping, isPaused, typingSpeed, pauseDuration]);

  const handleClick = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        type="text"
        value={displayText}
        onChange={() => {}}
        onClick={handleClick}
        className="w-full p-2 border rounded text-gray-600"
        placeholder="Click to pause/resume"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <span className="text-gray-400">{!isPaused ? '|' : ''}</span>
      </div>
    </div>
  );
};

export default GhostInput;

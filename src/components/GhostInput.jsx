import React, { useState, useEffect, useCallback } from 'react';
import { Input } from "@/components/ui/input";

const GhostInput = ({ ghostText = "Type your message here...", typingSpeed = 100, deletingSpeed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const animate = useCallback(() => {
    if (!isAnimating) return;

    if (isTyping) {
      if (currentIndex < ghostText.length) {
        setDisplayText(prev => prev + ghostText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsTyping(false);
        setCurrentIndex(ghostText.length - 1);
      }
    } else {
      if (currentIndex >= 0) {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else {
        setIsTyping(true);
        setCurrentIndex(0);
      }
    }
  }, [isAnimating, isTyping, currentIndex, ghostText]);

  useEffect(() => {
    const timer = setTimeout(animate, isTyping ? typingSpeed : deletingSpeed);
    return () => clearTimeout(timer);
  }, [animate, isTyping, typingSpeed, deletingSpeed]);

  const handleClick = () => {
    setIsAnimating(prev => !prev);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        type="text"
        value={displayText}
        onChange={() => {}}
        onClick={handleClick}
        className="w-full p-2 border rounded"
        placeholder={ghostText}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <span className="text-gray-400">{isAnimating ? '|' : ''}</span>
      </div>
    </div>
  );
};

export default GhostInput;

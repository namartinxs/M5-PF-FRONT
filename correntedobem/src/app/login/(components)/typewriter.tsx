import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const text = 'Bem-vindo à Corrente do Bem!';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterTyping = 1500;
    const pauseAfterDeleting = 500;

    if (!isDeleting && index < text.length) {
      // Digitando
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === text.length) {
      // Pausa antes de apagar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && index > 0) {
      // Apagando
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, typingSpeed);
    } else if (isDeleting && index === 0) {
      // Pausa antes de recomeçar
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseAfterDeleting);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    
    <h1 className=" text-center text-2xl font-bold text-amber-50">
      {displayedText}
      <span className="border-r-2 border-amber-50 animate-pulse ml-1" />
    </h1>
  
  );
};

export default Typewriter;

import { useEffect, useState } from 'react';

const Confetti = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  const colors = ['#FFDEE2', '#E5DEFF', '#FEF7CD', '#FDE1D3'];

  useEffect(() => {
    const createParticle = () => {
      const particles: JSX.Element[] = [];
      
      for (let i = 0; i < 50; i++) {
        const left = Math.random() * 100;
        const animationDuration = 3 + Math.random() * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push(
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${left}%`,
              top: '-20px',
              backgroundColor: color,
              animation: `fall ${animationDuration}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        );
      }
      
      setParticles(particles);
    };

    createParticle();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
      {particles}
    </div>
  );
};

export default Confetti;
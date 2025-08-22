'use client'
import React from 'react';
import Image from 'next/image';
import indian_army from "../../assets/clients/indian_army.png";
// Import other images similarly once you have them

const ClientsSection = () => {
  // Client logos data
  const clients = [
    { name: 'Indian Army', logo: indian_army },
    { name: 'Indian Navy', logo: null },
    { name: 'Indian Air Force', logo: null },
    { name: 'DRDO', logo: null },
    { name: 'Power Grid', logo: null },
    { name: 'THDC', logo: null },
    { name: 'Power Corporation', logo: null },
    { name: 'STPI', logo: null },
    { name: 'Indian Coast Guard', logo: null },
    { name: 'KVS Sangathan', logo: null },
    { name: 'World Bank TEQIP', logo: null },
    { name: 'TSSC Skill India', logo: null },
    { name: 'UBTER', logo: null },
    { name: 'UTU', logo: null },
    { name: 'UPTER', logo: null },
    { name: 'GBPEC', logo: null },
    { name: 'GBPIE', logo: null },
    { name: 'BTCIT', logo: null },
    { name: 'Graphic Era University', logo: null },
    { name: 'DIT University', logo: null },
    { name: 'UPES', logo: null },
  ];

  // Split clients into three groups for three lines
  const clientsPerLine = Math.ceil(clients.length / 2);
  const clientLines = [
    clients.slice(0, clientsPerLine),
    clients.slice(clientsPerLine, clientsPerLine * 2),
    clients.slice(clientsPerLine * 2)
  ];

  // Duplicate each line to create a seamless loop
  const duplicatedClientLines = clientLines.map(line => [...line, ...line]);

  return (
    <section className="clients-section bg-gray-50 py-16 px-4" id="our-clients">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Prestigious Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to partner with leading organizations across various sectors
          </p>
        </div>

        {/* Three scrolling lines container */}
        <div className="space-y-8">
          {duplicatedClientLines.map((line, lineIndex) => (
            <div key={lineIndex} className="relative overflow-hidden">
              {/* Gradient fade effects on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
              
              {/* Scrolling Logos for this line */}
              <div className={`flex space-x-8 py-4 marquee-line-${lineIndex}`}>
                {line.map((client, index) => (
                  <div 
                    key={`${client.name}-${lineIndex}-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center w-36 h-20 bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-300"
                  >
                    {client.logo ? (
                      <Image 
                        src={client.logo} 
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-xs font-medium text-gray-800">{client.name}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee1 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee2 {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(-60%); }
        }
        
        @keyframes marquee3 {
          0% { transform: translateX(-5%); }
          100% { transform: translateX(-55%); }
        }
        
        .marquee-line-0 {
          animation: marquee1 25s linear infinite;
          width: max-content;
        }
        
        .marquee-line-1 {
          animation: marquee2 30s linear infinite;
          width: max-content;
        }
        
        .marquee-line-2 {
          animation: marquee3 35s linear infinite;
          width: max-content;
        }
        
        .marquee-line-0:hover,
        .marquee-line-1:hover,
        .marquee-line-2:hover {
          animation-play-state: paused;
        }
        
        .clients-section {
          font-family: tungstenw05-medium, Oswald, sans-serif;
        }
        
        @media (max-width: 768px) {
          .marquee-line-0 { animation-duration: 15s; }
          .marquee-line-1 { animation-duration: 20s; }
          .marquee-line-2 { animation-duration: 25s; }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
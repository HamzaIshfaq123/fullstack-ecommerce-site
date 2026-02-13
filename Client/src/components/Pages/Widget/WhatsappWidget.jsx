import React from 'react';
import { Whatsapp } from 'react-bootstrap-icons';

const WhatsAppWidget = () => {
  // Replace with your actual number (include country code, no +, no spaces)
  // Example: 923001234567 for Pakistan
  const phoneNumber = "923344205601"; 
  const message = encodeURIComponent("Hello! I'm interested in one of your products.");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group flex flex-col items-end">
      {/* Tooltip/Chat bubble */}
      <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs font-bold text-gray-700">Chat with us</p>
      </div>

      {/* The Actual Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] p-4 rounded-full text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
      >
        <Whatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
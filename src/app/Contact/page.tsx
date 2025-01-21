// src/app/Contact/page.tsx

import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">Feel free to reach out to us for any inquiries!</p>
      
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" required />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" required />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">Message</label>
          <textarea id="message" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message" required />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;

export default function ContactPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">We’d love to hear from you! Please fill out the form below.</p>
  
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
  
          <button
            type="submit"
            className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
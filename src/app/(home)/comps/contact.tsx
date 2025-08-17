import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";


const ContactPage = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_2dy95d3",
        "template_7l97rz5",
        {
          from_name: formData.name,
          to_name: "Yash",
          from_email: formData.email,
          to_email: "princeyashc7568@gmail.com",
          message: formData.message,
        },
        "oXleLzeeQbF5cIX1a"
      );
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return ( 
    <div className="bg-[rgb(18,17,17)] text-zinc-400 min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-10 py-16 border-b md:border-b-0 md:border-r border-zinc-700 md:my-24">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>
          <p className="text-lg mb-8">
            Let&apos;s work together! Fill out the form or reach me directly at:
          </p>
          <div className="space-y-4">
            <p><span className="font-semibold text-white">Email:</span> princeyashc7568@gmail.com</p>
            <p><span className="font-semibold text-white">Phone:</span> +91 8299549930</p>
            <p><span className="font-semibold text-white">Location:</span> Lucknow, India</p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-16">
          <form className="space-y-6" onSubmit={handleSumbit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                id="name"
                name="name"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text" 
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                id="email"
                name="email"
                type="email"
                placeholder="JohnDoe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-700 py-6 text-center text-sm">
        <p className="text-zinc-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <motion.a whileHover={{scale: 1.5}} target="_blank" href="#" className="hover:text-pink-400 transition"><FaTwitter /></motion.a>
          <motion.a whileHover={{scale: 1.5}} target="_blank" href="#" className="hover:text-blue-600 transition"><FaLinkedin /></motion.a>
          <motion.a whileHover={{scale: 1.5}} target="_blank" href="#" className="hover:text-gray-400 transition"><FaGithub /></motion.a>
        </div>
      </footer>
    </div>
   );
}
 
export default ContactPage;

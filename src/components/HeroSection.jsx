import React, { useEffect, useState } from "react";
import ServiceSection from "./ServiceSection";
import PricingCard from "./PricingCard";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search) {
        setFilteredUsers([]); 
        return;
      }

      const matchedUsers = users.filter((user) =>
        user.name.toLowerCase().startsWith(search.toLowerCase())
      );

      setFilteredUsers(matchedUsers);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, users]);

  return (
    <div className="relative w-full text-white overflow-hidden">
      <div className="h-screen w-full flex items-center justify-center absolute">
        <img
          src="https://images.unsplash.com/photo-1735825764460-c5dec05d6253?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-6xl font-bold">Welcome to Our Services</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Learn More
        </button>
        <div className="w-full max-w-lg mt-4">
          <input
            type="text"
            value={search}
            placeholder="Search..."
            className="input input-bordered bg-base-100 w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="p-4 shadow-md rounded-lg bg-white">
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="text-lg font-semibold text-center mt-2">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500 text-center">{user.email}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-base-300 p-4">
        <h2 className="text-center text-4xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {["Web Development", "Mobile Development", "UI/UX Design", "SEO", "Digital Marketing", "Content Writing"].map((service, index) => (
            <ServiceSection key={index} service={service} />
          ))}
        </div>
      </div>

      <div className="bg-base-200 p-4">
        <h2 className="text-center text-4xl font-bold">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {[
            { plan: "Basic", price: "$29/mo" },
            { plan: "Pro", price: "$59/mo" },
            { plan: "Enterprise", price: "$99/mo" }
          ].map((pricingService, index) => (
            <PricingCard key={index} pricingService={pricingService} />
          ))}
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default HeroSection;

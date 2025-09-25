"use client";

import { useEffect, useState } from "react";
import ThreeScene from "@/component/ThreeScene";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Slot = {
  id: string;
  date: string;
  booked: boolean;
};

export default function Home() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const fetchSlots = async () => {
    try {
      const res = await fetch("/api/slots");
      const data = await res.json();
      setSlots(data);
    } catch (err) {
      console.error("Failed to fetch slots:", err);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const router = useRouter();

  useEffect(() => {
    fetch("/api/slots")
      .then(res => res.json())
      .then(data => setSlots(data))
      .catch(err => console.error("Failed to fetch slots:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !name || !email || !phone) {
      return alert("All fields are required.");
    }

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedSlot, name, email, phone }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to book slot");

      alert("Booking successful!");
      router.push(`/success/${selectedSlot}`);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Failed to book slot.");
    }
  };
  const cards = [
    {
      id: 1,
      title: "Lead Generation",
      desc: "We build hyper-targeted ad campaigns and landing pages that put real case leads in your pipeline.",
      image: "/lead-generation.webp",
    },
    {
      id: 2,
      title: "AI Lead Nurturing",
      desc: "Every lead gets a fast, intelligent response that moves them from interest to booked consultation.",
      image: "/AI_Lead_Nurturing__COVER_.PNG",
    },
    {
      id: 3,
      title: "'Clickable' Legal Content",
      desc: "We write lead articles that rank, get read, and drive actual case enquiries across major platforms.",
      image: "/legalContent.jpg",
    },
  ];

  const benefits = [
    {
      id: 1,
      title: "Lower Add Cost",
      desc: "Run lean, not loud. We cut wasted spend and get more booked consults with less. This starts with an extensive ad audit.",
    },
    {
      id: 2,
      title: "Better Case Quality",
      desc: "We don’t just bring in leads. We bring in the right ones. High-intent, practice-area matched, ready to pay.",
    },
    {
      id: 3,
      title: "Time Back for Your Team",
      desc: "Our systems handle the busy work, from intake flows to follow-ups. Finally, your staff can focus on real cases.",
    },
  ];

  const pricing = [
    {
      id: 1,
      level: "Solo",
      price: "$987/month",
      desc: "Essential tools and features for starting your journey with ease.",
      btn: "Go with this plan",
      benefits: [
        "Google Ads campaign setup & management",
        "High-converting landing page (yours to keep)",
        "CRM setup & AI lead nurturing",
        "Slack Support 24/7",
        "1 consultation a month with Rudi",
      ],
    },
    {
      id: 2,
      level: "Small (2-10)",
      price: "$1,487/month",
      desc: "Advanced capabilities designed to meet growing business needs.",
      btn: "Go with this plan",
      benefits: [
        "Everything in Solo, plus:",
        "Multiple Campaign Set Up",
        "Intake and sales training modules and support",
        "Slack Support 24/7",
        "2 consultations a month with Rudi",
      ],
    },
    {
      id: 3,
      level: "Enterprise (10+)",
      price: "Custom",
      desc: "Comprehensive solutions tailored for large-scale business success.",
      btn: "Schedule a call",
      benefits: [
        "All features from Small Firm",
        "5+ landing pages and Google Ads campaigns",
        "30+ legal content pieces",
        "24hr+ priority support",
        "24/7 support & advanced reporting dashboard",
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      desc: "Didn’t even plan to sign up, just booked a strategy call to see what they’d say. Broke down exactly where our agency flawed.",
      img: "https://placehold.co/50x50",
      name: "Dean Watson",
      designation: "Managing Partner",
    },
    {
      id: 2,
      desc: "The entire experience, from consultation to execution, was seamless. Rudi had a genuine commitment to our success...",
      img: "https://placehold.co/50x50",
      name: "Rosa Nobarani",
      designation: "Top 30 Lawyer Finalist",
    },
    {
      id: 3,
      desc: "We used their SEO articles for wills and estates. enquiries started coming in within a month. Best decision we made...",
      img: "https://placehold.co/50x50",
      name: "James Carter",
      designation: "Marketing Director",
    },
    {
      id: 4,
      desc: "The intake flows they set up saved our receptionist hours each day. Really, really helpful. Thank you.",
      img: "https://placehold.co/50x50",
      name: "Zhong Cho",
      designation: "Law Firm Owner",
    },
    {
      id: 5,
      desc: "We are ranked 1st for our practice area for so many major terms in Saudi. It was honestly such excellent work. ",
      img: "https://placehold.co/50x50",
      name: "",
      designation: "Law Firm Consultant",
    },
    {
      id: 6,
      desc: "Read the book, joined the Skool group, and implemented 2 things. Got a consult request by the next morning... ",
      img: "https://placehold.co/50x50",
      name: "Priya Sharma",
      designation: "Law Firm Owner",
    },
  ];

  const faqs = [
    {
      question: "What kind of results can I realistically expect from Google Ads?",
      answer:
        "If you're in a competitive area and your intake system is solid, most firms start seeing booked consults within 1-2 months. We track everything — so you'll know exactly where every dollar goes and what it brings in.",
    },
    {
      question: "We’ve tried agencies before and got burnt. What makes you different?",
      answer:
        "We only work with law firms. No cafes, no ecommerce brands. Our team understands legal client behaviour, legal language, and how to build campaigns that convert — not just attract clicks.",
    },
    {
      question: "How much does it cost to get started?",
      answer: "Our pricing depends on your campaign size and goals. We’ll provide a custom quote after a quick consultation.",
    },
    {
      question: "What if I’m not tech-savvy? Will I need to do a lot myself?",
      answer: "Not at all. We handle all the technical setup and campaign management for you.",
    },
    {
      question: "Do you lock clients into long-term contracts?",
      answer: "Nope. We operate on a month-to-month basis so you stay flexible.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {/* Hero / Process Section */}
      <section id="process" className="relative flex items-center justify-center h-screen text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ThreeScene />
        </div>
        <div className="text-center max-w-3xl px-4">
          <p className="inline-block mb-6 px-4 py-1.5 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 border border-white/10 rounded-lg text-sm text-gray-200 shadow-md">
            Limitless Legal – Law Firm Growth Consulting
          </p>
          <h1 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight">
            Work with the team that wrote the <br />
            playbook on{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Law Firm Growth
            </span>.
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            Stop babysitting your ads agency. Stop praying to the internet Gods
            for clients. Work directly with the{" "}
            <span className="font-semibold text-white">best in the world.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-sm font-medium transition shadow-lg hover:shadow-indigo-600/40"
            >
              Work 1-1 With Us ↗
            </Link>
            <Link
              href="#book"
              className="px-6 py-3 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/10 transition backdrop-blur-md"
            >
              No.1 Best Selling Book
            </Link>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section id="what-we-do" className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Secure high-value clients without chasing leads or micromanaging your agency
          </h2>
          <p className="text-lg text-gray-400">
            This is exactly what we do. <br /> Three powerful pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group border border-white/10 p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] hover:from-indigo-600/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="flex justify-center items-center h-72 mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md group-hover:shadow-indigo-500/30 transition object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We hate{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              agencies too.
            </span>{" "}
            This is why we operate differently
          </h2>
          <p>Discover the key benefits of partnering with us. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group border border-white/10 p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] hover:from-indigo-600/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/20"
            >
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible Plans for{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <p>
            Transparent pricing designed to fit your requirements.{" "}
            <span className="font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Two month minimum.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 max-w-6xl mx-auto">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className="group border border-white/10 p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] hover:from-indigo-600/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/20"
            >
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {plan.level}
              </h3>
              <p className="text-gray-300 leading-relaxed text-2xl">
                {plan.price}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                {plan.desc}
              </p>

              <button className="mt-8 w-full py-2 px-6 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition-colors">
                {plan.btn}
              </button>

              <ul className="mt-4 space-y-2 text-gray-400">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-indigo-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by Law firms{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              All Over the World
            </span>
          </h2>
          <p>Discover the key benefits of partnering with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group border border-white/10 p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] hover:from-indigo-600/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/20 flex flex-col items-center text-center"
            >
              {testimonial.img && (
                <Image
                  src={testimonial.img}
                  alt={testimonial.name || "Client"}
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
              )}

              <p className="text-gray-300 leading-relaxed">
                {testimonial.desc}
              </p>
              {testimonial.name && (
                <h3 className="mt-4 text-2xl font-bold mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {testimonial.name}
                </h3>
              )}
              <p className="text-lg font-semibold text-gray-400">
                {testimonial.designation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text">
              Take a step forward for your law firm.
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-400 max-w-lg">
              Whether you have questions or are ready to discuss your law firm's
              growth plan, we're here to help. Reach out today.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-3xl max-w-sm w-full shadow-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Law Firm Strategy Call</h2>
                <Image
                  src="https://placehold.co/50x50/333333/cccccc?text=P"
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-purple-400"
                />
              </div>

              <div className="mt-6 space-y-3 text-gray-300 text-sm">
                <div className="flex items-center">
                  <i className="fa-solid fa-clock mr-3 text-purple-400"></i>
                  <span>30 Mins</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-calendar mr-3 text-purple-400"></i>
                  <span>Sun, Sep 28, 2025</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-globe mr-3 text-purple-400"></i>
                  <span>Australia/Sydney Time</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Book Your Slot</h2>

                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-1">Name</label>
                  <input
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white border border-gray-600"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white border border-gray-600"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="mb-1">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white border border-gray-600"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="slot" className="mb-1">Select Slot</label>
                  <select
                    id="slot"
                    value={selectedSlot}
                    onChange={e => setSelectedSlot(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white border border-gray-600"
                    required
                  >
                    <option value="">-- Choose a Slot --</option>
                    {slots.map(slot => (
                      <option key={slot.id} value={slot.id} disabled={slot.booked}>
                        {new Date(slot.date).toLocaleString()} {slot.booked ? "(Booked)" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold transition"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Questions? Read this
          </h2>
          <p>These are questions we actually get. Read it. Might be useful.</p>
        </div>

        <div className="mt-16 px-4 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

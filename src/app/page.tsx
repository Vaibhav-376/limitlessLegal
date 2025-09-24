import ThreeScene from "@/component/ThreeScene";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    { id: 1, title: "Lower Add Cost", desc: "Run lean, not loud. We cut wasted spend and get more booked consults with less. This starts with an extensive ad audit." },
    { id: 2, title: "Better Case Quality", desc: "We don’t just bring in leads. We bring in the right ones. High-intent, practice-area matched, ready to pay." },
    { id: 3, title: "Time Back for Your Team", desc: "Our systems handle the busy work, from intake flows to follow-ups. Finally, your staff can focus on real cases." }
  ]

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

  return (
    <div className="">
      <section className="relative flex items-center justify-center h-screen text-white overflow-hidden">
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
            </span>
            .
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


      <section className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Secure high-value clients without chasing leads or micromanaging
            your agency
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

      <section className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We hate <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> agencies too.</span> This is why we operate diffrently
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


      <section className="text-white py-20 bg-[#010103] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible Plans for<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Growth</span>
          </h2>
          <p>Transparent pricing designed to fit your requirements.</p><span className="font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Two month minimum.</span>
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
              <p className="text-gray-300 leading-relaxed text-2xl">{plan.price}</p>
              <p className="text-gray-400 leading-relaxed text-sm">{plan.desc}</p>

              <button className="mt-8 w-full py-2 px-6 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition-colors">
                {plan.btn}
              </button>

              <ul className="mt-4 space-y-2 text-gray-400">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

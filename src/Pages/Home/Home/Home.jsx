

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import TopScholarship from "../TopScholarship/TopScholarship";

const features = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#C18440]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Comprehensive Scholarship Database",
    description:
      "Access thousands of curated scholarships worldwide with filters tailored to your profile and goals.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#0A92B9]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16 8v8M8 8v8M12 4v16" />
        <path d="M4 12h16" />
      </svg>
    ),
    title: "Easy & Transparent Application",
    description:
      "Apply to multiple scholarships seamlessly with step-by-step guidance and real-time status updates.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#C18440]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Personalized Dashboard & Reminders",
    description:
      "Stay organized with a dashboard tracking deadlines, applications, and scholarship progress.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#0A92B9]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 01-3.4 6.6L12 21l-5.6-3.4A8.38 8.38 0 013 11.5a8.5 8.5 0 0117 0z" />
        <path d="M12 7v4l3 3" />
      </svg>
    ),
    title: "Dedicated Expert Support",
    description:
      "Get access to mentors and scholarship advisors ready to guide you through every step.",
  },
];

const steps = [
  {
    number: "1",
    title: "Search Scholarships",
    description:
      "Explore scholarships tailored to your field, location, and level of study with our powerful filters.",
  },
  {
    number: "2",
    title: "Apply Confidently",
    description:
      "Submit your applications online with clear instructions and get reminders on deadlines.",
  },
  {
    number: "3",
    title: "Track Progress",
    description:
      "Use your personalized dashboard to follow application statuses and receive expert advice.",
  },
];

const faqs = [
  {
    question: "Who can apply for scholarships on NextGen?",
    answer:
      "Students worldwide pursuing higher education who meet scholarship criteria can apply.",
  },
  {
    question: "Is there any application fee?",
    answer:
      "No, our platform is completely free to use, and most scholarships do not charge application fees.",
  },
  {
    question: "Can I apply to multiple scholarships at once?",
    answer:
      "Yes, our system allows multiple applications with a streamlined process for efficiency.",
  },
  {
    question: "How will I know if I’m selected?",
    answer:
      "You will receive notifications through your dashboard and email once scholarship decisions are made.",
  },
];

const Home = () => {
  return (
    <div className="space-y-1">
      <Banner />

      <Category />

      <TopScholarship />

      {/* Features Section */}
      <section className="py-10 bg-gradient-to-r from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-[#0A92B9] animate-fadeInUp">
            Why NextGen Scholarships Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map(({ icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center space-y-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-slideUp"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div>{icon}</div>
                <h3 className="text-2xl font-semibold text-[#C18440]">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-10 text-[#0A92B9] animate-fadeInUp">
            How It Works
          </h2>
          <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-700 leading-relaxed animate-fadeInUp delay-150">
            Discover the simple 3-step process that will open doors to your dream scholarships with NextGen.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
            {steps.map(({ number, title, description }, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-2xl p-8 shadow-md flex-1 flex flex-col items-center text-center animate-slideUp"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="text-6xl font-extrabold text-[#C18440] mb-6">{number}</div>
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Call to Action */}
      <section className="py-10 bg-gradient-to-r from-[#0A92B9] to-[#087a9c] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">
            Stay Ahead With Exclusive Scholarship Updates
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest scholarship opportunities, tips, and expert advice.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-[#C18440] hover:bg-yellow-500 px-10 py-4 rounded-full font-semibold text-white shadow-lg transition duration-300 transform hover:scale-105"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Real Impact Stories */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 text-[#0A92B9] animate-fadeInUp">
              Real Stories. Real Impact.
            </h2>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed animate-fadeInUp delay-150">
              Hear directly from our scholarship recipients who have transformed their lives and careers through NextGen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                img: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                name: "Ayesha Rahman",
                story:
                  "“NextGen gave me the chance to attend TU Berlin with a full scholarship. I’m the first engineer in my family.”",
                program: "Mechanical Engineering",
                country: "Germany",
                year: "2023",
              },
              {
                img: "https://i.ibb.co/rG5y8bT/user-2.jpg",
                name: "Mehedi Hasan",
                story:
                  "“Studying Data Science in Toronto changed my life. NextGen helped me break through the walls of affordability.”",
                program: "Data Science",
                country: "Canada",
                year: "2022",
              },
              {
                img: "https://i.ibb.co/9NpNpYx/user-3.jpg",
                name: "Raisa Islam",
                story:
                  "“From a small village to med school — I couldn’t have done it without this platform and the amazing mentors.”",
                program: "Medicine",
                country: "Bangladesh",
                year: "2024",
              },
            ].map(({ img, name, story, program, country, year }, idx) => (
              <div
                key={idx}
                className="bg-[#f9fafb] rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-4 transition duration-300 cursor-pointer animate-slideUp"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-[#0A92B9]"
                />
                <h3 className="text-2xl font-semibold text-center text-[#C18440] mb-4">{name}</h3>
                <p className="text-center italic text-gray-700 mb-6">{story}</p>
                <ul className="text-sm text-gray-500 space-y-1 text-center">
                  <li>
                    <strong>🎓 Program:</strong> {program}
                  </li>
                  <li>
                    <strong>🌍 Country:</strong> {country}
                  </li>
                  <li>
                    <strong>📅 Year Awarded:</strong> {year}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <h4 className="text-2xl font-semibold mb-6 text-gray-700">
              Want to be featured here?
            </h4>
            <button className="bg-[#0A92B9] hover:bg-[#087a9c] text-white px-10 py-4 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105">
              Share Your Story
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-14 text-[#0A92B9] animate-fadeInUp">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map(({ question, answer }, idx) => (
              <details
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-6 cursor-pointer group"
              >
                <summary className="text-xl font-semibold text-[#C18440] list-none flex justify-between items-center">
                  {question}
                  <svg
                    className="w-6 h-6 text-[#0A92B9] group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;

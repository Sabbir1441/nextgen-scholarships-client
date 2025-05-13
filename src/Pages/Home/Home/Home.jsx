import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import TopScholarship from "../TopScholarship/TopScholarship";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <TopScholarship></TopScholarship>


            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Why Choose NextGen Scholarships?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-[#C18440] mb-4">
                                Comprehensive Search
                            </h3>
                            <p className="text-gray-600">
                                Access a vast database of universities and scholarships tailored to your profile and preferences.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-[#C18440] mb-4">
                                Simplified Application
                            </h3>
                            <p className="text-gray-600">
                                Apply for scholarships directly through the platform with user-friendly tools and guidance.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-[#C18440] mb-4">
                                Personalized Dashboard
                            </h3>
                            <p className="text-gray-600">
                                Track your applications, deadlines, and progress in one place, designed just for you.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-[#C18440] mb-4">
                                Expert Support
                            </h3>
                            <p className="text-gray-600">
                                Get help from experienced mentors and a supportive community to maximize your chances of success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-12 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                        NextGen Scholarships streamlines the scholarship application process with an intuitive and user-friendly approach. Here’s how:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Step 1 */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                            <div className="text-4xl text-[#C18440] font-bold mb-4">1</div>
                            <h3 className="text-xl font-semibold mb-2">Search Scholarships</h3>
                            <p className="text-gray-600">
                                Find scholarships that match your qualifications and aspirations from a comprehensive database.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                            <div className="text-4xl text-[#C18440] font-bold mb-4">2</div>
                            <h3 className="text-xl font-semibold mb-2">Apply Easily</h3>
                            <p className="text-gray-600">
                                Submit applications directly through the platform with step-by-step guidance and support.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                            <div className="text-4xl text-[#C18440] font-bold mb-4">3</div>
                            <h3 className="text-xl font-semibold mb-2">Track Applications</h3>
                            <p className="text-gray-600">
                                Keep tabs on your application status and receive notifications for important updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-12 bg-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Stay Updated with the Latest Scholarships
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Join thousands of ambitious students who get early access to scholarship opportunities, tips, and expert insights—straight to their inbox.
                    </p>

                    <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A92B9]"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#C18440] hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                        >
                            Subscribe Now
                        </button>
                    </form>

                    <p className="text-sm text-gray-500 mt-6 max-w-md mx-auto">
                        We respect your privacy. Your email will only be used for scholarship updates. Unsubscribe at any time.
                    </p>
                </div>
            </section>



            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">
                            Real Stories. Real Impact.
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto animate-fadeIn delay-200">
                            Discover how NextGen Scholarships have changed the lives of countless students around the world by removing financial barriers and opening doors to world-class education.
                        </p>
                    </div>

                    {/* Stories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 animate-slideUp">
                            <img
                                src="https://i.ibb.co/ZYW3VTp/brown-brim.png"
                                alt="Ayesha"
                                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center text-[#C18440] mb-2">Ayesha Rahman</h3>
                            <p className="text-center italic text-gray-600 mb-3">
                                “NextGen gave me the chance to attend TU Berlin with a full scholarship. I’m the first engineer in my family.”
                            </p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li><strong>🎓 Program:</strong> Mechanical Engineering</li>
                                <li><strong>🌍 Country:</strong> Germany</li>
                                <li><strong>📅 Year Awarded:</strong> 2023</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 animate-slideUp delay-200">
                            <img
                                src="https://i.ibb.co/rG5y8bT/user-2.jpg"
                                alt="Mehedi"
                                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center text-[#C18440] mb-2">Mehedi Hasan</h3>
                            <p className="text-center italic text-gray-600 mb-3">
                                “Studying Data Science in Toronto changed my life. NextGen helped me break through the walls of affordability.”
                            </p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li><strong>🎓 Program:</strong> Data Science</li>
                                <li><strong>🌍 Country:</strong> Canada</li>
                                <li><strong>📅 Year Awarded:</strong> 2022</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 animate-slideUp delay-300">
                            <img
                                src="https://i.ibb.co/9NpNpYx/user-3.jpg"
                                alt="Raisa"
                                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center text-[#C18440] mb-2">Raisa Islam</h3>
                            <p className="text-center italic text-gray-600 mb-3">
                                “From a small village to med school — I couldn’t have done it without this platform and the amazing mentors.”
                            </p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li><strong>🎓 Program:</strong> Medicine</li>
                                <li><strong>🌍 Country:</strong> Bangladesh</li>
                                <li><strong>📅 Year Awarded:</strong> 2024</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-14 animate-fadeIn delay-500">
                        <h4 className="text-xl font-semibold mb-4 text-gray-700">
                            Want to be featured here?
                        </h4>
                        <button className="bg-[#0A92B9] hover:bg-[#087a9c] text-white px-6 py-3 rounded-full font-semibold transition duration-300">
                            Share Your Story
                        </button>
                    </div>
                </div>
            </section>






        </div>
    );
};

export default Home;
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
                    <h2 className="text-4xl font-bold text-[#0A92B9] text-center mb-6">
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
                    <h2 className="text-4xl font-bold text-[#0A92B9] mb-6">How It Works</h2>
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



        </div>
    );
};

export default Home;
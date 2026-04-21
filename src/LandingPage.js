import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Map, Shield, CheckCircle2, Send } from "lucide-react";
import cityscape from "./assets/cityscape.jpeg";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans overflow-y-auto">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">Mulika 2.0</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a
              href="#about"
              className="hover:text-blue-600 transition-colors border-b-2 border-blue-600 text-blue-600"
            >
              About
            </a>
            <a
              href="#safety-tips"
              className="hover:text-blue-600 transition-colors"
            >
              Safety Tips
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden md:block">
              Login
            </button>
            <button
              onClick={() => navigate("/report")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-blue-200"
            >
              Report an Incident
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wider mb-8 uppercase">
          Community Intelligence Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Your Intelligence <br /> Helps Keep the <br /> Community Safe.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Empowering citizens with real-time safety data and streamlined
          incident reporting to build a more resilient neighborhood.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/report")}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-colors shadow-xl shadow-blue-200"
          >
            {" "}
            Report an Incident
          </button>

          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 px-8 py-4 rounded-full text-base font-semibold transition-colors shadow-sm">
            View Safety Heatmap
          </button>
        </div>

        {/* Placeholder for the cityscape graphic from the mockup */}
        <div className="mt-16 relative max-w-4xl mx-auto h-100 rounded-t-3xl ">
          <img
            src={cityscape}
            alt="Cityscape"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-blue-600">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Quick Reporting</h3>
            <p className="text-slate-600 leading-relaxed">
              Report incidents in seconds with photo and location data. Our
              streamlined interface ensures authorities get the right
              information instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-blue-600">
              <Map size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Live Heatmap</h3>
            <p className="text-slate-600 leading-relaxed">
              Stay informed with real-time safety trends in your neighborhood.
              Visualize risk zones and community-verified safe passages.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-red-500">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Anonymous Tips</h3>
            <p className="text-slate-600 leading-relaxed">
              Share information safely with end-to-end encryption. Your identity
              is protected by the highest standards of digital privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Info/Stats Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-100/50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="text-blue-600 font-semibold tracking-wider text-sm mb-4 uppercase">
              Measurable Safety
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Bridging the gap between citizens and authorities.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mulika 2.0 acts as the digital intelligence layer for your
              community. By decentralizing incident reporting, we enable local
              authorities to respond 40% faster and focus resources where they
              are needed most.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="text-blue-600 mr-3" size={20} />
                93% reporting accuracy through validation
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="text-blue-600 mr-3" size={20} />
                Verified by local law enforcement and NGOs
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="text-blue-600 mr-3" size={20} />
                Open data architecture for community transparency
              </li>
            </ul>
          </div>

          {/* Chart Mockup */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-sm">
                <div className="text-blue-600 font-bold mb-1 text-xs">
                  📈 24 h LIVE ANALYTICS
                </div>
                Safe passage increased in
                <br />
                Downtown Sector 4
              </div>
              <h4 className="text-sm text-gray-500 font-medium mb-1">
                Safety Growth
              </h4>
              <div className="text-4xl font-extrabold mb-8">+24.8%</div>
              <div className="flex items-end justify-between h-48 gap-2">
                {/* Simulated Chart Bars */}
                <div className="w-full bg-gray-200 rounded-t-lg h-1/4"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-1/3"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-1/4"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-1/2"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-2/5"></div>
                <div className="w-full bg-blue-500 rounded-t-lg h-full"></div>
                <div className="w-full bg-blue-400 rounded-t-lg h-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-[#0A1940] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to make your <br /> neighborhood safer?
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join over 50,000 citizens contributing to real-time safety
              intelligence. Every report helps build a clearer picture of
              community security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-[#0A1940] px-8 py-4 rounded-full text-base font-bold transition-colors hover:bg-gray-100">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-blue-400 text-white px-8 py-4 rounded-full text-base font-semibold transition-colors hover:bg-blue-800/50">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">
                Mulika 2.0
              </div>
              <p className="text-sm leading-relaxed">
                Intelligence-led community safety for the digital age.
                Empowering citizens, protecting neighborhoods.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emergency Contacts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Stay Alert</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg flex items-center justify-center transition-colors">
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-xs">
            <p>© 2026 Mulika 2.0 Community Safety. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

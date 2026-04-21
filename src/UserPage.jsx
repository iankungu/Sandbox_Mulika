import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Search,
  UploadCloud,
  Phone,
  Lightbulb,
  ChevronDown,
  Check,
} from "lucide-react";

const ReportingPage = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  const crimeTypes = [
    "Theft",
    "Burglary",
    "Robbery",
    "Armed robbery",
    "Assault",
    "Murder",
    "Manslaughter",
    "Fraud",
    "Corruption",
    "Cybercrime",
    "Drug trafficking",
    "Human trafficking",
    "Domestic violence",
    "Sexual assault",
    "Kidnapping",
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="text-xl font-bold text-slate-900"
          >
            Mulika 2.0
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 items-center">
            <a
              href="#"
              className="text-blue-600 border-b-2 border-blue-600 py-5"
            >
              Report an Incident
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              My Reports
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Live Heatmaps
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
              Emergency Call
            </button>
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden md:block">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">
            Submit a Quick Report
          </h1>
          <p className="text-slate-500">
            Your intelligence helps keep the community safe.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: The Scrollable Form (Larger Side) */}
          <div className="lg:col-span-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            {/* Form Progress Bar indicator (Top) */}
            <div className="w-1/3 h-1 bg-blue-500 rounded-full mb-8"></div>

            <form className="space-y-10">
              {/* 1. What Happened (Dropdown) */}
              <section>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    1
                  </span>
                  <h2 className="text-lg font-bold">What happened?</h2>
                </div>
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium">
                    <option value="" disabled selected>
                      Select the type of crime...
                    </option>
                    {crimeTypes.map((crime, index) => (
                      <option key={index} value={crime}>
                        {crime}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </section>

              {/* 2. Where did it happen? */}
              <section>
                <div className="flex items-center mb-4">
                  <span className="bg-gray-600 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    2
                  </span>
                  <h2 className="text-lg font-bold">Where did it happen?</h2>
                </div>

                {/* Map Displayer Placeholder */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                  {/* Simulated Map UI */}
                  <div className="absolute text-red-500 drop-shadow-md">
                    <MapPin size={50} className="fill-current text-white" />
                  </div>
                  <button
                    type="button"
                    className="absolute bottom-4 right-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold shadow-md flex items-center gap-2 hover:bg-gray-50"
                  >
                    <MapPin size={16} /> Pin Location
                  </button>
                </div>

                {/* Location Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter street address, city, landmark, or constituency"
                    className="w-full bg-gray-50 border border-gray-200 text-slate-900 py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </section>

              {/* 3. Date and Time Picker */}
              <section>
                <div className="flex items-center mb-4">
                  <span className="bg-gray-100 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    3
                  </span>
                  <h2 className="text-lg font-bold">When did it happen?</h2>
                </div>
                <input
                  type="datetime-local"
                  className="w-full bg-gray-50 border border-gray-200 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </section>

              {/* 4. Incident Details */}
              <section>
                <div className="flex items-center mb-4">
                  <span className="bg-gray-100 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    4
                  </span>
                  <h2 className="text-lg font-bold">Incident Details</h2>
                </div>
                <textarea
                  rows="4"
                  placeholder="Describe the incident in detail... What happened? Who was involved? Were there weapons?"
                  className="w-full bg-gray-50 border border-gray-200 text-slate-900 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </section>

              {/* 5. Upload Evidence */}
              <section>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <UploadCloud
                    size={32}
                    className="mx-auto text-slate-400 mb-3"
                  />
                  <p className="font-semibold text-slate-700">
                    Upload Evidence (Photos, Videos, Audio, Docs)
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Max 25MB per file. PNG, JPG, MP4, MP3, PDF supported.
                  </p>
                </div>
              </section>

              {/* 6. Report Anonymously Slider */}
              <section className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex items-start justify-between">
                <div className="pr-4">
                  <h3 className="font-bold text-slate-900 mb-1">
                    Report Anonymously
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Your identity will be completely masked from responding
                    officers. Intelligence will still be processed, but you
                    won't receive direct follow-up calls unless requested.
                  </p>
                </div>

                {/* Custom Toggle Switch */}
                <button
                  type="button"
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isAnonymous ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      isAnonymous ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
              </section>

              {/* 7. Submit Button */}
              <button
                type="button"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-200 text-lg"
              >
                Submit Report to Authorities
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: The Sidebar (Smaller Side) */}
          <div className="lg:col-span-4 space-y-6">
            {/* My Recent Reports Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 text-lg">
                  My Recent Reports
                </h3>
                <a
                  href="#"
                  className="text-xs font-bold text-blue-600 uppercase tracking-wider"
                >
                  View All
                </a>
              </div>

              <div className="space-y-4">
                {/* Report Item 1 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <p className="font-bold text-sm text-slate-800">
                      Theft at Central Park
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      ID: #MUK-8291 • 2 HOURS AGO
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">
                    IN REVIEW
                  </span>
                </div>

                {/* Report Item 2 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <p className="font-bold text-sm text-slate-800">
                      Vandalism on Main St
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      ID: #MUK-7440 • YESTERDAY
                    </p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-full">
                    DISPATCHED
                  </span>
                </div>

                {/* Report Item 3 */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <p className="font-bold text-sm text-slate-800">
                      Suspicious Activity
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      ID: #MUK-6112 • 3 DAYS AGO
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">
                    RESOLVED
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Call Card */}
            <div className="bg-[#0A1940] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center mb-3 text-blue-200">
                <Phone size={20} className="mr-2" />
                <h3 className="font-bold">Emergency Assistance</h3>
              </div>
              <p className="text-sm text-blue-100 mb-5 leading-relaxed">
                Available 24/7 for life-threatening situations and active crimes
                in progress.
              </p>
              <div className="bg-white text-[#0A1940] inline-block px-6 py-2 rounded-lg font-black text-2xl tracking-widest shadow-inner">
                999 / 112
              </div>
            </div>

            {/* Safety Tip Card */}
            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-3">
                <Lightbulb size={20} className="text-red-500 mr-2" />
                <h3 className="font-bold text-slate-900">
                  Safety Tip of the Day
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ensure all ground-floor windows are locked before dusk. Most
                opportunistic thefts occur between 6 PM and 9 PM.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-slate-900 mb-1">Mulika 2.0</div>
            <p className="text-xs text-slate-500">
              © 2026 Mulika 2.0. Dedicated to Community Safety.
            </p>
          </div>
          <div className="flex space-x-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <a href="#" className="text-blue-600">
              Emergency Hotline: 999
            </a>
            <a href="#" className="hover:text-slate-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-800">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-800">
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReportingPage;

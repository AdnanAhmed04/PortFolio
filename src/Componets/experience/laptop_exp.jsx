import React, { useState, useEffect } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = ({ language = {} }) => {
  // Default fallback language values
  const defaultLanguage = {
    professional_experience: "Professional Experience",
    year: "year",
    years: "years",
    month: "month",
    months: "months",
    and: "and",
    expand_details: "Expand details",
    collapse_details: "Collapse details",
    present: "Present",
  };

  // Use default values for language if not provided
  const lang = { ...defaultLanguage, ...language };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const experience = [
   
    {
      comp_name: " Cod Soft",
      designation: "Front end Developer",
      startDate: "Seo 2023 - Oct 2023 (2 month)",
      present: false,
      imgurl: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png",
      skills: ["React", "TailwindCSS", "Material UI", "JavaScript", "AOS", "Framer Motion","Git"],
      description: "Developing fully responsive applications based on client requirements.",
    },
    {
      comp_name: "Rawts",
      designation: "Front end Developer",
      startDate: "Aug 2024 - Oct 2024 (3 months)",
      present: false,
      imgurl: "https://www.rawts.com.pk/static/RAWTS-LOGO-2242aab9f87e5e3e8e46cb0666e0ae17.svg",
      skills: ["React", "AWS S3", 'TailwindCSS', "Git", "Gatsby","AOS","GitHub",],
      description: "Creating scalable web applications and deploying cloud-based solutions.",
    },
    {
      comp_name: "Virtual Care",
      designation: "Full Stack Engineer",
      startDate: "Jun 2025 - Mar 2026 · 10 mos",
      present: false,
      skills: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Material UI", "JavaScript", "REST API", "Git"],
      description: "Built and maintained full stack web applications, handling both frontend and backend development.",
    },
    {
      comp_name: "TailorFlow AI",
      designation: "Full Stack Engineer",
      startDate: "Apr 2026 - Present",
      present: true,
      skills: ["React Native", "Supabase", "Material UI", "LLM Implementation", "JavaScript", "REST API", "Git"],
      description: "Developing an AI-powered mobile application using Supabase and Material UI.",
    },
  ];

  const calculateDuration = (startDate) => {
    const currentDate = new Date();
    const start = new Date(startDate.split(" - ")[0]);
    const monthsDiff =
      (currentDate.getFullYear() - start.getFullYear()) * 12 +
      (currentDate.getMonth() - start.getMonth() + 1);
    const years = Math.floor(monthsDiff / 12);
    const remainingMonths = monthsDiff % 12;

    let durationString = "";
    if (years > 0) {
      durationString += `${years} ${years === 1 ? lang["year"] : lang["years"]}`;
    }
    if (remainingMonths > 0) {
      if (years > 0) durationString += " " + lang["and"] + " ";
      durationString += `${remainingMonths} ${remainingMonths === 1 ? lang["month"] : lang["months"]}`;
    }
    return durationString;
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back! We miss you!";
      } else {
        document.title = "Hey, Adnan! - Software Engineer - Mern Stack Developer";
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="w-full my-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {lang["professional_experience"]}
      </motion.h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Vertical Line */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-400 z-0"></div>

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 flex items-start w-full group ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-[51%] transform -translate-x-1/2 md:-translate-x-5 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10 transition-all duration-300 group-hover:scale-125"></div>

            {/* Timeline Card */}
            <div
              className={`relative w-full md:w-[45%] p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{exp.designation}</h2>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{exp.comp_name}</p>

                  {/* Date and Duration */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.startDate}</span>
                    {exp.present && (
                      <>
                        <span className="ml-2">{calculateDuration(exp.startDate)}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-12 h-12 relative flex-shrink-0">
                  {/* Replaced Image with img tag */}
                  {/* <img
                    src={exp.imgurl || "/placeholder.svg"}
                    alt={`${exp.comp_name} logo`}
                    className=" w-fit h-12 object-cover"
                  /> */}
                </div>

                {/* Expand/Collapse Button */}
                <button
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  aria-label={expandedIndex === index ? lang["collapse_details"] : lang["expand_details"]}
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-4"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

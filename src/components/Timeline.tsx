import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
    {
        title: "Sports Day",
        location: "Ramdeobaba University",
        period: "3 Feb 25 - 7 Feb 25",
        description: ["Play hard, play fair, and have fun!"],
        img: "/assets/event-timeline1.jpg",
        type: "work",
    },
    {
        title: "TechnoFest",
        location: "MCA Block",
        period: "7 Feb 25",
        description: ["Play hard, play fair, and have fun!"],
        img: "/assets/technofest.jpg",
        type: "work",
    },
    {
        title: "TRADITIONAL DAY",
        location: "Ramdeobaba University",
        period: "2024-26",
        description: ["Our traditions are the stories of our ancestors."],
        img: "/assets/event-timeline2.jpg",
        type: "work",
    },
    {
        title: "CULTURAL DAY",
        location: "Ramdeobaba University",
        period: "2024-26",
        description: [
            "A nation's culture resides in the hearts and in the soul of its people.",
        ],
        img: "/assets/event-timeline3.jpg",
        type: "work",
    },
];

const Timeline = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <section className="py-20" id="experience">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                        Events Journey
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative flex items-center mb-16 overflow-hidden ${
                                    index % 2 === 0
                                        ? "md:flex-row flex-col"
                                        : "md:flex-row-reverse flex-col"
                                }`}
                                data-aos={
                                    index % 2 === 0 ? "fade-right" : "fade-left"
                                }
                            >
                                {/* Timeline card */}
                                <div
                                    className={`md:w-1/2 w-full overflow-hidden ${
                                        index % 2 === 0
                                            ? "md:pr-12 pr-0"
                                            : "md:pl-12 pl-0"
                                    } ${
                                        index % 2 === 0
                                            ? "md:ml-0 ml-auto"
                                            : "md:mr-0 mr-auto"
                                    } relative z-10`}
                                    data-aos={
                                        index % 2 === 0
                                            ? "fade-right"
                                            : "fade-left"
                                    }
                                >
                                    <motion.div
                                        className="bg-gray-300 rounded-xl shadow-xl border border-white"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow:
                                                "0 10px 30px -15px rgba(249, 249, 249, 0.3)",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <img
                                            src={exp.img}
                                            className="w-full h-72 object-cover rounded-t-xl"
                                        />
                                        <div className="p-5 h-1/3">
                                            <h3 className="text-2xl font-bold text-primary mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-sm font-medium text-primary/60 mb-1">
                                                <span className="font-bold">
                                                    Venue:{" "}
                                                </span>
                                                {exp.location}
                                            </p>
                                            <p className="text-sm font-medium text-primary/60 mb-2">
                                                <span className="font-bold">
                                                    Date:{" "}
                                                </span>
                                                {exp.period}
                                            </p>
                                            {exp.description.length === 1 ? (
                                                <p className="text-gray-600 leading-relaxed">
                                                    {exp.description[0]}
                                                </p>
                                            ) : (
                                                <ul className="list-disc list-inside space-y-1">
                                                    {exp.description.map(
                                                        (achievement, i) => (
                                                            <li
                                                                key={i}
                                                                className="text-gray-600 text-sm leading-relaxed"
                                                            >
                                                                {achievement}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Timeline icon */}
                                <div
                                    className="absolute -ml-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-md"
                                    data-aos="zoom-in"
                                >
                                    {exp.type === "education" ? (
                                        <GraduationCap className="w-7 h-7 text-primary" />
                                    ) : (
                                        <Briefcase className="w-7 h-7 text-primary" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;

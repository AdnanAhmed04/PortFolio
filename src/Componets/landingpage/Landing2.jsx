import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaStackOverflow } from "react-icons/fa";
import { SiHackerrank, SiUpwork } from "react-icons/si";

const Landing2 = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);

    // Typing effect words
    const words = ["Responsive Design", "Attractive Design", "Efficient Websites"];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenWords = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[loop % words.length];

            if (!isDeleting) {
                setText(currentWord.substring(0, index + 1));
                setIndex(index + 1);
            } else {
                setText(currentWord.substring(0, index - 1));
                setIndex(index - 1);
            }

            if (!isDeleting && index === currentWord.length) {
                setTimeout(() => setIsDeleting(true), delayBetweenWords);
            }

            if (isDeleting && index === 0) {
                setIsDeleting(false);
                setLoop(loop + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, index, isDeleting, loop]);

    // Function to open the CV file
    const handleDownloadCV = () => {
        window.open("/src/Componets/landingpage/Adnan Ahmed CV.pdf", "_blank");
    };

    return (
        <div className="bg-[#0a0e2a] text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12 w-full">

                {/* Left Side - Text & Social Icons */}
                <div className="md:w-3/4 text-center md:text-left">
                    <h2 className="text-4xl font-semibold text-gray-300">Hi, I'm Adnan Ahmed</h2>
                    <h1 className="text-4xl font-bold text-yellow-400 mt-2">I'm enthusiastic about creating</h1>
                    <h2 className="text-3xl font-bold text-yellow-400 mt-2">
                        <span className="wrap">{text}</span><span className="cursor">|</span>
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Hello! I'm Adnan Ahmed, a Full Stack Developer with 4 months of experience, currently focused on
                        enhancing my skills (undergraduate). My expertise spans <u>JavaScript, React JS, Next Js,
                        MongoDB, Express JS, TailwindCSS, Bootstrap, SQL,</u> and more, enabling me to create responsive
                        and efficient web applications. With a passion for coding and a commitment to excellence,
                        I'm dedicated to turning your ideas into reality and ensuring that everything meets the
                        highest standards.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                        <a href="https://www.linkedin.com/in/adnan-ahmed-066847242/" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 bg-gray-100 p-2 rounded-full hover:text-blue-500 transition text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/AdnanAhmed04" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 bg-gray-100 p-2 rounded-full hover:text-gray-700 transition text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61561668212685&sk=friends" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 bg-gray-100 p-2 rounded-full hover:text-blue-500 transition text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="https://stackoverflow.com/users/27099467/adnan-ahmed" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 bg-gray-100 p-2 rounded-full hover:text-orange-500 transition text-2xl">
                            <FaStackOverflow />
                        </a>
                        <a href="https://www.hackerrank.com/profile/adnanahmed140221" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 bg-gray-100 p-2 rounded-full hover:text-green-900 transition text-2xl">
                            <SiHackerrank />
                        </a>
                        <a href="https://www.upwork.com/freelancers/~your-profile" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 bg-gray-100 p-2 rounded-full hover:text-green-500 transition text-2xl">
                            <SiUpwork />
                        </a>
                    </div>

                    {/* Hire Me Button */}
                    <button onClick={handleDownloadCV} className="bg-yellow-400 text-black px-4 py-2 rounded-lg mt-6 font-semibold hover:bg-yellow-500 transition">
                        Hire Me
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img src="/src/Componets/landingpage/banner-image.png" alt="Animation Designer" className="w-[400px] h-auto" />
                </div>

            </div>
        </div>
    );
};

export default Landing2;

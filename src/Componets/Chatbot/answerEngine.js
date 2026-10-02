// Lightweight, fully client-side rule/keyword based answer engine.
// Matches a visitor's question against Adnan's CV data and returns a relevant response.
// This runs entirely in the browser - no API key or backend required.

import { profile, expertise, experience, education, skills, projects, courses, languages } from "./cvData";

const allSkills = Object.values(skills).flat();

const norm = (str) => str.toLowerCase().replace(/[^\w\s+./-]/g, " ");

// Word-boundary match so short keywords like "hi" or "ai" don't false-positive
// inside unrelated words (e.g. "which", "his", "contain").
const includesAny = (text, words) =>
  words.some((w) => {
    const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${escaped}\\b`, "i").test(text);
  });

function findProject(text) {
  return projects.find((p) => text.includes(p.name.toLowerCase()));
}

function findSkill(text) {
  return allSkills.find((s) => text.includes(s.toLowerCase()));
}

function findExperience(text) {
  return experience.find((e) => text.includes(e.company.toLowerCase()));
}

export function getBotResponse(rawInput) {
  const text = norm(rawInput).trim();

  if (!text) {
    return "Go ahead, ask me anything about Adnan's skills, experience, or projects!";
  }

  // Greetings - only treat as a pure greeting if the message is short and
  // doesn't contain anything else meaningful (so "hey, what are his skills?"
  // still falls through to the real answer instead of just saying hello).
  const isShortGreeting =
    text.split(/\s+/).length <= 4 && includesAny(text, ["hi", "hello", "hey", "assalam", "salam", "yo", "greetings"]);
  if (isShortGreeting) {
    return `Hey there! 👋 I'm Adnan's portfolio assistant. Ask me about his skills, work experience, projects, or how to get in touch.`;
  }

  // Who are you / about the bot
  if (includesAny(text, ["who are you", "what are you", "your name"])) {
    return `I'm a chatbot built into ${profile.name}'s portfolio. I can answer questions about his resume - skills, experience, education, and projects.`;
  }

  // Expertise / what is he good at / specialization
  if (
    includesAny(text, ["expert", "specializ", "good at", "best at", "strength", "proficient", "skilled at"]) 
  ) {
    return `Adnan is a Full Stack MERN Developer. He's an expert in ${expertise.slice(0, 4).join(", ")}, and builds amazing, production-ready web apps using React.js, Next.js, Node.js, Express, and MongoDB. He also integrates AI/LLM features into applications.`;
  }

  // Summary / about him / introduce
  if (includesAny(text, ["summary", "about adnan", "introduce", "tell me about", "who is adnan"])) {
    return profile.summary;
  }

  // Contact info
  if (includesAny(text, ["contact", "email", "phone", "number", "reach", "hire", "freelance"])) {
    return `You can reach Adnan at ${profile.email} or ${profile.phone}. He's based in ${profile.location} and is available for freelance work. You can also check his LinkedIn (${profile.linkedin}) or GitHub (${profile.github}).`;
  }

  // Location
  if (includesAny(text, ["location", "based", "live", "city", "country"])) {
    return `Adnan is based in ${profile.location}.`;
  }

  // Education
  if (includesAny(text, ["education", "degree", "university", "college", "cgpa", "study", "qualification"])) {
    const lines = education.map((e) => `• ${e.degree} - ${e.institute} (${e.period}), ${e.detail}`);
    return `Here's Adnan's education background:\n\n${lines.join("\n")}`;
  }

  // Languages
  if (includesAny(text, ["language", "speak", "urdu", "english"])) {
    return `Adnan speaks ${languages.map((l) => `${l.name} (${l.level})`).join(" and ")}.`;
  }

  // Courses / certifications
  if (includesAny(text, ["course", "certificat", "hackerrank", "coursera"])) {
    return `Adnan has completed several courses and certifications:\n\n${courses.map((c) => `• ${c}`).join("\n")}`;
  }

  // Specific experience company lookup
  const expMatch = findExperience(text);
  if (expMatch) {
    const highlightLines = expMatch.highlights.map((h) => `• ${h}`).join("\n");
    return `${expMatch.role} at ${expMatch.company} (${expMatch.period})\n\n${highlightLines}\n\nTech Stack: ${expMatch.stack.join(", ")}`;
  }

  // Experience / work history / career
  if (includesAny(text, ["experience", "work history", "career", "job", "worked at", "companies"])) {
    const lines = experience.map((e) => `• ${e.role} at ${e.company} (${e.period})`);
    return `Adnan's professional experience:\n\n${lines.join("\n")}\n\nAsk me about a specific company (e.g. "TailorFlow AI") for more details!`;
  }

  // Specific project lookup
  const projMatch = findProject(text);
  if (projMatch) {
    return `${projMatch.name}\n\n${projMatch.description}\n\nTech Stack: ${projMatch.stack.join(", ")}`;
  }

  // Projects general
  if (includesAny(text, ["project", "built", "portfolio piece", "showcase"])) {
    const lines = projects.map((p) => `• ${p.name} (${p.stack.slice(0, 3).join(", ")})`);
    return `Here are some of Adnan's projects:\n\n${lines.join("\n")}\n\nAsk about any one of them by name for more detail!`;
  }

  // Specific skill lookup
  const skillMatch = findSkill(text);
  if (skillMatch) {
    const category = Object.entries(skills).find(([, list]) => list.includes(skillMatch))?.[0];
    return `Yes, Adnan has experience with ${skillMatch}${category ? ` (part of his ${category} skillset)` : ""}.`;
  }

  // Skills / tech stack general
  if (includesAny(text, ["skill", "tech stack", "technologies", "stack", "tools", "know", "familiar with"])) {
    return `Adnan's core tech stack includes: ${skills["Frameworks & Libraries"].join(", ")}, ${skills["Databases"].join(" & ")}, plus ${skills["Markup & Styling"].slice(0, 4).join(", ")} on the front-end. He also works with ${skills["Cloud & Platforms"].join(" and ")}.`;
  }

  // MERN specific
  if (includesAny(text, ["mern", "full stack", "fullstack"])) {
    return `Adnan is a Full Stack MERN Developer - MongoDB, Express.js, React.js, and Node.js - and also works extensively with Next.js and TypeScript-adjacent tooling to build scalable, production-grade apps.`;
  }

  // AI/LLM
  if (includesAny(text, ["ai", "llm", "machine learning", "chatbot", "artificial intelligence"])) {
    return `Adnan has hands-on experience integrating LLM-powered features into applications - things like intelligent text generation, summarization, conversational interfaces, and even fine-tuning LLMs for his "AI-Based Home Construction" project.`;
  }

  // Resume / CV download
  if (includesAny(text, ["resume", "cv", "download"])) {
    return `You can download Adnan's full CV using the "Resume" button in the hero section at the top of this page.`;
  }

  // Fallback
  return `I'm not totally sure about that one, but you can ask me about Adnan's skills, work experience, education, or projects. You could also reach out directly at ${profile.email}.`;
}

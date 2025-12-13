import React from 'react';

function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "12ccb587-67c5-49cd-8c4a-2a5cb6c9d562");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); 
    } else {
      console.log("Error", res);
    }
  };

  return (
    <form
      className="md:w-[70%] mx-auto mt-40 p-5 rounded-xl shadow-lg text-white "
      onSubmit={onSubmit}
    >
      <h2 className="mb-4 text-2xl text-center text-white font-semibold">
let's Connect       </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="block w-full p-2.5 mb-4 bg-transparent border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="block w-full p-2.5 mb-4 bg-transparent border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="block w-full p-2.5 mb-4 h-36 bg-transparent border border-gray-300 rounded-md text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white text-lg rounded-md cursor-pointer transition hover:bg-blue-700"
      >
        Submit Form
      </button>
    </form>
  );
}

export default ContactForm;

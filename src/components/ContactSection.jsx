import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-10 lg:px-20 relative transition-colors duration-300 text-[hsl(var(--foreground))]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="text-primary">Contact</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Info */}
      
        <div>
  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
    Looking to Collaborate or Hire? <br />
    
  </h2>
    
  <p className="mt-4 text-[hsl(var(--foreground)/0.7)]">
  <span className="text-[hsl(var(--foreground)/0.8)]">
      I’d Love to Hear from You!
    </span> <br />
    I'm a final-year IT student open to exciting job opportunities.
    Feel free to reach out — I’d be happy to connect!
  </p>

  <div className="mt-6 space-y-4">
    <div className="flex items-start space-x-4">
      <span className="text-xl text-[hsl(var(--foreground)/0.6)]">📞</span>
      <div>
        <p className="font-semibold">Phone:</p>
        <p className="text-[hsl(var(--foreground)/0.7)]">+91 94912 99085</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <span className="text-xl text-[hsl(var(--foreground)/0.6)]">✉️</span>
      <div>
        <p className="font-semibold">Email:</p>
        <p className="text-[hsl(var(--foreground)/0.7)]">
          aashimanker3007@gmail.com
        </p>
      </div>
    </div>
  </div>

  {/* Social Icons */}
  <div className="mt-6 flex justify-center lg:justify-start gap-4">
    {[
      { label: "GitHub", emoji: "🐙", bg: "bg-neutral-900", href: "https://github.com/aashimanker" },
      { label: "LinkedIn", emoji: "💼", bg: "bg-blue-900", href: "https://www.linkedin.com/in/aashi-manker-4651212a3/" },
    ].map((icon, i) => (
      <a
        key={i}
        href={icon.href}
        className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full ${icon.bg} text-white hover:w-32 transition-all overflow-hidden`}
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">
          {icon.label}
        </span>
        {icon.emoji}
      </a>
    ))}
  </div>
</div>


        {/* Right Side: Contact Form */}
        <div className="bg-[hsl(var(--card))] p-8 rounded-xl shadow-lg">
          <form action="https://formspree.io/f/mjkrnkaj" method="POST">
  <div className="mb-4">
    <label className="block mb-2 text-[hsl(var(--foreground)/0.9)]">
      Name
    </label>
    <input
      type="text"
      name="name"                                 // ✅ add name
      placeholder="name"
      className="w-full px-4 py-3 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] rounded-lg border border-[hsl(var(--border))] outline-none"
    />
  </div>

  <div className="mb-4">
    <label className="block mb-2 text-[hsl(var(--foreground)/0.9)]">
      Email<span className="text-xs text-red-500"> (Required)</span>
    </label>
    <input
      type="email"
      name="email"                                // ✅ add name
      placeholder="email"
      required                                     // ✅ make required
      className="w-full px-4 py-3 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] rounded-lg border border-[hsl(var(--border))] outline-none"
    />
  </div>

  <div className="mb-4">
    <label className="block mb-2 text-[hsl(var(--foreground)/0.9)]">
      Phone
    </label>
    <input
      type="tel"
      name="phone"                                 // ✅ add name
      placeholder="Phone Number"
      className="w-full px-4 py-3 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] rounded-lg border border-[hsl(var(--border))] outline-none"
    />
  </div>

  <div className="mb-4">
    <label className="block mb-2 text-[hsl(var(--foreground)/0.9)]">
      Message<span className="text-xs text-red-500"> (Required)</span>
    </label>
    <textarea
      name="message"                               // ✅ add name
      required                                     // ✅ make required
      placeholder="Write message..."
      className="w-full px-4 py-3 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] rounded-lg border border-[hsl(var(--border))] outline-none h-24"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-opacity-90 transition"
  >
    SEND
  </button>
</form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

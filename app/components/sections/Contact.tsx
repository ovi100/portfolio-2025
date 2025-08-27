import Section from "./Section";
import type { Person } from "../../lib/person";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { useCallback, useState } from "react";

type ContactItem = {
  icon: React.ReactElement;
  label: string;
  value: string;
};

type ContactProps = {
  item: ContactItem;
};

export default function Contact({ person }: { person: Person }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);

  const contacts = [
    {
      icon: <FiPhone className="text-4xl text-white/90" />,
      label: "Phone",
      value: person.phone,
    },
    {
      icon: <FiMapPin className="text-4xl text-white/90" />,
      label: "Location",
      value: person.location,
    },
    {
      icon: <FiMail className="text-4xl text-white/90" />,
      label: "Email",
      value: person.email,
    },
  ];

  const ContactCard = ({ item }: ContactProps) => (
    <div
      onMouseMove={onMouseMove}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden card-gradient transition will-change-transform"
    >
      <div className="flex items-center gap-x-5">
        {item.icon}
        <div>
          <div className="text-sm text-neutral-400">{item.label}</div>
          <div className="font-semibold text-white/90 group-hover:text-gray-200 transition">
            {item.value}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );

  return (
    <Section id="contact" title="Contact">
      <div className="grid sm:grid-cols-3 gap-6 mb-5">
        {contacts.map((item, index) => (
          <ContactCard key={index} item={item} />
        ))}
      </div>
      <div className="form">
        <form>
          <div className="md:flex gap-5">
            <div className="flex-1">
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name"
                  className="bg-transparent border-2 border-[#555] h-11 w-full text-[#eee] rounded focus:outline-0 p-2.5"
                  placeholder="Full Name"
                />

                {errors.name && (
                  <p className="text-xs text-red-500 absolute top-4 right-4">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="email"
                  className="bg-transparent border-2 border-[#555] h-11 w-full text-[#eee] rounded focus:outline-0 p-2.5"
                  placeholder="Email Address"
                />

                {errors.email && (
                  <p className="text-xs text-red-500 absolute top-4 right-4">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="subject"
                  className="bg-transparent border-2 border-[#555] h-11 w-full text-[#eee] rounded focus:outline-0 p-2.5"
                  placeholder="Subject"
                />

                {errors.subject && (
                  <p className="text-xs text-red-500 absolute top-4 right-4">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="relative mb-4">
                <textarea
                  name="message"
                  className="bg-transparent border-2 border-[#555] w-full h-[164px] text-[#eee] rounded focus:outline-0 p-2.5"
                  placeholder="Message"
                ></textarea>

                {errors.message && (
                  <p className="text-xs text-red-500 absolute top-4 right-4">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="button">
            <button
              type="submit"
              // disabled={isLoading}
              className="bg-[#333] text-white border-2 border-blue-400 cursor-pointer rounded-3xl px-4 
                  py-2 hover:bg-blue-400 transition duration-300 ease-linear"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

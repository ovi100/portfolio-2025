import Section from "./Section";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { useCallback, useState } from "react";
// import ContactForm from "../ContactForm";
import { Person } from "@/app/types";

type ContactItem = {
  icon: React.ReactElement;
  label: string;
  value: string;
};

type ContactProps = {
  item: ContactItem;
};

export default function Contact({ person }: { person: Person }) {
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

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);

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
      {/* <div className="form">
        <ContactForm />
      </div> */}
    </Section>
  );
}

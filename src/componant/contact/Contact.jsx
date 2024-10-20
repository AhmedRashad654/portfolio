import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetInTouch from "./GetInTouch";
import emailjs from "@emailjs/browser";
export default function Contact({ setLiActive }) {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const isInView = useInView(ref, { threshold: 0.1 });
  useEffect(() => {
    if (isInView) {
      setLiActive("Contact");
    }
  }, [isInView, setLiActive]);
  // send email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_o8p5h2k", "template_tr8815o", form.current, {
        publicKey: "be2Zz9wvZudmgoxtL",
      })
      .then(
        (result) => {
          if (result?.text === "OK") {
            toast.success("Message sent 👍🏻");
            form.current.reset();
          }
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <motion.div className="mt-28 mb-5 overflow-x-hidden" id="Contact" ref={ref}>
      <ToastContainer />
      <motion.div
        className="flex justify-center text-[3rem] font-bold text-veryGreen"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        Contact
      </motion.div>
      <div className="flex md:flex-row flex-col-reverse gap-8 md:justify-center md:items-start  mt-10">
        <motion.form
          className="flex flex-col gap-3 w-[300px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="p-1 px-3 bg-transparent border border-veryGreen rounded-lg outline-none  text-[0.9rem]"
            placeholder="name"
            name="user_name"
            required
          />
          <input
            type="email"
            className="p-1 px-3 bg-transparent border border-veryGreen rounded-lg outline-none  text-[0.9rem]"
            placeholder="email"
            name="user_email"
            required
          />

          <textarea
            className="p-3 bg-transparent border border-veryGreen rounded-lg h-[150px] outline-none text-[0.9rem]"
            placeholder="your message"
            name="message"
            required
          ></textarea>

          <input
            type="submit"
            value={loading ? "Loading..." : "send message"}
            className={`px-5 py-1 rounded-full bg-veryGreen   cursor-pointer transition-all duration-300 `}
          />
        </motion.form>
        <GetInTouch />
      </div>
    </motion.div>
  );
}

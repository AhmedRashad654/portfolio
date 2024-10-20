import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BlockProject from "./BlockProject";
import OverLay from "./OverLay";

export default function Projects({ setLiActive }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [contantOvarLay, setContantOvarLay] = useState(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setLiActive("Projects");
    }
  }, [isInView, setLiActive]);
  return (
    <motion.div
      className={`mt-28 overflow-x-hidden`}
      id="Projects"
      ref={ref}
    >
      <motion.div
        className="flex justify-center text-[3rem] font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        Latest<span className="text-veryGreen">Project</span>
      </motion.div>
      <div className="mt-12 flex justify-center items-center gap-8 flex-wrap">
        <BlockProject
          title={"Ershad"}
          description={
            "Ersahd is a comprehensive job portal built with Next.js for the front end and Node.js with Express and MongoDB for the back end. It allows users to create  accounts to post job listings and apply for positions. The site also features an admin dashboard, providing complete control over all aspects of the platform."
          }
          images={[
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437781/portfolio/eg6fs4ocjfwguksjfgml.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437797/portfolio/pwbpofgwyb4g85dhyoiw.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437797/portfolio/lhmdwdwqwe5frpbrllf0.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437798/portfolio/hhhosqxxxxon6roswt2j.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437818/portfolio/jrabv32eqt6i86j4elov.png",
          ]}
          skills={[
            "Next.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "tailwind",
            "Redux-toolkit",
          ]}
          git={"https://github.com/AhmedRashad654/Ershad_Front_Back"}
          delay={0.5}
          setOpen={setOpen}
          setContantOvarLay={setContantOvarLay}
        />
        <BlockProject
          title={"Social-Media-App"}
          description={
            "This project is a social media platform that allows users to create post , comment on others' posts, and follow other users to stay updated on their activities. The platform includes a real-time chat feature, enabling users to send messages to each other using Socket.io. The entire application is built using Express, Node.js, MongoDB, and React."
          }
          images={[
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437875/portfolio/ofryqkpq44hlt39zcd57.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437874/portfolio/mwdbnegvbetfzuwqzhq4.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437875/portfolio/iuzd6pguarrzxr98ouw7.png",
          ]}
          skills={[
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Socket.io",
            "ChakraUi",
          ]}
          git={"https://github.com/AhmedRashad654/social-media-app"}
          delay={0.9}
          setOpen={setOpen}
          setContantOvarLay={setContantOvarLay}
        />
        <BlockProject
          title={"E-Commerce"}
          description={
            "This project is an e-commerce platform built with React, Node.js, Express, and MongoDB. Users can browse and purchase products, pay securely through Stripe, and leave reviews after their purchases. Additionally, there is an admin dashboard for complete management of the site."
          }
          images={[
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729438556/portfolio/i5cmpkdy7kz0wrmsrocs.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729438555/portfolio/cy25b55zdwcwpxfk89jf.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729438555/portfolio/ef5ebciyzcvbjuwnxa3w.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729438556/portfolio/xyrx2pcbr8gtgqhiq0jv.png",
          ]}
          skills={[
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Stripe",
            "tailwind",
          ]}
          git={"https://github.com/AhmedRashad654/E-commerceTechno"}
          delay={1.2}
          setOpen={setOpen}
          setContantOvarLay={setContantOvarLay}
        />
        <BlockProject
          title={"html&css"}
          description={
            "This project is a static website designed using HTML and CSS. While it does not include dynamic features or content, the design is visually appealing and well-structured, showcasing effective use of layout and styling techniques."
          }
          images={[
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437819/portfolio/rzbislzrmckkzkqya4gi.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437826/portfolio/duyzowdsfoxiwywitjhi.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437829/portfolio/dvpa8q59wofql8n48wm0.png",
          ]}
          skills={["html", "css"]}
          git={"https://github.com/AhmedRashad654/Html-css"}
          delay={1.3}
          setOpen={setOpen}
          setContantOvarLay={setContantOvarLay}
        />
        <BlockProject
          title={"html&css"}
          description={
            "This project is a static dashboard created with HTML and CSS. It focuses on providing a clean and organized layout, featuring various UI elements designed for effective user interaction. While it lacks dynamic functionalities, the design emphasizes aesthetics and usability."
          }
          images={[
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437876/portfolio/g76rdfvbi3tf8weyorgh.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437874/portfolio/wa8xcxxeizyuzh2wtv5e.png",
            "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437875/portfolio/o40f8rpyg7acbofjy6y7.png",
          ]}
          skills={["html", "css"]}
          git={"https://github.com/AhmedRashad654/Dashboard"}
          delay={1.6}
          setOpen={setOpen}
          setContantOvarLay={setContantOvarLay}
        />
      </div>
      {open && (
        <OverLay
          setOpen={setOpen}
          contantOvarLay={contantOvarLay}
          setContantOvarLay={setContantOvarLay}
        />
      )}
    </motion.div>
  );
}

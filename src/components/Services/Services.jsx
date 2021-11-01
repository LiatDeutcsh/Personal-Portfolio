import React from "react";

// Styles
import "./services.css";

// Data
import { services } from "../../data/data";

// Card
import { ServicesCard } from "../Services/ServicesCard/ServicesCard";
import { Heading } from "../Heading/Heading";

const Services = () => {
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      name="services"
      id="services"
    >
      <Heading text="Skills" />
      <div className="services-cards">
        {services?.map(({ title, iconSrc, tags }, index) => (
          <ServicesCard key={index} image={iconSrc} title={title} tags={tags} />
        ))}
      </div>
    </section>
  );
};

export default Services;

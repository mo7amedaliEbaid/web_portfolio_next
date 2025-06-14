"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="skills" className="py-20">
  

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <div
                  className={`md:w-24 w-20 text-lg font-bold`}
                  style={{ fontSize: company.id === 4 || company.id === 5 ? 'larger' : 'larger' }}
                >
                  {company.name}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
    </section>
  );
};

export default Clients;

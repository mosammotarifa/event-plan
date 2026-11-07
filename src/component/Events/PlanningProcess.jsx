import React from "react";

const PlanningProcess = ({ planningProcess }) => {
  if (!planningProcess) return null;

  return (
    <section className="bg-[#FAF8F6] py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#722F52]">
          Behind The Event
        </p>

        <h2 className="mb-6 text-3xl font-bold text-[#29252B]">
          Our Planning <span className="text-[#722F52]">Process</span>
        </h2>

        <p className="text-base leading-8 text-gray-600">
          {planningProcess}
        </p>

      </div>
    </section>
  );
};

export default PlanningProcess;
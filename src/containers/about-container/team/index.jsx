import HeaderGroup from "@/components/header-group";
import React from "react";
import { TEAM_MEMBER } from "./constant";
import TeamCard from "@/components/team-card";

export default function Team() {
  return (
    <section
      id="team"
      className="flex flex-col gap-12 bg-white px-3 py-12 md:gap-16 md:py-16  xl:p-24"
    >
      <HeaderGroup
        smallTitle="Team"
        mainTitle="Meet our team"
        text="From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table."
        className="text-center"
      />
      <div className="grid max-w-[1216px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 xl:mx-auto xl:grid-cols-4">
        {TEAM_MEMBER.map((item) => (
          <TeamCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

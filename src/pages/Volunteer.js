import React from "react";
import VolunteerForm from "../components/VolunteerForm";

const Volunteer = () => {
  return (
    <div className="VolunteerWrapper">
      <p>
        The Do Something Toy Drive aims to give underserved children access to
        nicer toys than you find at a lot of giveaways. With that goal in mind
        we are not asking for toy donations but purely monetary ones.
      </p>
      <VolunteerForm />
    </div>
  );
};

export default Volunteer;

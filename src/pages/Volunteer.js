import React from "react";
import VolunteerForm from "../components/VolunteerForm";

const Volunteer = () => {
  return (
    <div className="VolunteerWrapper">
      <h2>
        If you’d like to sign up to volunteer the day of the toy giveaway, sign
        up here.{" "}
      </h2>
      <p>
        We’re especially looking for people who are spanish-english and
        cantonese-english bilingual speakers.{" "}
      </p>
      <VolunteerForm />
    </div>
  );
};

export default Volunteer;

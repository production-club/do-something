import React from "react";

const About = () => {
  return (
    <div className="AboutWrapper">
      <div className="AboutCopyWrapper">
        <div className="LastYearDiv">
          <h2>Last Year</h2>
          <p>
            In 2020 we realized a lot of systemic forces were coming together to
            pinch people who were economically vulnerable. We started Do
            Something to find ways to help improve the lived experience of
            people in those positions. The Toy Giveaway was one way we saw we
            could help by making the holidays a little easier for those who
            wanted to give gifts to their kids but were unable to. It was
            successful and we gave around 4000 presents to 700 families.
          </p>
        </div>
        <div className="ThisYearDiv">
          <h2>This Year</h2>
          <p>
            We want to double the amount of families we reach, so we’re starting
            earlier to source gifts and get the word out about the toy giveaway.
            To make those things happen we’re asking for donations from the
            public.
          </p>
        </div>
        <div className="WhyDiv">
          <h2>Why?</h2>
          <p>
            We have an ambitious goal we will be working towards each year from
            here on out: No kid in LA without a yearly toy.
          </p>
          <p>We’re aiming for this because of two main reasons:</p>
          <ol type="1">
            <li>
              Kids have the least amount of agency to change their realities.
            </li>
            <li>
              We want to impact the future through education and we feel that
              teaching kids the benefits of generosity will be extremely
              impactful. This is because kids’ brain plasticity makes it easier
              for them to learn new ways of being better than adults.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;

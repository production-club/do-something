import React, { Component } from "react";

export class ContactForm extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://productionclub.activehosted.com/f/embed.php?id=40";
    document.body.appendChild(script);
  }

  render() {
    return <div className="_form_40"></div>;
  }
}

export default ContactForm;

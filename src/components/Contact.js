import React from "react";
import "./Contact.css";

function Contact(people) {
  return (
    <figure className="Contact">
      <img className="avatar" src={ people.avatar } alt={ people.name } />
      <figcaption>
        <div className="name">{ people.name }</div>
        <div className="status">
          <span className={ people.isOnline ? 'status-online' : 'status-offline' }></span>
          <span className="">{ people.isOnlineStr }</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default Contact;

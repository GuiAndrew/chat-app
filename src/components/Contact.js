import React from "react";
import "./Contact.css";

function Contact(value) {
  return (
    <figure className="Contact">
      <img className="avatar" src={ value.avatar } alt={ value.name } />
      <figcaption>
        <div className="name">{ value.name }</div>
        <div className="status">
          <span className={ value.isOnline ? 'status-online' : 'status-offline' }></span>
          <span className="">{ value.isOnlineStr }</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default Contact;

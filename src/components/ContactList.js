import React from "react";
import "./ContactList.css";
import Contact from "./Contact";

function ContactList() {
  const names = ["Anne Fran", "John Campos", "Bruce Ally"];
  const isOnline = [true, false];
  const avatarsImg = [
    "https://randomuser.me/api/portraits/women/66.jpg",
    "https://randomuser.me/api/portraits/men/66.jpg",
    "https://randomuser.me/api/portraits/men/13.jpg"
  ];
  const onlineOfflineStr = ["Online", "Offline"];

  const peoples = [
    {
      name: names[0],
      isOnline: isOnline[0],
      avatar: avatarsImg[0],
      onlineOfflineStr: onlineOfflineStr[0]
    },
    {
      name: names[1],
      isOnline: isOnline[1],
      avatar: avatarsImg[1],
      onlineOfflineStr: onlineOfflineStr[1]
    },
    {
      name: names[2],
      isOnline: isOnline[2],
      avatar: avatarsImg[2],
      onlineOfflineStr: onlineOfflineStr[1]
    }
  ];
  return (
    <div>
      <table>
        {peoples.map(people => (
          <tr>
            <td>
              <Contact
                avatar={people.avatar}
                name={people.name}
                isOnline={people.isOnline}
                isOnlineStr={people.onlineOfflineStr}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ContactList;

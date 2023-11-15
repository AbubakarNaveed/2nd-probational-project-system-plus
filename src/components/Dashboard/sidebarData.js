// import Logo from "@images/logo2.png";
// import Plus from "@images/plus.svg";

import Dash from "@images/Dash.svg";
import Tasks from "@images/tasks.svg";
import Trips from "@images/trips.svg";
import Calendar from "@images/calendar.svg";
import Companies from "@images/companies.svg";
import Contact from "@images/contact.svg";
import ServiceProvider from "@images/providers.svg";
import Driver from "@images/driver.svg";
import Vehicles from "@images/vechiles.svg";
import Settings from "@images/settings.svg";

export const linksData = {
  Overview: [
    { id: 1, text: "Dashboard", icon: Dash },
    { id: 2, text: "Tasks", icon: Tasks },
    { id: 3, text: "Calendar", icon: Calendar },
    { id: 4, text: "Trips", icon: Trips },
  ],
  Resources: [
    { id: 5, text: "Companies", icon: Companies },
    { id: 6, text: "Contacts", icon: Contact },
    {
      id: 7,
      icon: ServiceProvider,
    },
    { id: 8, text: "Drivers", icon: Driver },
    { id: 9, text: "Vehicles", icon: Vehicles },
  ],
  User: [{ id: 10, text: "Settings", icon: Settings }],
};

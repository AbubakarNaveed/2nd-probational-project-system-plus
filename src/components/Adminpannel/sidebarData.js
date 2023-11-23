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
    { id: 1, text: "Dashboard", icon: Dash, path: "/admin-pannel/dashboard" },
    { id: 2, text: "Users", icon: Driver, path: "/admin-pannel/users" },
    { id: 3, text: "Calendar", icon: Calendar, path: "/admin-pannel/calendar" },
    { id: 4, text: "Trips", icon: Trips, path: "/admin-pannel/trips" },
  ],
  Resources: [
    {
      id: 5,
      text: "Companies",
      icon: Companies,
      path: "/admin-panel/companies",
    },
    { id: 6, text: "Contacts", icon: Contact, path: "/user-panel/dashboard" },
    {
      id: 7,
      icon: ServiceProvider,
      path: "/admin-pannel/service-providers",
      text: "Service Provider",
    },

    { id: 9, text: "Vehicles", icon: Vehicles, path: "/admin-pannel/vehicles" },
  ],
  User: [
    {
      id: 10,
      text: "Settings",
      icon: Settings,
      path: "/admin-pannel/settings/account",
    },
  ],
};

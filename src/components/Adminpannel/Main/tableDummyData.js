import TableAvatar from "@images/justin.svg";

export const UsersDataRows = [
  "USER NAME",
  "CONTACT",
  "CREATED AT",
  "STATUS",
  "",
];

export const UsersTableBodyRows = [
  {
    userName: {
      avatar: TableAvatar,
      name: "Dustin Willson",
    },
    contact: {
      email: "dustin.wilson@example.com",
      phone: "(405) 555-0128",
    },
    createdAt: "27 Oct, 10:49 AM",
    status: true,
  },
  {
    userName: {
      avatar: TableAvatar,
      name: "Dustin Willson",
    },
    contact: {
      email: "dustin.wilson@example.com",
      phone: "(405) 555-0128",
    },
    createdAt: "27 Oct, 10:49 AM",
    status: false,
  },
];

import { GiftIcon, HomeIcon, PencilIcon, TicketIcon } from "@heroicons/react/outline";

export const InvestDB = [
  {
    id:0,
    title: "Gadget",
    desc: " Apple California ",
    price: " 200.22 ",
    upOrDown: "up",
    percent: "1.04%",
    icon: <TicketIcon className="invest-icon" />,
  },
  {
    id:1,
    title: "House & Apartment",
    desc: "Manulife Inc.",
    price: "890.00",
    upOrDown: "down",
    percent: "5.04%",
    icon: <HomeIcon className="invest-icon" />,
  },
  {
    id:2,
    title: "Education",
    desc: "Interaction design foundation",
    price: " 58.99 ",
    upOrDown: "up",
    percent: "10.2%",
    icon: <PencilIcon className="invest-icon" />,
  },
  {
    id:3,
    title: "Food & Drink",
    desc: "Interaction design foundation",
    price: "13.25",
    upOrDown: "down",
    percent: "0.25%",
    icon: <GiftIcon className="invest-icon" />,
  },
];

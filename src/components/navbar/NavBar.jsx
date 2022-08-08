import React from "react";
import { navLinks } from "./utils/NavDB";
import { useRecoilState } from "recoil";
import { activeNavItemState } from "../../atoms/ActiveNavBarAtom";

function NavBar() {
  return (
    <div className="border-r border-gray-200 min-h-[90vh] w-[80px] lg:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8">
        {navLinks.slice(0, 4).map((link) => (
          <NavItem link={link} />
        ))}
        <div className="w-full border-t-2 border-gray-100" />
        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} />
        ))}
      </div>
      <div className="lg:flex flex-col hidden  items-center justify-center space-y-4 px-4 py-4 ">
        <h1 className="text-xl w-full font-medium">
          Grow Your <br /> Saving Now!
        </h1>
        <p> Pick an investment strategy that reflexts your goals </p>
        <button className=" w-full py-2 px-3 bg-black text-white">
          Become a Pro
        </button>
      </div>
    </div>
  );
}
function NavItem({ link }) {
  const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
  return (
    <div
      onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-gray-900 border-l-4 border-transparent ${
         activeNav === link.id && "border-gray-900 "
       } `}
    >
      <div> {link.icon}</div>
      <h1
        className={`text-gray-600 group-hover:text-black lg:flex hidden ${
          activeNav === link.id && "text-black "
        }} `}
      >
        {link.title}
      </h1>
    </div>
  );
}

export default NavBar;

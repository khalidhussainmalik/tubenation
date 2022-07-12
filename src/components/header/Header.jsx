import React from "react";
import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import logo from "../../images/logo.png";
import pic from "../../images/khalid.jpg";

const Header = ({handleToggleSidebar}) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={()=>handleToggleSidebar()}
      />
      <img className="header__logo" src={logo} alt="" />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={pic} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;

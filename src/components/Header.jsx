import { IoIosFootball } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { FaTachometerAlt } from "react-icons/fa"
import { BiSolidContact } from "react-icons/bi"
import { LuLogIn } from "react-icons/lu"
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <IoIosFootball size={26} color="black" />
        <div><span style={{ color: "white", fontWeight: 800 }}>Futsal</span><span style={{ color: "black", fontSize: 22 }}>Store</span></div>
      </Link>
      <nav>
        <NavLink to="/">
          <FaTachometerAlt size={24} />
          Dashboard
        </NavLink>
        <NavLink to="/about">
          <MdInfo size={24} />
          About
        </NavLink>
        <NavLink to="/contact">
          <BiSolidContact size={24} />
          Contact
        </NavLink>
      </nav>
        <Button><LuLogIn size={24} /></Button>
    </header>
  );
}

export default Header
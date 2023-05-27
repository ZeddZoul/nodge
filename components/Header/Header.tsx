import s from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/nodge_logo.png";

import { RiLuggageCartFill } from "react-icons/ri";
import Link from "next/link";
const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.logo}>
        {" "}
        <Image src={logo} alt="" />
        <h1>Nodge</h1>
      </div>
      <nav>  
        <Link href="./"  >Home</Link>
        <Link href="./"  >About Nodge</Link>
        <Link href="./"  >Lodges</Link>
        <Link href="./"  >Reach Us</Link>
      </nav>
     <div><p>Bookings</p> <RiLuggageCartFill fontSize={35} color="#fff" /></div>
    </div>
  );
};

export default Header;

import room1 from "../../public/hotel_1.jpg";
import room2 from "../../public/hotel_2.jpg";
import room3 from "../../public/hotel_3.jpg";
import RoomCard from "./RoomCard/RoomCard";
import s from "./Rooms.module.scss";
import { RoomCardProps } from "./RoomCard/RoomCard";
import { CartItemProps } from "@/pages";

interface RoomProps{
  addToCart: ({ }: RoomCardProps) => void;
  cart:CartItemProps[]

}
const Rooms = ({ addToCart, cart }: RoomProps) => {
  
  const RoomCardInfo = {
    Card_one: {
      id: 0,
      name: "Room One",
      price: 250,
      image: room1,
      days: 1,
      arrival_date: "",
    },
    Card_two: {
      id: 1,
      name: "Room Two",
      price: 500,
      image: room2,
      days: 1,
      arrival_date: ""
    },
    Card_three: {
      id: 2,
      name: "Room Three",
      price: 750,
      image: room3,
      days: 1,
      arrival_date: "",
    },
  };
  return (
    <section className={s.Rooms}>
      <div>
      <h2>Available Rooms</h2>
      <p>Please click on a card to book the room </p>

     </div>
      <div>
        <RoomCard cart={cart} addToCart={() => addToCart(RoomCardInfo.Card_one)} {...RoomCardInfo.Card_one} />
        <RoomCard cart={cart} addToCart={()=>addToCart(RoomCardInfo.Card_two)} {...RoomCardInfo.Card_two} />
        <RoomCard cart={cart} addToCart={()=>addToCart(RoomCardInfo.Card_three)} {...RoomCardInfo.Card_three} />
      </div>
    </section>
  );
};

export default Rooms;

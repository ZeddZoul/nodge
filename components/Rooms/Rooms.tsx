import room1 from "../../public/hotel_1.jpg";
import room2 from "../../public/hotel_2.jpg";
import room3 from "../../public/hotel_3.jpg";
import RoomCard from "./RoomCard/RoomCard";
import s from "./Rooms.module.scss";
import { RoomCardProps } from "./RoomCard/RoomCard";
const RoomCardInfo = {
  Card_one: {
    name: "Room One",
    price: 250,
    image: room1,
    days: 1,
    arrival_date: "",
  },
  Card_two: {
    name: "Room Two",
    price: 500,
    image: room2,
    days: 1,
    arrival_date: ""
  },
  Card_three: {
    name: "Room Three",
    price: 750,
    image: room3,
    days: 1,
    arrival_date: ""
  },
};
interface RoomProps{
  addToCart: ({ }: RoomCardProps) => void

}
const Rooms = ({addToCart}: RoomProps) => {

  return (
    <section className={s.Rooms}>
      <div>
      <h2>Available Rooms</h2>
      <p>Please Select a room that you would like</p>

     </div>
      <div>
        <RoomCard addToCart={() => addToCart(RoomCardInfo.Card_one)} {...RoomCardInfo.Card_one} />
        <RoomCard addToCart={()=>addToCart(RoomCardInfo.Card_two)} {...RoomCardInfo.Card_two} />
        <RoomCard addToCart={()=>addToCart(RoomCardInfo.Card_three)} {...RoomCardInfo.Card_three} />
      </div>
    </section>
  );
};

export default Rooms;

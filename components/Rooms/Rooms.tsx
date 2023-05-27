import room1 from "../../public/hotel_1.jpg";
import room2 from "../../public/hotel_2.jpg";
import room3 from "../../public/hotel_3.jpg";
import RoomCard from "./RoomCard/RoomCard";
import s from "./Rooms.module.scss";

const RoomCardInfo = {
  Card_one: {
    name: "Room One",
    price: " N250k per night",
    image: room1,
  },
  Card_two: {
    name: "Room Two",
    price: " N500k per night",
    image: room2,
  },
  Card_three: {
    name: "Room Three",
    price: " N750k per night",
    image: room3,
  },
};
const Rooms = () => {
  return (
    <section className={s.Rooms}>
      <div>
      <h2>Available Rooms</h2>
      <p>Please Select a room that you would like</p>

     </div>
      <div>
        <RoomCard {...RoomCardInfo.Card_one} />
        <RoomCard {...RoomCardInfo.Card_two} />
        <RoomCard {...RoomCardInfo.Card_three} />
      </div>
    </section>
  );
};

export default Rooms;

import Image, { StaticImageData } from "next/image";
import s from "./RoomCard.module.scss";
import { useState } from "react";
import { CartItemProps } from "@/pages";
import { CloseButton } from "@chakra-ui/react";
export interface RoomCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  days: number;
  arrival_date: string;
  addToCart?: () => void;
  id: number;
  cart?: CartItemProps[] | undefined;
  overview: string;
}
const RoomCard = ({
  image,
  name,
  price,
  addToCart,
  id,
  cart,
  overview,
}: RoomCardProps) => {
  const [open, setOpen] = useState(false)

  const check = () => cart?.some((item) => item.id === id);
  const openOverview = () => {
    setOpen(true)
  };
  const BookRoom = () => {
    setOpen(false)
    addToCart!()
  };

  return (
    <>
      <div
        onClick={openOverview}
        title={check() ? "Room is already in cart" : ""}
        id={`${id}`}
        style={
          check()
            ? { filter: "grayscale(.7)", cursor: "not-allowed" }
            : { filter: "grayscale(0)", cursor: "pointer" }
        }
        className={s.RoomCard}
      >
        <Image src={image} alt="" />
        <div>
          <h3>{name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia
            officiis eveniet, a tempore molestias, numquam magni iusto alias
            nesciunt, asperiores exercitationem? Harum, ducimus. Itaque
            recusandae iste hic rerum quia.
          </p>
          <h4>Cost: ${price} daily</h4>
          {!check() ? (
            <button
              style={
                check()
                  ? { filter: "grayscale(1)", cursor: "not-allowed" }
                  : { filter: "grayscale(0)", cursor: "pointer" }
              }
              onClick={openOverview}
            >
              {" "}
              Book this room
            </button>
          ) : (
            <strong>
              <small> Room has been booked</small>{" "}
            </strong>
          )}
        </div>
      </div>
      {open ? <div className={s.RoomOverview}>
        <span onClick={() => setOpen(false)}><CloseButton/></span>
        <Image src={image} alt="" />
        <h2>{name}</h2>
        <p> {overview} </p>
        <button
              style={
                check()
                  ? { filter: "grayscale(1)", cursor: "not-allowed" }
                  : { filter: "grayscale(0)", cursor: "pointer" }
              }
              onClick={BookRoom}
            >Book this room</button>
      </div>:<></>}
    </>
  );
};

export default RoomCard;

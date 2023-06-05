import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { RoomCardProps } from "../Rooms/RoomCard/RoomCard";
import s from "./Cart.module.scss";
import { CloseButton } from "@chakra-ui/react";
import Image from "next/image";
import { CartItemProps } from "@/pages";
interface CartProps {
  shown: boolean;
  hideCart: () => void;
  setCart: Dispatch<SetStateAction<CartItemProps[]>>;
  cart: CartItemProps[];
}
const data = {
  name: "",
  phone: "",
};
const Cart = ({ shown, hideCart, cart, setCart }: CartProps) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [VAT, setVAT] = useState(0);
  const [bookingData, setBookingData] = useState(data);

  const handleCostChange = () => {
    var total: number = 0;
    cart.map((item) => {
      total += item.price * item.days;
    
      setSubTotal(total);
      setVAT(total * 0.05)
      setCartTotal(total + VAT);
    });
    cart.length == 0 && setCartTotal(total);
  };
  useEffect(() => {
    handleCostChange();
  });
  const updateBookingData = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement

    const newData = { ...bookingData, [name]: value }
    setBookingData(newData)
  };
  const updateFormData = (e: SyntheticEvent, itemName: string, id: number) => {
    var { name, value } = e.target as HTMLInputElement;
    cart.forEach((item) => {
      // update only the current type of house
      var newItem;
      if (item.name == itemName) {
        newItem = { ...item, [name]: value };
        const realCart = [...cart];
        realCart[id] = newItem;
        setCart(realCart);
      }
    });
  };

  const removeRoom = (id: number) => {
    const newCart = cart.filter((item) => cart.indexOf(item) !== id);
    setCart(newCart);
    handleCostChange();
  };

  return shown ? (
    <div className={s.Cart}>
      <div className={s.top}>
        <h2>Nodge</h2>
        <CloseButton title="close" onClick={hideCart} />
      </div>
      <form className={s.bookingForm}>
        <h2>Booking Information:</h2>
        <div>
          <label htmlFor="days">Booker&lsquo;s name: </label>
          <span>
            <input
              required
              aria-required
              onChange={updateBookingData}
              name="name"
              type="text"
              maxLength={255}
              value={bookingData.name}
            />
          </span>
        </div>
        <div>
          <label htmlFor="days">Booker&lsquo;s phone number: </label>
          <span>
            <input
              required
              aria-required
              onChange={updateBookingData}
              name="phone"
              type="tel"
              maxLength={255}
              value={bookingData.phone}
            />
          </span>
        </div>
      </form>
      <div className={s.bookingSection}>
        {cart.length > 0 ? (
          cart.map(({ image, name, price, days, arrival_date }, id) => (
            <div key={id} className={s.Booking}>
              <Image
                className={s.cartImage}
                src={image}
                height={undefined}
                width={250}
                alt=""
              />
              <span>
                <h3>Room type: {name}</h3>
                <div>
                  <label htmlFor="days">Booking for:</label>
                  <span>
                    <input
                      onChange={(e) => updateFormData(e, name, id)}
                      name="days"
                      type="number"
                      value={days}
                      maxLength={1}
                      max={7}
                      min={1}
                    /> {" "}
                    day(s)
                  </span>
                </div>
                <p>
                  Price: ${price} x {days} days{" "}
                </p>
                <div>
                  <label htmlFor="days">Arrival date:</label>
                  <span>
                    <input
                      onChange={(e) => updateFormData(e, name, id)}
                      name="arrival_date"
                      type="date"
                      value={arrival_date}
                    />
                  </span>
                </div>
              <button onClick={() => removeRoom(id)}>Remove Room</button>
              </span>
            </div>
          ))
        ) : (
          <p> You have not booked a room yet. Try Booking a room first</p>
        )}

        <p className={s.Total}>SUBTOTAL: ${subTotal}</p>
        <p className={s.Total}>VAT (5%): ${VAT}</p>
        <p className={s.Total}>TOTAL FEE: ${cartTotal}</p>
      </div>
      <button title={cart.length > 0 ? "Confirm Booking" : "No Bookings yet"} disabled={cart.length > 0 ? false : true}> Confirm Booking</button>
    </div>
  ) : (
    <></>
  );
};

export default Cart;

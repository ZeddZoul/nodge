import Image, { StaticImageData } from 'next/image'
import s from './RoomCard.module.scss'
import { useState } from 'react'
import { CartItemProps } from '@/pages'
export interface RoomCardProps{
  image: StaticImageData,
  name: string,
  price: number,
  days: number,
  arrival_date: string
  addToCart?: () => void
  id: number,
  cart?: CartItemProps[] | undefined
}
const RoomCard = ({ image, name, price, addToCart, id, cart }: RoomCardProps) => {
  // const gray = false
  const check = () => 
    cart?.some((item) =>
      item.id === id 
    )
  
 console.log(id, check())



  return (
    <div onClick={addToCart} title={check() ? "Room is already in cart": ""} id={`${id}`} style={check() ? { filter: "grayscale(1)", cursor: "not-allowed"} : {filter: "grayscale(0)", cursor: "pointer"}} className={s.RoomCard}>
      <Image src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia officiis eveniet, a tempore molestias, numquam magni iusto alias nesciunt, asperiores exercitationem? Harum, ducimus. Itaque recusandae iste hic rerum quia.</p>
        <h4>Cost: ${price} daily</h4>
        <button style={check() ? { filter: "grayscale(1)", cursor: "not-allowed"} : {filter: "grayscale(0)", cursor: "pointer"}} onClick={addToCart}> Book this room</button>
       </div>
    </div>
  )
}

export default RoomCard
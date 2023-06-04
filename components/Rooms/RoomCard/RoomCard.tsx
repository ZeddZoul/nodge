import Image, { StaticImageData } from 'next/image'
import s from './RoomCard.module.scss'
import { useState } from 'react'
export interface RoomCardProps{
  image: StaticImageData,
  name: string,
  price: number,
  days: number,
  arrival_date: string
  addToCart?: ()=>void
}
const RoomCard = ({ image, name, price, addToCart }: RoomCardProps) => {

  return (
    <div className={s.RoomCard}>
      <Image src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia officiis eveniet, a tempore molestias, numquam magni iusto alias nesciunt, asperiores exercitationem? Harum, ducimus. Itaque recusandae iste hic rerum quia.</p>
        <h4>Cost: ${price} daily</h4>
        <button onClick={addToCart}> Book this room</button>
       </div>
    </div>
  )
}

export default RoomCard
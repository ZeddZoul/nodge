import Image, { StaticImageData } from 'next/image'
import s from './RoomCard.module.scss'
interface RoomCardProps{
  image: StaticImageData,
  name: string,
  price : string
}
const RoomCard = ( {image, name, price} : RoomCardProps) => {
  return (
    <div className={s.RoomCard}>
      <Image src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia officiis eveniet, a tempore molestias, numquam magni iusto alias nesciunt, asperiores exercitationem? Harum, ducimus. Itaque recusandae iste hic rerum quia.</p>
        <h4>Cost: { price }</h4>
       </div>
    </div>
  )
}

export default RoomCard
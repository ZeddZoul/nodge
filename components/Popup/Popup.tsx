import s from './Popup.module.scss'
interface PopupProps{
  showPopup: boolean;
  content: string
}
const Popup = ( {showPopup, content}: PopupProps) => {
  return showPopup? (
    <div className={s.Popup}>{content}</div>
  ) : (<></>)
}

export default Popup
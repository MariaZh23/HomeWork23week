import './Tariffcard.scss'

export default function Tariffcard({ name, price, speed, active, color }) {
  return (
    <div className={`tariff-card ${active}`}>
      <p className={`tariff-card-name ${color}`}>Безлимитный {name}</p>
      <div className={`tariff-card-price  ${color}`}>
        <p className="price-currency">руб</p>
        <p className="price-number"> {price}</p>
        <p className="price-period">/мес</p>
      </div>
      <p className="tariff-card-speed">до {speed} Мбит/сек</p>
      <p className="tariff-card-volume">Объем включенного трафика не ограничен</p>
    </div>
  )
}

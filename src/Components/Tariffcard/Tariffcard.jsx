import './Tariffcard.scss'
import React, { useState } from 'react';

export default function Tariffcard({ name, price, speed, color }) {
  const [cardSelected, setCardSelected] = useState(false);
  const cardClick = () => {
    setCardSelected(!cardSelected);
  };

  return (
    <div className={`tariff-card ${cardSelected ? 'selected' : ''}`} onClick={cardClick}>
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

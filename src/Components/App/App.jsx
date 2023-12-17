import Tariffcard from '../Tariffcard/Tariffcard'
import '../App/App.scss'

function App() {
  const tariffs = [
    { name: 300, price: 300, speed: 10, active: 'false', color: "darkblue" },
    { name: 450, price: 450, speed: 50, active: 'false', color: "darkgreen" },
    { name: 500, price: 500, speed: 100, active:'true', color: "darkred" },
    { name: 1000, price: 1000, speed: 200, active: 'false', color: "black" },
  ];
  return (
    <>
      <div className="tariff-cards-container">
      {tariffs.map((tariff, name) => (
        <Tariffcard
          key={name}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          active={tariff.active}
          color={tariff.color}
        />
      ))}
    </div>
    </>
  )
}

export default App

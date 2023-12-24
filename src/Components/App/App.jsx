import Tariffcard from '../Tariffcard/Tariffcard'
import '../App/App.scss'

function App() {
  const tariffs = [
    { name: 300, price: 300, speed: 10, color: "darkblue" },
    { name: 450, price: 450, speed: 50,  color: "darkgreen" },
    { name: 500, price: 500, speed: 100,  color: "darkred" },
    { name: 1000, price: 1000, speed: 200,  color: "black" },
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
          color={tariff.color}
        />
      ))}
    </div>
    </>
  )
}

export default App

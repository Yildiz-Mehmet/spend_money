import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./component/Basket";
import Header from "./component/Header";
import Product from "./component/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(2000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div className="App">
      <Header money={money} total={total} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
      ))}
      <Basket total={total} products={products} basket={basket} />
      <button onClick={resetBasket}>Sıfırla</button>
    </div>
  );
}

export default App;

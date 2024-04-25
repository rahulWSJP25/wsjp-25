import CartRow from "./CartRow";
import { data } from "./data";

function App() {
  const myData = [...data].slice(0, 10);  // to show data upto 10 items
  return (
    <table className="container table">
      <thead>
        <tr>
          <th>Sr</th>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {
          myData.map(
            (d, i) => {
              return <CartRow key={i} sr={i + 1} name={d.title} image={d.image} price={d.price} />
            }
          )
        }
      </tbody>
    </table>
  )
}

export default App;

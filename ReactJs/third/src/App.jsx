import ProductBox from "./ProductBox";
import TableRow from "./TableRow";
import { data } from "./data";
function App() {
  const productList = data.map(
    (d) => {
      return <ProductBox key = {d.id} name={d.title} image={d.image} />
    }
  )
  return (
    <div className="container">
      <div className="row">
        {productList};
      </div>
    </div>
  )
}

export default App;
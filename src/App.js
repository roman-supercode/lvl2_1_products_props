import './App.css';
import Products from "./components/products/Products";
import ProductCard from './components/card/ProductCard';

function App() {
  return (
    <>
      <h1>Supershop</h1>
      <section className='flexSection'>
        {Products.map((element, index) => {
          return (
            <ProductCard
              key={index}
              url={element.url}
              alt={element.alt}
              name={element.name}
              price={element.price}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

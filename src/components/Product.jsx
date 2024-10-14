import { useState } from "react";
import PropTypes from 'prop-types';

const products = [
  { id: 1, name: "Bosch Climate 910", price: 2097.0 },
  { id: 2, name: "Gree Amber 70-A/2/W", price: 1819.0 },
  { id: 3, name: "Hitachi Dodai R32", price: 949.9 },
  { id: 4, name: "Mitsubishi Electric LN25", price: 1639.0 },
];

const Product = ({ onUpdate }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const product = products.find((product) => product.id === selectedId);
    setSelectedProduct(product);

  if (quantity > 0) {
      onUpdate(product, quantity);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdate(selectedProduct, newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
        const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (newQuantity > 0) {
        onUpdate(selectedProduct, newQuantity);
      } else {
        onUpdate(selectedProduct, 0); 
      }
    }
  };

  return (
    <div className="selectProduct">
      <div className="product">
      <h2> Select product </h2>
      <label>Product: </label>
      <select onChange={handleChange} value={selectedProduct.id}>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name} ({product.price.toFixed(2)} €)
          </option>
        ))}
      </select>
      <br />

      <div className="quantity">
        <label>Quantity: </label>
        <button
          className="quantityButton"
          onClick={decreaseQuantity}
          disabled={quantity <= 0}
        >
          -
        </button>
        <span style={{ margin: "0 20px", fontSize: "1.5rem" }}>{quantity}</span>
        <button className="quantityButton" onClick={increaseQuantity}>
          +
        </button>
      </div>
    </div>
    </div>
  );
};

Product.propTypes = {
  onUpdate: PropTypes.func.isRequired, 
};

export default Product;

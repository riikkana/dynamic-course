import PropTypes from "prop-types";

const OrderInfo = ({ product, quantity, total }) => {
  return (
    <div className="orderinfo">
      <h2>Order info</h2>
      {product && quantity > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>{quantity}</td>
              <td>{total.toFixed(2)} €</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No products selected.</p>
      )}
    </div>
  );
};

OrderInfo.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  total: PropTypes.number.isRequired,
};

export default OrderInfo;

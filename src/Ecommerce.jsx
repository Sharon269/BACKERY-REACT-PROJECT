import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  // Add to Cart
  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove One Item
  const removeFromCart = (id) => {
    const existingProduct = cart.find(
      (item) => item.id === id
    );

    if (existingProduct.quantity === 1) {
      setCart(
        cart.filter((item) => item.id !== id)
      );
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );

      setCart(updatedCart);
    }
  };

  // Total Amount
  const totalAmount = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 E-Commerce Store</h1>

      <h2>
        Cart Items:{" "}
        {cart.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      </h2>

      {/* Products Section */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow:
                "0px 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />

            <h2>{product.name}</h2>

            <h3>₹ {product.price}</h3>

            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      {/* Cart Section */}

      <h1>🛒 Cart Products</h1>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "250px",
                textAlign: "center",
                boxShadow:
                  "0px 2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                }}
              />

              <h3>{item.name}</h3>

              <p>
                <strong>Price:</strong> ₹
                {item.price}
              </p>

              <p>
                <strong>Quantity:</strong>{" "}
                {item.quantity}
              </p>

              <p>
                <strong>Subtotal:</strong> ₹
                {item.price * item.quantity}
              </p>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Remove 
              </button>
            </div>
          ))}
        </div>
      )}

      <hr />

      <h1>Total Amount: ₹{totalAmount}</h1>
    </div>
  );
}

export default App;
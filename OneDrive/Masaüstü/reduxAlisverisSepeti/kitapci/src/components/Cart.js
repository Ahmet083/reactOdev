import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
  )
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutari: $;{totalPrice.toFixed(2)}</h3>


      {props.cart.map(book =>(
        <div className="book">
        <img
          src={book.image}
             alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Yazar: (author.name} </p>
          <p>Fiyat: $;{book.price}</p>
          
          <button>-</button>
          <button>Sepeten Cikar</button>
          <button>+</button>
        </div>
      </div>

      ))}

      
    </div>
  );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect ( mapStateToProps ) (Cart);
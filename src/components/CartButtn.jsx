import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartButtn extends Component {
  render() {
    return (
      <div>
        <Link to="/CartPage" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

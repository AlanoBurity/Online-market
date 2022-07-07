import React, { Component } from 'react';

export default class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cardList: false,
    };
  }

  render() {
    const { cardList } = this.state;
    return (
      <div>
        {
          !cardList
          && (
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </span>
          )
        }
      </div>
    );
  }
}

import React, { Component } from 'react';
/* import { getProductId } from '../services/api'; */

export default class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cardList: true,
      idProduct: [],
      quant: [],
      list: [],
    };
  }

  componentDidMount() {
    this.saveList();
  }

  receiveLocalStorage = (item) => JSON.parse(localStorage.getItem(item));

  getCartPageProducts = () => this
    .map();

    saveList = () => {
      this.setState({
        list: this.receiveLocalStorage('productCart'),
      });
    }

    render() {
      const { cardList, list } = this.state;
      return (
        <div>
          {
            !cardList
              ? (
                <span data-testid="shopping-cart-empty-message">
                  Seu carrinho esta vazio
                </span>
              ) : (
                list.map(({ id, qtd, title, price, thumbnail }) => (
                  <div key={ id }>
                    <p data-testid="shopping-cart-product-name">{ title }</p>
                    <img
                      alt="Imagem produto"
                      src={ thumbnail }
                    />
                    <p>{`R$ ${price}`}</p>
                    <input type="number" data-testid="shopping-cart-product-quantity" />
                  </div>
                ))
              )
          }
        </div>
      );
    }
}

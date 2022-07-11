import React, { Component } from 'react';
import AmountProduct from '../components/AmountProduct';

export default class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cardList: false,
      list: [],
    };
  }

  componentDidMount() {
    this.saveList();
  }

  receiveLocalStorage = (item) => {
    if (localStorage.getItem(item)) return JSON.parse(localStorage.getItem(item));
    return [];
  }

    saveList = () => {
      this.setState({
        list: this.receiveLocalStorage('productCart'),
      }, () => {
        const { list } = this.state;
        if (list.length > 0) {
          this.setState({ cardList: true });
        }
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
                  Seu carrinho está vazio
                </span>
              ) : (
                list.map(({ id, qtd, title, price, thumbnail }) => (
                  <AmountProduct
                    key={ id }
                    id={ id }
                    qtd={ qtd }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                  />
                ))
              )
          }
        </div>
      );
    }
}

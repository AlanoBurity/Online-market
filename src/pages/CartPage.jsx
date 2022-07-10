import React, { Component } from 'react';
/* import { getProductId } from '../services/api'; */

export default class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cardList: false,
      // idProduct: [],
      // quant: [],
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

  // getCartPageProducts = () => this
  //   .map();

    saveList = () => {
      this.setState({
        list: this.receiveLocalStorage('productCart'),
      }, () => {
        const { list } = this.state;
        if (list.length > 0) {
          this.setState({ cardList: true });
        }
      });
      // cardList: true,
    }

    // handleClick = () => {
    //   const
    //   this.setState({
    //     quant:
    //   })
    // }

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
                  <div key={ id }>
                    <p data-testid="shopping-cart-product-name">{ title }</p>
                    <img
                      alt="Imagem produto"
                      src={ thumbnail }
                    />
                    <p>{`R$ ${price}`}</p>
                    {/* <input
                        type="number"
                        value={ qtd }
                        onClick={ this.handleClick }
                        data-testid="shopping-cart-product-quantity"
                      /> */}
                    <p
                      data-testid="shopping-cart-product-quantity"
                    >
                      {qtd}
                    </p>
                  </div>
                ))
              )
          }
        </div>
      );
    }
}

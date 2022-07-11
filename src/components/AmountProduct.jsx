import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class AmountProduct extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      qtd: '',
      title: '',
      price: '',
      thumbnail: '',
    };
  }

  componentDidMount() {
    this.updateState();
  }

  increaseQtd = () => {
    const { qtd } = this.state;
    const newQtd = qtd + 1;
    this.setState({
      qtd: newQtd,
    });
  }

  decreaseQtd = () => {
    const { qtd } = this.state;
    const newQtd = qtd - 1;
    if (qtd > 1) {
      this.setState({
        qtd: newQtd,
      });
    }
  }

  updateState = () => {
    const { id, qtd, title, price, thumbnail } = this.props;
    this.setState({
      id,
      qtd,
      title,
      price,
      thumbnail,
    });
  }

  render() {
    const { id, qtd, title, price, thumbnail } = this.state;
    return (
      <div key={ id }>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img
          alt="Imagem produto"
          src={ thumbnail }
        />
        <div>
          <p>{`R$ ${price}`}</p>
        </div>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQtd }
        >
          {' '}
          -
          {' '}
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {qtd}
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQtd }
        >
          {' '}
          +
          {' '}

        </button>
      </div>

    );
  }
}

AmountProduct.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qtd: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

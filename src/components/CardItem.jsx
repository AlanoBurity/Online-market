import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/CardItem.css';

export default class CardItem extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <div className="cart-item" name={ id } data-testid="product">
        <div className="title-item">{title}</div>
        <img src={ thumbnail } className="img-item" alt={ title } />
        <p className="price-item">{`R$ ${price.toFixed(2)}`}</p>
      </div>
    );
  }
}

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

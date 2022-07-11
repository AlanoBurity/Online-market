import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/ContainerItem.css';
import { Link } from 'react-router-dom';

export default class ContainerItem extends Component {
  render() {
    const { id, title, price, thumbnail, saveProductsLocalStorage } = this.props;
    return (
      <div className="cart-item">
        <Link data-testid="product-detail-link" to={ `/ItemPage/${id}` }>
          <div
            name={ title }
            id={ id }
            data-testid="product"
          >
            <div
              className="title-item"
            >
              {title}
            </div>
            <img
              src={ thumbnail }
              className="img-item"
              alt={ title }
            />
            <p
              className="price-item"
            >
              {`R$ ${price.toFixed(2)}`}

            </p>
          </div>
        </Link>
        <button
          type="button"
          value={ id }
          data-testid="product-add-to-cart"
          onClick={ () => saveProductsLocalStorage({
            id,
            qtd: 1,
            title,
            price,
            thumbnail,
          }) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ContainerItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  saveProductsLocalStorage: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/CardItem.css';
import { Link } from 'react-router-dom';

export default class CardItem extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     getIt: '',
  //   };
  // }

  // handleClick = (event) => {
  //   this.focus()
  //   }
  // }
  // focus = () => this.ref.focus;

  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <Link to={ `/ItemPage/${id}` }>
        <div onClick={ this.handleClick }>
          <div
            className="cart-item"
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
        </div>
      </Link>
    );
  }
}

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

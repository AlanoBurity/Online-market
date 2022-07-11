import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductId } from '../services/api';
import CartButtn from '../components/CartButtn';

export default class ItemPage extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      price: '',
      thumbnail: '',
      productId: [],
      emailUser: '',
      avaliationText: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProduct(id);
  }

  saveProductsLocalStorage = (productParams) => {
    if (localStorage.getItem('productCart')) {
      const cartProducts = [...(JSON.parse(localStorage.getItem('productCart')))];
      localStorage.setItem('productCart', JSON
        .stringify([...cartProducts, productParams]));
    } else {
      localStorage.setItem('productCart', JSON
        .stringify([productParams]));
    }
  }

    getProduct = async (id) => {
      const data = await getProductId(id);
      this.setState({
        id: data.id,
        title: data.title,
        price: data.price,
        thumbnail: data.thumbnail,
        productId: data,
      });
    }

    handleChangeAvaliation = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
      console.log(name);
      console.log(value);
    }

    render() {
      const {
        productId,
        id,
        price,
        title,
        thumbnail,
        emailUser,
        avaliationText,
      } = this.state;

      return (
        <div>
          <div>
            <CartButtn />
          </div>
          <div>
            <h3 data-testid="product-detail-name">{ productId.title }</h3>
            <img
              alt="Imagem produto"
              src={ productId.thumbnail }
            />
            <p>{`R$ ${productId.price}`}</p>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => this.saveProductsLocalStorage({
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

          <div>
            Avaliações
            <br />

            <form action="">
              <label htmlFor="input-email">
                email:
                <input
                  value={ emailUser }
                  name="emailUser"
                  id="input-email"
                  type="email"
                  data-testid="product-detail-email"
                  onChange={ this.handleChangeAvaliation }
                />
              </label>

              <div onChange={ this.handleChangeAvaliation }>
                <input type="radio" data-testid="1-rating" value="1" />
                <input type="radio" data-testid="2-rating" value="2" />
                <input type="radio" data-testid="3-rating" value="3" />
                <input type="radio" data-testid="4-rating" value="4" />
                <input type="radio" data-testid="5-rating" value="5" />
              </div>

              <br />

              <textarea
                data-testid="product-detail-evaluation"
                value={ avaliationText }
                name="avaliationText"
                id="input-evaluation"
                onChange={ this.handleChangeAvaliation }
              />

              <button
                type="button"
                data-testid="submit-review-btn"
                onClick={ this.handleClick }
              >
                Avaliar
              </button>
            </form>

          </div>
        </div>
      );
    }
}

ItemPage.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape(
      { id: PropTypes.number.isRequired },
    ).isRequired,
    }.isRequired,
  ).isRequired,
};

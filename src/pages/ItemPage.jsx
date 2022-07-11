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

   render() {
     const { productId, id, price, title, thumbnail } = this.state;
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

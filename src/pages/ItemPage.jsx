import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductId } from '../services/api';

export default class ItemPage extends Component {
  constructor() {
    super();
    this.state = {
      productId: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getItem(id);
  }

   getItem = async (id) => {
     const data = await getProductId(id);
     this.setState({ productId: data });
   }

   render() {
     const { productId } = this.state;
     return (
       <div>
         <h3 data-testid="product-detail-name">{ productId.title }</h3>
         <img
           alt="Imagem produto"
           src={ productId.thumbnail }
         />
         <p>{`R$ ${productId.price}`}</p>
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

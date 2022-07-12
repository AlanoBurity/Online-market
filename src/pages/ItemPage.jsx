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
      starRating: 0, // esse é o estado dos radio buttons que confesso não estao funcionando muito bem
      wasSubmit: false, // esse é o estado do bUtÃOO que se for true vai fazer o "submit" que seria salvar na lista ou deveria pelo menos kkkk
      evaluationList: [], // essa é lista de avaliação que ta dando erro mas nao sei onde
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

    handleChangeAvaliation = ({ target }) => { // função generica para controlar os estados
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    // essa função deve pegar todas as informações d avaliação e salvar no array da lista de avaliação
    handleClick = () => {
      const {
        wasSubmit,
        evaluationList, // essa é lista de avaliação que ta dando erro mas nao sei onde
        emailUser,
        avaliationText,
        starRating, // esse é o estado dos radio buttons que confesso não estao funcionando muito bem
      } = this.state;

      if (wasSubmit === true) { // checagem do estado do button
        this.setState({
          evaluationList: [ // aqui salvaria as informações no array
            emailUser,
            avaliationText,
            starRating,
          ],
        });
      }
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
        evaluationList,
        starRating,
      } = this.state;

      const { handleClick } = this.props;

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
                <input type="radio" name="1-rating" data-testid="1-rating" value="1" />
                <input type="radio" name="2-rating" data-testid="2-rating" value="2" />
                <input type="radio" name="3-rating" data-testid="3-rating" value="3" />
                <input type="radio" name="4-rating" data-testid="4-rating" value="4" />
                <input type="radio" name="5-rating" data-testid="5-rating" value="5" />
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
                value={ handleClick }
              >
                Avaliar
              </button>
            </form>
          </div>

          <div>
            {evaluationList.length > 0
              ? evaluationList.map((item) => (
                // <div>
                //   <p>{ item.emailUser }</p>
                //   <p>{ item.avaliationText }</p> // sou burro não sei usar o map ainda
                //   <p>{ item.starRating }</p>         mas acho que deu pra entnder a ideia ;)
                // </div>
              )
              ) : (
                <p>
                  Não exitem avaliações ainda.
                </p>
              )}
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
  handleClick: PropTypes.func.isRequired,
};

import React from 'react';
import Categories from '../components/Categories';
import CartButtn from '../components/CartButtn';
import {
  getCategories,
  getProductsFromTerm,
  getProductsCategories,
} from '../services/api';
import '../css/MainPage.css';
import CardItem from '../components/CardItem';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      listaProdutos: [],
      categoryList: [],
      inputSearch: '',
      productId: '',
    };
  }

  componentDidMount() {
    this.findCategorys();
  }

  findCategorys = async () => {
    const results = await getCategories();
    this.setState({ categoryList: results });
  }

  generateList = async () => {
    const { inputSearch } = this.state;
    const searchList = await getProductsFromTerm(inputSearch);
    this.setState({ listaProdutos: [...searchList.results] });
    return searchList;
  }

  detailsProduct = async ({ target: { id } }) => {
    this.setState({ productId: id });
  }

  generateListCategory = async ({ target: { id } }) => {
    const searchList = await getProductsCategories(id);
    this.setState({ listaProdutos: searchList.results });
  }

  onInputChange = ({ target: { value } }) => {
    this.setState({ inputSearch: value });
  }

  render() {
    const { listaProdutos, categoryList, inputSearch, productId } = this.state;
    return (
      <div>
        <div className="header-input">
          <input
            type="text"
            className="input-search"
            data-testid="query-input"
            name="inputSearch"
            value={ inputSearch }
            onChange={ this.onInputChange }
          />
          <button
            type="submit"
            onClick={ this.generateList }
            data-testid="query-button"
          >
            Buscar
          </button>
          <CartButtn />
        </div>
        <div className="render-body">
          <div>
            {categoryList.map(({ name, id }) => (
              <Categories
                key={ id }
                name={ name }
                id={ id }
                getId={ this.generateListCategory }
              />))}
          </div>
          <div className="list-itens">
            {listaProdutos.length > 0
              ? listaProdutos.map(({ id, title, price, thumbnail }) => (
                <CardItem
                  key={ id }
                  id={ id }
                  productId={ productId }
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                  value={ productId }
                  onClick={ this.detailsProduct }
                />))
              : (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;

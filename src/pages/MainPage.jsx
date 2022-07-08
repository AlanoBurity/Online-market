import React from 'react';
import Categories from '../components/Categories';
import CartButtn from '../components/CartButtn';
import { getCategories } from '../services/api';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      listaProdutos: [],
      categoryList: [],
    };
  }

  componentDidMount() {
    this.findCategorys();
  }

  findCategorys = async () => {
    const results = await getCategories();
    this.setState({ categoryList: results });
  }

  render() {
    const { listaProdutos, categoryList } = this.state;

    return (
      <div>
        <div>
          {listaProdutos.length > 0
            ? (
              <ul>
                { listaProdutos }
              </ul>
            ) : (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}
        </div>
        <div>
          {categoryList.map(({ name, id }) => (
            <Categories
              key={ id }
              name={ name }
              id={ id }
            />))}
        </div>
        <CartButtn />
      </div>
    );
  }
}

export default MainPage;

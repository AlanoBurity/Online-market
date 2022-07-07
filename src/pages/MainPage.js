import React from 'react';
import CartButtn from '../Components/CartButtn';
/* import CartPage from './CartPage'; */

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      listaProdutos: [],
    };
  }

  render() {
    const { listaProdutos } = this.state;

    return (
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
        <CartButtn />
      </div>
    );
  }
}

export default MainPage;

import React from 'react';

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
      </div>
    );
  }
}

export default MainPage;

import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    this.findCategorys();
  }

  findCategorys = async () => {
    const results = await getCategories();
    console.log(results);
  }

  render() {
    // const { categoryList } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="category"
        >
          teste
        </button>
      </div>
    );
  }
}

export default Categories;

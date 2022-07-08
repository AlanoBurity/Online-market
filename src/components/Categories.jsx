import PropTypes from 'prop-types';
import React from 'react';
import '../css/Categories.css';

class Categories extends React.Component {
  render() {
    const { name, id, getId } = this.props;
    return (
      <div>
        <button
          className="button-categories"
          type="button"
          data-testid="category"
          id={ id }
          onClick={ getId }
        >
          { name }
        </button>
      </div>
    );
  }
}

Categories.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  getId: PropTypes.func.isRequired,
};

export default Categories;

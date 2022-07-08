import PropTypes from 'prop-types';
import React from 'react';
import '../css/Categories.css';

class Categories extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <button
          className="button-categories"
          type="button"
          data-testid="category"
        >
          { name }
        </button>
      </div>
    );
  }
}

Categories.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Categories;

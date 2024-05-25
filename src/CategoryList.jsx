import { useState } from 'react';
import PropTypes from 'prop-types';
import './CategoryList.css';

const CategoryList = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="category-container">
    <div
      className="category"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="category-name">{category.name}</div>
      {isHovered && category.subcategories && category.subcategories.length > 0 && (
        <div className="subcategory-list">
          {category.subcategories.map((sub, index) => (
            typeof sub === 'string' ? (
              <div key={index} className="subcategory">{sub}</div>
            ) : (
              <CategoryList key={index} category={sub} />
            )
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

CategoryList.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subcategories: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          subcategories: PropTypes.array
        })
      ])
    )
  }).isRequired
};

CategoryList.defaultProps = {
  category: {
    subcategories: []
  }
};

export default CategoryList;
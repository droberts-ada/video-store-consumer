import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = ({items, ItemComponent, buttonText, buttonClickHandler}) => {
  const itemComponents = items.map((movie, i) => {
    return (
      <ItemComponent key={i}
        {...movie}
        buttonText={buttonText}
        onButtonClick={buttonClickHandler}
        />
    );
  });
  return (
    <div className="item-list__container">
      <ul className="item-list">
        {itemComponents}
      </ul>
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  ItemComponent: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonClickHandler: PropTypes.func.isRequired
}

export default ItemList

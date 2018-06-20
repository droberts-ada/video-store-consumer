import PropTypes from 'prop-types';
import React from 'react';

import './RentalSelection.css';

const RentalSelection = ({selectionType, name}) => {
  return (
    <div className="rental-selection header__item">
      <label className="rental-selection__label">
        Selected {selectionType}
      </label>
      <p className="rental-selection__name">
        {name}
      </p>
    </div>
  )
}

RentalSelection.propTypes = {
  selectionType: PropTypes.oneOf(['movie', 'customer']),
  name: PropTypes.string.isRequired,
}

export default RentalSelection;

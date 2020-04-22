import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip as TooltipUi } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  customTooltip: {
    fontSize: '1rem',
  },
}));

const Tooltip = ({ children, title, place }) => {
  const classes = useStyles();
  return (
    <TooltipUi
      title={title}
      aria-label={title}
      placement={place}
      arrow
      classes={{
        tooltip: classes.customTooltip,
      }}
    >
      {children}
    </TooltipUi>
  );
};

Tooltip.propTypes = {
  children: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  place: PropTypes.string,
};

Tooltip.defaultProps = {
  place: 'bottom',
};

export default Tooltip;

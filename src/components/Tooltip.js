import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip as TooltipUi } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  customTooltip: {
    fontSize: '1rem',
  },
}));

const Tooltip = ({ children, title }) => {
  const classes = useStyles();
  return (
    <TooltipUi
      title={title}
      aria-label={title}
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
};

export default Tooltip;

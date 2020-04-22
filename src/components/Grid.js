import React from 'react';
import PropTypes from 'prop-types';
import withUnmounted from '@ishawnwang/withunmounted';
import { Grid as GiphyGrid } from '@giphy/react-components';

class Grid extends React.Component {
  hasUnmounted = false;

  render() {
    const { wrapperWidth, columnsCount, images } = this.props;

    return <GiphyGrid width={wrapperWidth} columns={columnsCount} gutter={6} fetchGifs={images} />;
  }
}

Grid.propTypes = {
  wrapperWidth: PropTypes.number,
  columnsCount: PropTypes.number,
  images: PropTypes.PropTypes.func.isRequired,
};

Grid.defaultProps = {
  wrapperWidth: 400,
  columnsCount: 1,
};

export default withUnmounted(Grid);

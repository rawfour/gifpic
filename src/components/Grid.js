import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import withUnmounted from '@ishawnwang/withunmounted';
import { Grid as GiphyGrid } from '@giphy/react-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledGalleryGrid = styled(GiphyGrid)`
  opacity: 0;
  transition: 0.2s;
  animation: ${fadeIn} 1s 1s forwards;
`;

class Grid extends React.Component {
  hasUnmounted = false;

  render() {
    const { wrapperWidth, columnsCount, images } = this.props;
    return (
      <StyledGalleryGrid
        width={wrapperWidth}
        columns={columnsCount}
        gutter={6}
        fetchGifs={images}
      />
    );
  }
}

Grid.propTypes = {
  wrapperWidth: PropTypes.number,
  columnsCount: PropTypes.number,
  images: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

Grid.defaultProps = {
  wrapperWidth: 400,
  columnsCount: 1,
};

export default withUnmounted(Grid);

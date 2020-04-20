import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchImages as fetchImagesAction } from 'services/imageList/actions';

import Grid from 'components/Grid';
import Skeleton from 'components/Skeleton';

const StyledGalleryWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const GridGallery = ({ fetchImages, images, loading }) => {
  const [width] = useWindowSize();
  const [wrapperWidth, setWrapperWidth] = useState();
  const [columnsCount, setColumnsCount] = useState();
  const ref = useRef(null);
  useEffect(() => {
    const newWidth = ref.current.offsetWidth;
    if (newWidth < 570) {
      setColumnsCount(2);
    } else if (newWidth < 870) {
      setColumnsCount(3);
    } else {
      setColumnsCount(4);
    }
    setWrapperWidth(newWidth);
  }, [width]);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <StyledGalleryWrapper ref={ref}>
      {loading ? (
        <Skeleton wrapperWidth={wrapperWidth} columnsCount={columnsCount} />
      ) : (
        <Grid wrapperWidth={wrapperWidth} columnsCount={columnsCount} images={images} />
      )}
    </StyledGalleryWrapper>
  );
};

GridGallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  loading: PropTypes.bool.isRequired,
};

GridGallery.defaultProps = {
  images: null,
};

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImagesAction()),
});

const mapStateToProps = (state) => ({
  images: state.images.images,
  loading: state.images.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(GridGallery);

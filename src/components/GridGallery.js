import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from './Grid';
import Skeleton from './Skeleton';
import Text from './Text';
import { fetchImages as fetchImagesAction } from '../services/imageList/actions';

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

const GridGallery = ({ fetchImages, images, loading, limit, lang, t }) => {
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
  }, [limit, lang]);

  let content;
  if (loading) {
    content = <Skeleton wrapperWidth={wrapperWidth} columnsCount={columnsCount} />;
  } else if (!images) {
    content = (
      <Text color="grayText" size="l" noResults>
        {t('No_results')}
      </Text>
    );
  } else {
    content = <Grid wrapperWidth={wrapperWidth} columnsCount={columnsCount} images={images} />;
  }

  return <StyledGalleryWrapper ref={ref}>{content}</StyledGalleryWrapper>;
};

GridGallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  loading: PropTypes.bool.isRequired,
  limit: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
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
  limit: state.images.limit,
  lang: state.images.lang,
});

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(GridGallery));

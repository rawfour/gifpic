import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { fetchImages as fetchImagesAction } from 'services/imageList/actions';
import Grid from 'components/Grid';
import Skeleton from 'components/Skeleton';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledGalleryWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const StyledNoResults = styled.p`
  display: block;
  text-align: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.grayText};
  opacity: 0;
  transition: 0.2s;
  animation: ${fadeIn} 1s 1s forwards;
`;

const StyledGrid = styled(Grid)`
  opacity: 0;
  transition: 0.2s;
  animation: ${fadeIn} 1s 1s forwards;
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
    content = <StyledNoResults>{t('No_results')}</StyledNoResults>;
  } else {
    content = (
      <StyledGrid wrapperWidth={wrapperWidth} columnsCount={columnsCount} images={images} />
    );
  }

  return <StyledGalleryWrapper ref={ref}>{content}</StyledGalleryWrapper>;
};

GridGallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  loading: PropTypes.bool.isRequired,
  limit: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  t: PropTypes.shape().isRequired,
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

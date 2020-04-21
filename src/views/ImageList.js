import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import SectionTitle from 'components/SectionTitle';
import GridGallery from 'components/GridGallery';

const ImageList = ({ query, t }) => {
  return (
    <>
      <SectionTitle>{query || t('Trending')}</SectionTitle>
      <GridGallery />
    </>
  );
};

ImageList.propTypes = {
  query: PropTypes.string,
  t: PropTypes.func.isRequired,
};

ImageList.defaultProps = {
  query: '',
};

const mapStateToProps = (state) => ({
  query: state.images.query,
});

export default connect(mapStateToProps, null)(withNamespaces()(ImageList));

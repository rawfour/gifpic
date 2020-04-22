import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import GridGallery from '../components/GridGallery';
import Filters from '../components/Filters';
import ViewWrapper from '../components/ViewWrapper';

const ImageList = ({ query, t }) => {
  return (
    <ViewWrapper>
      <SectionTitle>{query || t('Trending')}</SectionTitle>
      <Filters />
      <GridGallery />
    </ViewWrapper>
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

import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import ViewWrapper from 'components/ViewWrapper';
import SectionTitle from 'components/SectionTitle';

const ErrorView = ({ t }) => {
  return (
    <ViewWrapper>
      <SectionTitle>{t('Error')}</SectionTitle>
    </ViewWrapper>
  );
};

ErrorView.propTypes = {
  t: PropTypes.shape().isRequired,
};

export default withNamespaces()(ErrorView);

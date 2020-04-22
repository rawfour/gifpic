import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import ViewWrapper from '../components/ViewWrapper';
import SectionTitle from '../components/SectionTitle';

const Notfound = ({ t }) => {
  return (
    <ViewWrapper>
      <SectionTitle>{t('Not_found')}</SectionTitle>
    </ViewWrapper>
  );
};

Notfound.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Notfound);

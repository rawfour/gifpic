import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';
import Select from 'components/Select';
import { connect } from 'react-redux';
import { setLang as setLangAction, setLimit as setLimitAction } from 'services/imageList/actions';

const StyledFiltersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 20px;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

const Filters = ({ setLang, setLimit, t }) => {
  const limitList = {
    label: t('Limit'),
    options: [25, 50, 100],
  };

  const langList = {
    label: t('Lang'),
    options: [
      'en',
      'es',
      'pt',
      'id',
      'fr',
      'ar',
      'tr',
      'th',
      'vi',
      'de',
      'it',
      'ja',
      'zh-CN',
      'zh-TW',
      'ru',
      'ko',
      'pl',
      'nl',
      'ro',
      'hu',
      'sv',
      'cs',
      'hi',
      'bn',
      'da',
      'fa',
      'tl',
      'fi',
      'iw',
      'ms',
      'no',
      'uk',
    ],
  };

  return (
    <StyledFiltersWrapper>
      <Select data={langList} tooltipText={t('Regional_tooltip')} action={setLang} />
      <Select data={limitList} tooltipText={t('Limit_tooltip')} action={setLimit} />
    </StyledFiltersWrapper>
  );
};

Filters.propTypes = {
  t: PropTypes.func.isRequired,
  setLang: PropTypes.func.isRequired,
  setLimit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => dispatch(setLangAction(lang)),
  setLimit: (limit) => dispatch(setLimitAction(limit)),
});

export default connect(null, mapDispatchToProps)(withNamespaces()(Filters));

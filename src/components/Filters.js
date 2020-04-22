import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';
import Select from 'components/Select';
import { connect } from 'react-redux';
import { setLang as setLangAction, setLimit as setLimitAction } from 'services/imageList/actions';

const StyledFiltersWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, auto);
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const Filters = ({ setLang, setLimit, t, lang, limit }) => {
  const handleSetLang = (e) => {
    const { value } = e.target;
    setLang(value);
  };

  const handleSetLimit = (e) => {
    const { value } = e.target;
    setLimit(value);
  };

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
      <Select
        data={langList}
        tooltipText={t('Regional_tooltip')}
        value={lang}
        action={handleSetLang}
      />
      <Select
        data={limitList}
        tooltipText={t('Limit_tooltip')}
        value={limit}
        action={handleSetLimit}
      />
    </StyledFiltersWrapper>
  );
};

Filters.propTypes = {
  t: PropTypes.func.isRequired,
  setLang: PropTypes.func.isRequired,
  setLimit: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => dispatch(setLangAction(lang)),
  setLimit: (limit) => dispatch(setLimitAction(limit)),
});

const mapStateToProps = (state) => ({
  lang: state.images.lang,
  limit: state.images.limit,
});

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(Filters));

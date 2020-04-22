import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SearchIcon from '../assets/svg/SearchIcon.svg';
import {
  setQuery as setQueryAction,
  fetchImages as fetchImagesAction,
} from '../services/imageList/actions';

const StyledSearchbarWrapper = styled.form`
  flex-basis: 100%;
  order: 2;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-basis: 300px;
    order: 0;
    margin-left: 20px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-basis: 400px;
  }
`;

const StyledSearchInput = styled.input`
  width: 100%;
  border-radius: 30px;
  padding: 1.3rem 2rem 1.3rem 5.6rem;
  margin-top: 20px;
  border: none;
  background: url(${SearchIcon}) no-repeat 1.8rem 50%;
  background-color: ${({ theme }) => theme.colors.grayBackground};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  &:focus {
    box-shadow: 0 0 30px 0 rgba(43, 86, 112, 0.1);
    background-color: ${({ theme }) => theme.colors.focusBackground};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 0;
    width: 220px;
    &:focus {
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 350px;
  }
`;

const Searchbar = ({ setQuery, t, fetchImages }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
    fetchImages();
  };

  return (
    <StyledSearchbarWrapper onSubmit={handleSubmit}>
      <StyledSearchInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={t('Search')}
      />
    </StyledSearchbarWrapper>
  );
};

Searchbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  fetchImages: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setQuery: (inputValue) => dispatch(setQueryAction(inputValue)),
  fetchImages: () => dispatch(fetchImagesAction()),
});

const mapStateToProps = (state) => ({
  query: state.images.query,
});

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(Searchbar));

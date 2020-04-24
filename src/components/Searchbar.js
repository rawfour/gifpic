import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SearchWhite from '../assets/svg/SearchIconWhite.svg';
import Search from '../assets/svg/SearchIcon.svg';
import {
  setQuery as setQueryAction,
  fetchImages as fetchImagesAction,
} from '../services/imageList/actions';

const StyledSearchbarWrapper = styled.form`
  flex-basis: 100%;
  margin-top: 20px;
  order: 2;
  position: relative;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-basis: 300px;
    order: 0;
    margin-left: 20px;
    margin-top: 0;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-basis: 400px;
  }
`;

const StyledSubmitButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  border: none;
  opacity: 0;
  height: 35px;
  width: 35px;
  border-radius: 30px;
  transition: 0.3s;
  cursor: pointer;
  background: url(${SearchWhite}) no-repeat 50% 50%;
  background-size: 15px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
`;

const StyledSearchIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  height: 35px;
  width: 35px;
  opacity: 1;
  transition: 0.3s;
  background: url(${Search}) no-repeat 50% 50%;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  border-radius: 30px;
  padding: 1.3rem 5.6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.grayBackground};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.m};
  &:focus {
    box-shadow: 0 0 30px 0 rgba(43, 86, 112, 0.1);
    background-color: ${({ theme }) => theme.colors.focusBackground};
    background-image: none;
    padding-left: 2rem;
    outline: 0;
    + ${StyledSubmitButton} {
      opacity: 1;
    }
    ~ ${StyledSearchIcon} {
      opacity: 0;
    }
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
      <StyledSubmitButton type="submit" />
      <StyledSearchIcon />
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

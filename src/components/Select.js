import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from './Tooltip';

const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    min-width: 150px;
  }
`;

const StyledInput = styled.label`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
  align-items: center;
  grid-gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledSelect = styled.select`
  border: none;
  background-color: ${({ theme }) => theme.colors.grayBackground};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 30px;
  padding: 1rem 3rem 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSizes.m};
  width: 100%;
  appearance: none;
`;

const StyledSelectIcon = styled(ExpandMoreIcon)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const StyledInnerWrapper = styled.div`
  position: relative;
`;

const Select = ({ data, action, value }) => {
  const { label, tooltipText, options } = data;

  return (
    <StyledSelectWrapper>
      {label && (
        <StyledInput htmlFor="outlined-age-native-simple">
          {label}
          {tooltipText && (
            <Tooltip place="top" title={tooltipText}>
              <HelpIcon />
            </Tooltip>
          )}
        </StyledInput>
      )}

      <StyledInnerWrapper>
        <StyledSelectIcon />
        <StyledSelect value={value} onChange={(e) => action(e)}>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </StyledSelect>
      </StyledInnerWrapper>
    </StyledSelectWrapper>
  );
};

Select.propTypes = {
  data: PropTypes.shape().isRequired,
  action: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  action: null,
};

export default Select;

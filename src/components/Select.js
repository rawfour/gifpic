import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from 'components/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpIcon from '@material-ui/icons/Help';

const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.label`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
  align-items: center;
  grid-gap: 10px;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledSelect = styled.select`
  border: none;
  background-color: ${({ theme }) => theme.colors.grayBackground};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 30px;
  padding: 1rem 2rem;
  min-width: 200px;
  font-size: 1.6rem;
  appearance: none;
`;

const StyledSelectIcon = styled(ExpandMoreIcon)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

const StyledInnerWrapper = styled.div`
  position: relative;
`;

const Select = ({ data, tooltipText, action }) => {
  const { label, options } = data;
  const [select, setSelect] = useState(options[0]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelect(value);
    if (action) {
      action(value);
    }
  };

  return (
    <StyledSelectWrapper>
      <StyledInput htmlFor="outlined-age-native-simple">
        {label}
        <Tooltip place="top" title={tooltipText}>
          <HelpIcon />
        </Tooltip>
      </StyledInput>

      <StyledInnerWrapper>
        <StyledSelectIcon />
        <StyledSelect value={select} onChange={handleChange}>
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
  tooltipText: PropTypes.string.isRequired,
  action: PropTypes.func,
};

Select.defaultProps = {
  action: null,
};

export default Select;

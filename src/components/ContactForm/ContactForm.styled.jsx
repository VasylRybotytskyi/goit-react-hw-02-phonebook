import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 30%;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  box-sizing: border-box;

  label {
    font-size: 18px;
    color: #333;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
  }

  button {
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
  }

  button:hover,
  button:active {
    background-color: #fff;
    color: #333;
  }
`;

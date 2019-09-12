import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  margin: 40px 0;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  flex: 3;
  padding-left: 15px;
  font-size: 24px;
  border: 2px solid #293858;

  @media (max-width: 575px) {
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  flex: 1;
  border-radius: 0;
  padding: 12px 40px;
  margin-left: 25px;
  background-color: #293858;
  border: 2px solid transparent;
  color: #f7bc13;
  font-size: 24px;
  transition: 0.3s ease;

  &:hover {
    border: 2px solid #293858;
    background-color: #f7bc13;
    color: #293858;
  }

  @media (max-width: 575px) {
    margin-left: 0;
    margin-top: 25px;
  }
`;

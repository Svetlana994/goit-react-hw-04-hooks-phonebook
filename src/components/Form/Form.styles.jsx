import styled from '@emotion/styled/macro';

export const WrapperForm = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0px 1px 5px 1px rgba(34, 60, 80, 0.4);
`;

export const BtnAdd = styled.button`
  display: flex;
  align-items: center;
  padding: 7px;
  border-color: transparent;
  border-radius: 5px;
  background-color: #c7cace;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    background-color: #3561d0;
    color: #fff;
  }
`;

export const BtnText = styled.span`
  margin-right: 5px;
`;

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  border-color: #a29f9f;
  border-radius: 5px;
  &:hover {
    border-color: #0741d3;
  }
`;

export const InputTitle = styled.p`
  margin-bottom: 10px;
`;

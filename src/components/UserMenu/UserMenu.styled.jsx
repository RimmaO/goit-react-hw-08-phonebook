import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  font-style: normal;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.04em;

  border: 1px solid black;
  border-radius: 4px;

  color: black;
  background-color: white;

  &:hover {
    background-color: orangered;
  }
`;

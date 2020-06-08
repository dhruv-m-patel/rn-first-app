import React from 'react';
import { Button as RNButton } from 'react-native';
import styled from 'styled-components';

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  padding: 0.5px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  background-color: #eee;
  border-radius: 10px;
  margin: 10px 0;
`;

export default function Button(props) {
  return (
    <ButtonContainer>
      <RNButton {...props} />
    </ButtonContainer>
  )
};

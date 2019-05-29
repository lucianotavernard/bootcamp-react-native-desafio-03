import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.View`
  padding: 20px;
  border-radius: 4px;
  background-color: white;

  margin: ${({ noMargin }) => (noMargin ? "0px" : "0 20px")};
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Input = styled.TextInput`
  align-self: stretch;
  margin-bottom: 20px;
  padding: 10px;
  border-width: 1px;
  border-radius: 4px;
  font-size: 16px;

  border-color: ${({ hasError }) => (hasError ? "#e37a7a" : "#ddd")};
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 45%;
  align-items: center;
  padding: 15px;
  border-radius: 4px;

  background-color: ${({ success }) => (success ? "#9dca83" : "#999")};
`;

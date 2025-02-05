import styled from 'styled-components/native';

export const SpaceContainer = styled.ScrollView`
  margin-bottom: 90px;
`;

export const CardToFill = styled.View`
  padding: ${({ theme }) => theme.spacing.double};

  height: ${({ theme }) => theme.spacing.multiple(27.5)};
  background: ${({ theme }) => theme.colors.primary};
  elevation: 3;
  box-shadow: 3px 3px 4px #00000065;
  border-radius: ${({ theme }) => theme.spacing.double};
`;

export const CardToFillText = styled.Text`
  font-size: 28px;

  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ChooseSection = styled.View``;

export const ChooseSectionText = styled.Text`
  font-size: 24px;

  margin-top: ${({ theme }) => theme.spacing.triple};
`;

interface ChooseCardProps {
  screenWidth: number;
}

export const ChooseCard = styled.View<ChooseCardProps>`
  display: flex;

  width: ${({ screenWidth }) => screenWidth - 32 + 'px'};

  margin-top: ${({ theme }) => theme.spacing.double};
  margin-right: ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  margin-left: ${({ theme }) => theme.spacing.double};

  padding: ${({ theme }) => theme.spacing.oneAndHalf};

  height: ${({ theme }) => theme.spacing.multiple(27.5)};
  background: ${({ theme }) => theme.colors.primaryText};
  elevation: 3;
  box-shadow: 3px 3px 4px #00000065;
  border-radius: ${({ theme }) => theme.spacing.double};
`;

export const ChooseCardText = styled.Text`
  font-size: 28px;
`;

interface ChooseCardButtonProps {
  selected: boolean;
}

export const ChooseCardButton = styled.TouchableOpacity<ChooseCardButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
  margin-left: auto;

  padding: ${({ theme }) => theme.spacing.oneAndHalf} ${({ theme }) => theme.spacing.multiple(4)};

  height: ${({ theme }) => theme.spacing.multiple(6)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.double};
  opacity: 1;

  background: ${({ theme, selected }) => (!selected ? theme.colors.primaryText : theme.colors.primary)};
`;

export const ChooseCardButtonText = styled.Text<ChooseCardButtonProps>`
  font-size: 20px;

  color: ${({ theme, selected }) => (!selected ? theme.colors.primary : theme.colors.primaryText)};
`;

export const ChooserTextSection = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(27.5)};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: ${({ theme }) => theme.spacing.double};
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const ChooserText = styled.Text`
  font-size: 40px;
`;

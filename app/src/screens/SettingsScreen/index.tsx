import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';

import { translate } from '../../translations';

import { Content } from '../../components/ScreenContainer';
import ScreenContainer from '../../components/ScreenContainer';
import BottomSheet from '../../components/BottomSheet';
import { StartHeader } from '../StartScreen/styles';
import useData from '../../hooks/useData';

import { UsernameInputText, UsernameInput, DisclaimerText, DisclaimerView } from './styles';

interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
}

const SettingsScreen: React.FunctionComponent<SettingsScreenProps> = ({ navigation }) => {
  const { username, setUsername } = useData();
  const empty = username === '';

  const onChangeUsername = (newUsername: string) => {
    setUsername(newUsername);
  };

  const saveName = () => {
    navigation.navigate('Home');
  };

  return (
    <ScreenContainer>
      <Content>
        <StartHeader>{translate('SettingsScreen.pageHeader')}</StartHeader>
        <UsernameInputText>{translate('SettingsScreen.inputHeader')}</UsernameInputText>
        <UsernameInput value={username} onChangeText={onChangeUsername} />
        <DisclaimerView>
          <DisclaimerText>{translate('SettingsScreen.disclaimer.first')}</DisclaimerText>
          <DisclaimerText bold>{translate('SettingsScreen.disclaimer.boldFirst')}</DisclaimerText>
          <DisclaimerText>{translate('SettingsScreen.disclaimer.second')}</DisclaimerText>
          <DisclaimerText bold>{translate('SettingsScreen.disclaimer.secondBold')}</DisclaimerText>
        </DisclaimerView>
      </Content>
      <BottomSheet
        goBackFalsy={empty}
        falsyAction={empty}
        callOnTruth={saveName}
        copy={{
          actionFalsy: translate('noSaveButton'),
          actionTruthy: translate('saveButton')
        }}
      />
    </ScreenContainer>
  );
};

export default SettingsScreen;

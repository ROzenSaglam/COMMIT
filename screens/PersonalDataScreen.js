import React from 'react';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const PersonalDataScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [emailInput, setEmailInput] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.border.brand },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { justifyContent: 'center', paddingLeft: 20 },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </View>
        </Touchable>
      </View>

      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
      >
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingBottom: 25 },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 25,
                marginLeft: 30,
                marginTop: 15,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Input your \npersonal data'}
          </Text>
          {/* sub title */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                marginLeft: 30,
                marginTop: 15,
                opacity: 0.4,
              },
              dimensions.width
            )}
          >
            {'Please fill in a few details below'}
          </Text>
          {/* Full Name */}
          <View>
            {/* title */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.medium,
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 30,
                  marginTop: 35,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Full name'}
            </Text>
            {/* Input */}
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newInputValue => {
                try {
                  setTextInputValue(newInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Enter your full name'}
              placeholderTextColor={theme.colors.text.light}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['Custom Color'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.text.light,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Email address */}
          <View>
            {/* title */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.medium,
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 30,
                  marginTop: 25,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Email address'}
            </Text>
            {/* Input */}
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newInputValue => {
                try {
                  setEmailInput(newInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Enter your email address'}
              placeholderTextColor={theme.colors.text.light}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['Custom Color'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.text.light,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={emailInput}
            />
          </View>
          {/* Birth date */}
          <View
            style={StyleSheet.applyWidth(
              { marginLeft: 30, marginRight: 30 },
              dimensions.width
            )}
          >
            {/* title */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.medium,
                  fontFamily: 'Inter_400Regular',
                  marginTop: 25,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Birth date'}
            </Text>
            <DatePicker
              autoDismissKeyboard={true}
              disabled={false}
              hideLabel={false}
              leftIconMode={'inset'}
              mode={'date'}
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              date={datePickerValue}
              format={'dd-mm-yyyy'}
              label={'Select yout birth date'}
              rightIconName={'AntDesign/calendar'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['Custom Color'],
                  borderColor: theme.colors.text.light,
                  borderRadius: 12,
                  marginTop: 8,
                  paddingLeft: 5,
                  paddingRight: 5,
                },
                dimensions.width
              )}
              type={'underline'}
            />
          </View>
          {/* Full address */}
          <View>
            {/* title */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.medium,
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 30,
                  marginTop: 25,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Full address'}
            </Text>
            <TextInput
              autoCorrect={true}
              changeTextDelay={500}
              multiline={true}
              numberOfLines={4}
              onChangeText={newTextAreaValue => {
                try {
                  setTextAreaValue(newTextAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              textAlignVertical={'top'}
              webShowOutline={true}
              placeholder={'Enter your full address'}
              placeholderTextColor={theme.colors.text.light}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['Custom Color'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.text.light,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 100,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 12,
                },
                dimensions.width
              )}
              value={textAreaValue}
            />
          </View>
          {/* Confirm */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                marginTop: 45,
              },
              dimensions.width
            )}
          >
            {/* Confirm enabled */}
            <Button
              iconPosition={'left'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.branding.primary,
                  borderRadius: 12,
                  color: palettes.App['Custom Color'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  height: 52,
                  marginLeft: 30,
                  marginRight: 30,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Confirm '}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PersonalDataScreen);

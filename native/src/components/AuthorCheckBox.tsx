import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { Author } from '../util/types';

interface AuthorCheckBoxProps {
  info: Author;
  isChecked: boolean;
  onPress: (id: string) => void;
}

class AuthorCheckBox extends React.Component<AuthorCheckBoxProps> {
  handleAuthorSelectChange = () => {
    const {
      info: { id },
      onPress,
    } = this.props;
    onPress(id);
  };

  render() {
    const { info, isChecked } = this.props;
    const { name } = info;

    return (
      <CheckBox
        containerStyle={styles.container}
        title={name}
        checked={isChecked}
        onPress={this.handleAuthorSelectChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 'calc(50% - 20px)',
  },
});

export default AuthorCheckBox;

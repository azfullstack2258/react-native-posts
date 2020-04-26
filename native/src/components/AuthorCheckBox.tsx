import React from 'react';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { toggleAuthorSelectStatus } from '../redux/reducers/filter';
import { RootState } from '../redux/reducers';
import { Author } from '../util/types';

interface AuthorCheckBoxProps {
  info: Author;
  selectedAuthors: string[];
  toggleAuthorSelectStatus: (id: string) => void;
}

class AuthorCheckBox extends React.Component<AuthorCheckBoxProps> {
  handleAuthorSelectChange = () => {
    const {
      info: { id },
      toggleAuthorSelectStatus,
    } = this.props;
    toggleAuthorSelectStatus(id);
  };

  render() {
    const { info, selectedAuthors } = this.props;
    const { id, name } = info;
    const isSelected = selectedAuthors.includes(id);

    return (
      <CheckBox
        key={id}
        title={name}
        checked={isSelected}
        onPress={this.handleAuthorSelectChange}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedAuthors: state.filter.selectedAuthorIds,
});

const mapDispatchToProps = {
  toggleAuthorSelectStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorCheckBox);

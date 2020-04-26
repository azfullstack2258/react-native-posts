import React from 'react';
import renderer from 'react-test-renderer';
import AuthorCheckBox from '../../components/AuthorCheckBox';

const mockProps = {
  info: {
    id: 'mock_author_id_12345678',
    name: 'Test Author',
  },
  isChecked: true,
  onPress: () => {},
};

describe('Author CheckBox', () => {
  it('can render author checkbox', () => {
    const authorCheckBox = renderer
      .create(<AuthorCheckBox {...mockProps} />)
      .toJSON();
    expect(authorCheckBox).toMatchSnapshot();
  });
});

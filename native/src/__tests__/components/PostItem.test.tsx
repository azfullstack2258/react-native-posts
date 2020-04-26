import React from 'react';
import renderer from 'react-test-renderer';
import PostItem from '../../components/PostItem';

const mockPostData = {
  id: 'a6cc3a8c-db06-4314-8a67-64687f065fe6',
  title: 'CQB',
  publishedAt: new Date(),
  author: 'Jeff Woolnough',
};

describe('Post Item', () => {
  it('can render post item', () => {
    const postItem = renderer
      .create(<PostItem {...mockPostData} onPress={() => {}} />)
      .toJSON();
    expect(postItem).toMatchSnapshot();
  });
});

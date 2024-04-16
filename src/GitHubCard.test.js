// GitHubCard.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import GitHubCard from './GitHubCard';

test('renders GitHubCard snapshot', () => {
  const tree = renderer
    .create(
      <GitHubCard
        username="Jbunz"
        imageUrl="C:\Users\jacob\Downloads\charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
        blurb="Photos make me nervous!"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import { render, screen } from '@testing-library/react';
import NewPost from './components/NewPost';
import '@testing-library/jest-dom';
describe('Data Displaying', () => {
    test('Add new posts',() => {
      render(<NewPost/>);
      const post = screen.getByText('Title');
      expect(post).toBeInTheDocument();
    });
});
  
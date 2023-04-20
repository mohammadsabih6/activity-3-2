import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import BlogData from './components/BlogData';
import data from './components/Data';

describe('Mocking', () => {
  const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
      return res(
        ctx.json(data))
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('displays blog posts', async () => {
    render(<BlogData />);
    const postArray = await screen.findAllByTestId('post');
    expect(postArray).toHaveLength(10);
  });
//   test('Add new posts',() => {
//     render(<NewPost />);
//     const post = screen.getByText(/Title/i);
//     expect(post).toBeInTheDocument();
//   });


});

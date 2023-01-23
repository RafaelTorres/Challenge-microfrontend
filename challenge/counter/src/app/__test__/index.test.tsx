import HomePage from '@root/src/pages';
import { render, screen } from '@testing-library/react';

const renderPage = () => render(<HomePage />);

describe('Root Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render home page', () => {
    const { container } = renderPage();
    const button = screen.queryByText(/Counter MF/);
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

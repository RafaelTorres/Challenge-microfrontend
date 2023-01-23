import { render, screen } from '@testing-library/react';
import CounterLabel, { CounterLabelProps } from '..';

const renderPage = (props?: Partial<CounterLabelProps>) => render(<CounterLabel {...props} />);

describe('Counter Label', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    const { container } = renderPage();

    const totalLabel = screen.queryByText(/0/);
    expect(totalLabel).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render the component with custom amount', () => {
    const { container } = renderPage({ count: 1 });

    const totalLabel = screen.queryByText(/1/);
    expect(totalLabel).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

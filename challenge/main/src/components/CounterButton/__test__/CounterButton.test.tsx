import { fireEvent, render, screen } from '@testing-library/react';
import CounterButton, { CounterButtonProps } from '..';

const handleClick = jest.fn();
const defaultProps = {
  onClick: handleClick,
};

const renderPage = (props?: Partial<CounterButtonProps>) => render(<CounterButton {...defaultProps} {...props} />);

describe('Counter Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    const { container } = renderPage();
    const button = screen.getByText(/Add to Cart/);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);

    expect(container).toMatchSnapshot();
  });

  it('should render the component with custom label', () => {
    const { container } = renderPage({ label: 'Agregar item' });
    const button = screen.queryByText(/Agregar item/);
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

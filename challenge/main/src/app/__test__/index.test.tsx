import HomePage from '@root/src/pages';
import { act, fireEvent, render, RenderResult, screen } from '@testing-library/react';

// Mock dynamic component (Federation component load using lazy loading)
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = ({ count = 0 }) => <p>{count}</p>;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

const renderPage = async () => {
  let component = {} as RenderResult;

  await act(async () => {
    component = render(<HomePage />);
  });

  return component;
};

describe('Root Page', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should render home page', async () => {
    const { container } = await renderPage();

    // Check if elements exist
    const title = screen.queryByText(/Counter - Module Federation/);
    expect(title).toBeInTheDocument();

    const buttonPlus = screen.queryByText('+');
    expect(buttonPlus).toBeInTheDocument();

    const buttonMinus = screen.queryByText('-');
    expect(buttonMinus).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should press on add item button and increase counter', async () => {
    const { container } = await renderPage();

    const button = screen.getByText('+');

    await act(() => {
      fireEvent.click(button);
    });

    const counterLabel = screen.queryByText('1');
    expect(counterLabel).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should press on add item button and decrease counter', async () => {
    const { container } = await renderPage();

    const button = screen.getByText('-');

    await act(() => {
      fireEvent.click(button);
    });

    const counterLabel = screen.queryByText('-1');
    expect(counterLabel).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

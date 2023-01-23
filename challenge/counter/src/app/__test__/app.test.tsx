import MyApp from '@root/src/pages/_app';
import { render, screen } from '@testing-library/react';
import { AppProps } from 'next/app';

const renderApp = ({ pageProps, router, Component }: AppProps) => {
  return render(<MyApp router={router} Component={Component} pageProps={pageProps} />);
};

const router: any = { asPath: '' };
const testComponent = () => <div>Dummy component</div>;

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render App', () => {
    const { container } = renderApp({ router, pageProps: {}, Component: testComponent });
    const button = screen.queryByText(/Dummy component/);
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

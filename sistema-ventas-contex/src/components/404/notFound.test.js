import { render } from '@testing-library/react';
import NotFound from './notFound';

test('Renders correctly page notfound', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProviderUsuario } from '../../contexts/global';
import Cart from './cart';

export default global.matchMedia =
    global.matchMedia ||
    function (query) {
        return {
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        };
    };


test('Renders correctly cart', () => {
    const data = {
        user: "test1@test.com",
        addCar: 1,
        setCurrent: jest.fn(),
        setAddCart: jest.fn()        
    }

    const { container } = render(
        <MemoryRouter>
            <ProviderUsuario value={data}>
                <Cart />
            </ProviderUsuario>
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
});

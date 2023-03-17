import { render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProviderUsuario } from '../../contexts/global';
import Login from './login';



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


test('Renders correctly Login', () => {
    const data = {
        user: "test1@test.com",        
        setUser: jest.fn()      
    }

    const { container } = render(
        <MemoryRouter>
            <ProviderUsuario value={data}>
                <Login />
            </ProviderUsuario>
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
});

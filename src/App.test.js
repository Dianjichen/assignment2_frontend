import {render, screen} from '@testing-library/react';
import {MemoryRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Signup from './components/Signup';
import userEvent from '@testing-library/user-event';

console.log("integration testing start");

test('renders home page and navigates to signup', async () => {
    const mockSignup = jest.fn();

    render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>

                <Route path="/" element={<App/>}/>

                <Route path="/signup" element={<Signup signup={mockSignup}/>}/>
            </Routes>
        </MemoryRouter>
    );


    expect(screen.getByText(/Blogs/i)).toBeInTheDocument();

    const link = screen.getByRole('link', {name: /Signup/i});
    userEvent.click(link);

    expect(await screen.findByPlaceholderText(/Username/i)).toBeInTheDocument();
});

console.log("integration testing end");

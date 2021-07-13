import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders price field', () => {
    render(<Input label="Price" placeholder='$' name="price" />);
    const linkElement = screen.getByPlaceholderText('$')
    expect(linkElement).toBeInTheDocument();
});

// test('renders length field', () => {
//     render(<Input label="Lenth" placeholder='Length' name="length" />);
//     const linkElement = screen.getByRole('Length')
//     expect(linkElement).toBeInTheDocument();
// });
// test('renders width field', () => {
//     render(<Input label="Width" placeholder='$' name="width" />);
//     const linkElement = screen.getByPlaceholderText('Width')
//     expect(linkElement).toBeInTheDocument();
// });
// test('renders thickness field', () => {
//     render(<Input label="Thickness" placeholder='Thickness' name="thickness" />);
//     const linkElement = screen.getByPlaceholderText('Thickness')
//     expect(linkElement).toBeInTheDocument();
// });
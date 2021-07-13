import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders text', () => {
    const text = "testing"
    render(<Input title={text} />);
    const linkElement = screen.getByText(text);
    expect(linkElement).toBeInTheDocument();
});
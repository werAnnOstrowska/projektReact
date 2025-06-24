import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ShoppingCartBtn from '../../components/Shop/ShoppingCartBtn';
import '@testing-library/jest-dom';

vi.mock('../../context/useCart.ts', () => ({
  useCart: () => ({
    cartItems: [{ id: '1', title: 'Test product', quantity: 2, price: 100 }],
    removeFromCart: vi.fn(),
  }),
}));

describe('ShoppingCartBtn', () => {
  it('renders icon with badge', () => {
    render(
      <MemoryRouter>
        <ShoppingCartBtn />
      </MemoryRouter>
    );

 
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();


    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('shows cart preview on hover', () => {
    render(
      <MemoryRouter>
        <ShoppingCartBtn />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    fireEvent.mouseEnter(link);


    expect(screen.getByText(/Quantity:/i)).toBeInTheDocument();
  });
});

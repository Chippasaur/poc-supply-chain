import { render, screen } from '@testing-library/react'
import Home from '../../pages'

describe('Home', () => {
  it('render without crashing', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Greeting, Alvin' })).toBeInTheDocument
  })
})

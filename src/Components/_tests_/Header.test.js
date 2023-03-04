import {render, screen, cleanup} from '@testing-library/react'
import Header from '../Header'


test('Should render Header component', ()=>{
    render(<Header/>)
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent('Home')
})


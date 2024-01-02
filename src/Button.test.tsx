import { render } from '@testing-library/react'
import { Button } from './Button'

describe('button', async () => {
  it('should render the button', () => {
    const { getByText } = render(
      <Button text="Click me" />,
    )
    expect(getByText('Click me')).toBeInTheDocument()
  })
})

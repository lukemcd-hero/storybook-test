import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Button.stories'

const { Default } = composeStories(stories)

const cmpTitle = 'cmpTitle'

test('renders the component', () => {
  render(<Default title={cmpTitle} />)
  expect(screen.getByTitle(cmpTitle)).toBeInTheDocument()
})

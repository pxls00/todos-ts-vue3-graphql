import { render } from '@testing-library/vue'
import AppButton from './app-button.vue'

test('renders test button', () => {
  const {debug} = render(AppButton)

  debug()
})
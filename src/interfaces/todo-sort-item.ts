import type SortOptions from '@/interfaces/types/get-todos-sort-options'
import type { Ref } from 'vue'

interface SortOption {
  value: SortOptions
  active: boolean
}

export default SortOption

import type SortQuery from '@/interfaces/get-todos-sort-argument' 

type GetTodos = (sort?: SortQuery, search?: string, limit?: number) => string 

export default GetTodos
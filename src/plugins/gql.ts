import Todos from '@/graphql/todos'
import type Api from '@/interfaces/graphql'

export default {
  install: (app: any) => {
    const api: Api = {
      todos: Todos(),
    }

    app.provide('gql', api)
  },
}

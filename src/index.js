import React from 'react'
import ReactDOM from 'react-dom'
import App from './Layout'
import 'bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cjaojkx0p6bzb0114qoeugpsb'}),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <App/>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()

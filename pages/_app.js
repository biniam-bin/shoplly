import '../styles/globals.css'
import Wrapper from "../components/Wrapper"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import store from '../app/store'
import { Provider } from 'react-redux'

//<Component {...pageProps} />

const client = new ApolloClient({
  uri: 'https://shoplly-api.techawks.io/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Provider store={store}>
        <Wrapper Component={Component} pageProps={pageProps} />
    </Provider>
      </ApolloProvider>

  )
}

export default MyApp

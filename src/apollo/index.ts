import { ApolloClient, InMemoryCache } from '@apollo/client';
import { token } from './token';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${token}`,
    }
});

export default client;

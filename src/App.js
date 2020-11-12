import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import ExchangeRates from './getLaunches'


const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query getLaunches {
        launches(limit: 5) {
          launch_date_utc
          launch_success
          rocket {
            rocket_name
          }
          details
          links {
            video_link
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

export default App;

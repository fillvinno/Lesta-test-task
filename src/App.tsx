import ApolloProviderComponent from "./ApolloProvider.tsx";
import ShipsPage from "./ShipsPage.tsx";


function App() {
  return (
    <ApolloProviderComponent>
      <ShipsPage />
    </ApolloProviderComponent>
  )
}

export default App

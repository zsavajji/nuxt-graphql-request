export default defineNuxtConfig({
  modules: ['../../src/module'],
  graphql: {
    clients: {
      countries: {
        endpoint: 'https://countries.trevorblades.com/',
      },
      starWars: {
        endpoint: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      },
      rickAndMorty: {
        endpoint: 'https://rickandmortyapi.com/graphql',
      },
      mergeAtRuntime: {
        endpoint: 'https://example.com',
      },
    },
    options: {},
  },
  runtimeConfig: {
    public: {
      graphql: {
        clients: {
          mergeAtRuntime: {
            endpoint: 'https://countries.trevorblades.com/',
          },
          runtimeOnly: {
            endpoint: 'https://countries.trevorblades.com/',
          },
        },
      },
    },
  },
});

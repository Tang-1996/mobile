// TODO: Use ApolloJS (https://www.apollographql.com/docs/react/) to generate GraphQL requests.

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static xhr(route, params, verb) {
    // const host = 'https://api.uni.ninja'
    const host = 'http://localhost:3000';
    const url = `${host}${route}`;

    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()

    return fetch(url, options).then( response => {
      let json = response.json();
      if (response.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json );
  }
}
export default Api

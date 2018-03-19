import gql from 'graphql-tag';

class Api {
    static host = 'https://localhost:3000';//'https://api.uni.ninja';

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
        const url = `${Api.host}${route}`;

        let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
        options.headers = Api.headers()

        return fetch(url, options).then( response => {
            let json = response.json();

            if (response.ok) {
                return json
            }

            return json.then(err => { throw err });
        }).then( json => json );
    }

    // GraphQL Queries

    static allUnis() {
        return gql`
            query {
                universities {
                    name
                }
            }
        `;
    }
}

export default Api;

export const FIREBASE_DB_BASEURL = 'https://test-react-native-a3c44.firebaseio.com';

const requestDefaults = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: {},
};

export async function queryFirebase(path, { body, method, ...params } = requestDefaults) {
  const requestMethod = method.toUpperCase();
  const requestPath = path.startsWith('/') ? path : `/${path}`;

  return fetch(`${FIREBASE_DB_BASEURL}${requestPath}.json`, {
    method: requestMethod,
    ...params,
    ...!['GET', 'DELETE'].includes(requestMethod) && { body: JSON.stringify(body) },
  }).then(
    (response) => response.json(),
  ).catch(
    (error) => error,
  );
}

import { sequence } from '@sveltejs/kit/hooks'
import { auth } from '$db/fake_auth';

async function logger({ event, resolve }) {
  const start_time = Date.now();
  console.log('start_time', start_time);
  const result = await resolve(event);
  console.log(`${Date.now() - start_time} ${event.request.method} ${event.url.pathname}`)
  return result
}

function authorize({ event, resolve }) {
  const user = auth();
  event.locals.user = user;
  return resolve(event);
}

export const handle = sequence(logger, authorize)

// // Intercepting fetch
// export function handleFetch({ request, fetch }) {
//   return fetch(request)
// }

// // Intercept Errors
// export function handleError({ error, event }) {
//   return {
//     message: 'Oops',
//     code: error.code
//   }
// }
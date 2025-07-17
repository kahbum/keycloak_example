const url = 
    "http://host.docker.internal:3000/callback?session_state=a5618f09-b7a8-4bbc-8320-2490f5c3ef37&code=5c8f0d41-8a69-48e4-a062-f308951b6f11.a5618f09-b7a8-4bbc-8320-2490f5c3ef37.9160b42c-6366-41dc-bf9b-8c73135cf0d8"

const request1 = fetch(url);
const request2 = fetch(url);

Promise
    .all([request1, request2])
    .then(async (responses) => {
        return Promise.all(responses.map((response) => response.json()));
    })
    .then((jsons) => console.log(jsons))
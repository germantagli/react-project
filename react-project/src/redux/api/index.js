export  function apiCall(method, url, body) {
    return fetch(url, {
        method, body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }).then(response =>response.json())
}
import { Notification } from 'element-react/next';
import 'element-theme-default';

export  function apiCall(method, url, body, viewNotification = false) {
    return fetch(url, {
        method, body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(response =>response.json())
    .then(
        viewNotification && Notification({
            title: 'Success',
            message: 'operation with success',
            type: 'success'
        })
    )
}
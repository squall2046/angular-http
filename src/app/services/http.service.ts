import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  axiosGet(api) {
    return new Promise((resolve, reject) => {
      axios.get(api)
        .then((data) => {
          console.log(data)

          resolve(data)
        })
    })
  }

  constructor() { }
}

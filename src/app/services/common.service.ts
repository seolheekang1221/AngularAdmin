import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }

  axiosError(error) {
    console.error(error.response || error.message || error);
  };
}

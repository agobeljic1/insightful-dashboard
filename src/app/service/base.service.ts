import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor() {}

  createObservableWithRandomDelay(data: any) {
    return of(data).pipe(delay(Math.random() * 200 + 300));
  }
}

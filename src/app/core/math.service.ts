import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

   sin(x: number) {
    return Math.sin(x);
  }

   cos(x: number) {
    return Math.cos(x);
  }
}


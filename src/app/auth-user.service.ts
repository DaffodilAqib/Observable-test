import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  user = new BehaviorSubject(null);
  constructor() { }
}

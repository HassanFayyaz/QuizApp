import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  

  sendIndexNumberToProgressBar(num:Number){
  this.source.next(num);
  }
  private source = new Subject<Number>();
  source$ = this.source.asObservable();

  sendObjectToServiceBar(obj:Object){
    this.obj.next(obj)
  }
  private obj = new Subject<Object>();
  object$ = this.obj.asObservable();
}

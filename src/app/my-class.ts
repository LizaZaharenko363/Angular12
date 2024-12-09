import { Injectable } from '@angular/core';
import { MyServiceService } from './my-service.service'; 

@Injectable({
  providedIn: 'root'
})
export class MyClass {
  constructor(private myService: MyServiceService) {}

  useService() {
    this.myService.logMessage('This is a message from MyClass');
  }
}

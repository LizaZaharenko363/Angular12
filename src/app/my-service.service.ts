import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  logMessage(message: string): void {
    console.log(`Log from MyService: ${message}`);
  }
}

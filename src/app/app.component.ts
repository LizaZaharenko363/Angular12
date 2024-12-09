import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyClass } from './my-class';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab12';
  constructor(private myClass: MyClass) {
    this.myClass.useService();
  }
}


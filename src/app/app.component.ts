import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  componentName = '';

  showError(): void {
    this.componentName = "error";
  }
  
  showInformation(): void {
    this.componentName = "information";
  }
}

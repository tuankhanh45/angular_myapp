import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng';
  @HostListener('scroll')
  public asd(): void {
  console.log('scrolling');
}
}


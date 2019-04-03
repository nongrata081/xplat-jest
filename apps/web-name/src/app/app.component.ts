import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@testXplat/web';

@Component({
  selector: 'trimbr-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}

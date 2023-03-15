import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  // Track the current step of the multi-step form
  step = 1;

  /**
   * Navigate to the next step in the form.
   */
  onNext() {
    this.step++;
  }

  /**
   * Navigate to the previous step in the form.
   */
  onPrevious() {
    return this.step--;
  }
}

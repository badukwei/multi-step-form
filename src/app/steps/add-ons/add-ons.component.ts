import { Component, EventEmitter, Output } from '@angular/core';
import { FormDataService } from 'src/app/service/form-data.service';

/**
 * A component that handles selecting add-ons for the multi-step form.
 */
@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent {
  //An output event emitter for the next step in the form.
  @Output() next = new EventEmitter<number>();
  //An output event emitter for the previous step in the form.
  @Output() previous = new EventEmitter<number>();

  constructor(public formDataService: FormDataService) {}

  /**
   * Toggles the selection of an add-on based on the index in the addOns array.
   * @param {number} index - The index of the add-on in the addOns array.
   */
  toggleAddOnSelection(index: number) {
    this.formDataService.billingData.addOns[index].isAdded =
      !this.formDataService.billingData.addOns[index].isAdded;
  }

  /**
   * Emits the next step event.
   */
  goToNextStep() {
    this.next.emit();
  }

  /**
   * Emits the previous step event.
   */
  goToPreviousStep() {
    this.previous.emit();
  }
}

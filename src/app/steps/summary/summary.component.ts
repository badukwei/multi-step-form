import { Component, EventEmitter, Output } from '@angular/core';
import { FormDataService } from 'src/app/service/form-data.service';

/**
 * A component that displays a summary of the selected plan, add-ons, and total price.
 */
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  // An output event emitter for the next step in the form.
  @Output() next = new EventEmitter<number>();
  // An output event emitter for the previous step in the form.
  @Output() previous = new EventEmitter<number>();

  /**
   * An array of added add-ons.
   */
  selectedAddOns = this.formDataService.getBillingData().addOns.filter(item => item.isAdded);

  constructor(
    public formDataService: FormDataService
  ) {
    console.log(this.selectedAddOns)
  }

  /**
   * Calculate the total price of the selected plan and added add-ons.
   * @returns {number} The total price.
   */
  countTotalPrice() {
    const planPrice = this.formDataService.getBillingData().plan.price
    const addOnPrice = this.selectedAddOns.reduce((sum, addOn) => {
      return sum + addOn.price
    }, 0)
    return planPrice + addOnPrice
  }

  /**
   * Submits the form data and emits the next step event.
   */
  submitFormData() {
    console.log(this.formDataService.getBillingData());
    this.next.emit();
  }

  /**
   * Emits the previous step event.
   */
  goToPreviousStep() {
    this.previous.emit();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormDataService } from 'src/app/service/form-data.service';

/**
 * A component that handles selecting a subscription plan for the multi-step form.
 */
@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
  // An output event emitter for the next step in the form.
  @Output() next = new EventEmitter<number>();
  // An output event emitter for the previous step in the form.
  @Output() previous = new EventEmitter<number>();

  /**
   * A list of available subscription plans.
   */
  planData = [
    {
      type: 'Arcade',
      price: 9,
    },
    {
      type: 'Advanced',
      price: 12,
    },
    {
      type: 'Pro',
      price: 15,
    },
  ];

  constructor(public formDataService: FormDataService) {}

  /**
   * Selects or deselects a subscription plan based on the index in the planData array.
   * @param {number} index - The index of the plan in the planData array.
   */
  selectOrDeselectPlan(index: number) {
    if (
      this.formDataService.getBillingData().plan.type ===
      this.planData[index].type
    ) {
      this.formDataService.setBillingData('plan', { type: '', price: 0 });
    } else {
      this.formDataService.setBillingData('plan', this.planData[index]);
    }
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

import { Injectable } from '@angular/core';
import { BillingData, BillingDataUpdate } from '../model/billing-data.model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  // A service that handles the state management for the multi-step form.
  billingData: BillingData = {
    info: {
      name: '',
      email: '',
      password: '',
    },
    plan: {
      type: '',
      price: 0,
    },
    addOns: [
      {
        name: 'Online Service',
        description: 'Access to multiplayer games',
        price: 1,
        isAdded: false,
      },
      {
        name: 'Larger Storage',
        description: 'Extra 1TB of cloud save',
        price: 2,
        isAdded: false,
      },
      {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: 2,
        isAdded: false,
      },
    ],
    isYearly: false,
  };

  /**
   * Return the current billing data.
   * @returns {BillingData} The current billing data object.
   */
  getBillingData(): BillingData {
    return { ...this.billingData };
  }

  /**
   * Update a specific step's data in the billingData object.
   * @template TStep - A keyof type representing the step name.
   * @param {TStep} stepName - The step name in the BillingData object.
   * @param {BillingDataUpdate[TStep]} data - The updated data for the specified step.
   */
  setBillingData<TStep extends keyof BillingData>(
    stepName: TStep,
    data: BillingDataUpdate[TStep]
  ) {
    this.billingData[stepName] = Object.assign({}, data);
  }

  /**
   * Toggle the billing type (isYearly) between true and false.
   */
  changeBillingType() {
    this.billingData.isYearly = !this.billingData.isYearly;
  }
}

// get資料的時候需要用 return，更新資料的時候不需要 return，做資料運算的時候需要。

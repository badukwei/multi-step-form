import { Injectable } from '@angular/core';
import { BillingData } from '../model/billing-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  billingData: BillingData = {
    info: {
      name: '',
      email: '',
      password: '',
    },
    plan: {
      type: '',
      price: 0
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

  constructor() { }

  getBillingData() {
    return this.billingData;
  }

  setBillingData(stepName: keyof BillingData, data: any) {
    this.billingData[stepName] = Object.assign({}, data);
  }

  changeBillingType() {
    this.billingData.isYearly = !this.billingData.isYearly;
  }
}
//data 寫在同一個裡面

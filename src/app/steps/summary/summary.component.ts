import { Component, EventEmitter, Output } from '@angular/core';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Output() onNext = new EventEmitter<any>();
  @Output() onPrevious = new EventEmitter<any>();

  addOns = this.formDataService.getBillingData().addOns.filter(item => item.isAdded);

  constructor(
    public formDataService: FormDataService
  ) {
    console.log(this.addOns)
  }

  countTotalPrice() {
    const planPrice = this.formDataService.getBillingData().plan.price
    const addOnPrice = this.addOns.reduce((sum, addOn) => {
      return sum + addOn.price
    }, 0)
    return planPrice + addOnPrice
  }

  back() {
    this.onPrevious.emit();
  }

  submit() {
    console.log(this.formDataService.getBillingData());
    this.onNext.emit();
  }
}

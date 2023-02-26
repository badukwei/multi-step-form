import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent {
  @Output() onNext = new EventEmitter<any>();
  @Output() onPrevious = new EventEmitter<any>();

  constructor(public formDataService: FormDataService) {}

  checkAddOn(index: number) {
    this.formDataService.billingData.addOns[index].isAdded =
      !this.formDataService.billingData.addOns[index].isAdded;
  }

  save() {
    this.onNext.emit();
    console.log(this.formDataService.billingData);
  }

  back() {
    this.onPrevious.emit();
  }
}

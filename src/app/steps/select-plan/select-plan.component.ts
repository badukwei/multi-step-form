import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent implements OnInit {
  @Output() onNext = new EventEmitter<any>();
  @Output() onPrevious = new EventEmitter<any>();
  planData = [
    {
      type: 'Arcade',
      price: 9,
    },
    {
      type: 'Advanced',
      price: 9,
    },
    {
      type: 'Pro',
      price: 9,
    },
  ];

  constructor(public formDataService: FormDataService) {}

  ngOnInit() {}

  select(index: number) {
    if (this.formDataService.getBillingData().plan.type === this.planData[index].type) {
      this.formDataService.setBillingData('plan', { type: '', price: 0 });
    } else {
      this.formDataService.setBillingData('plan', this.planData[index]);
    }
  }
  //1. object assign deep copy
  //2. empty and component
  //3. child and service render

  save() {
    this.onNext.emit();
  }

  back() {
    this.onPrevious.emit();
  }
}

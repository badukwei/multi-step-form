import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  step = 1;


  //設計表單
  //問題:資料傳遞(component)、年月計算
  //方案一:建立一個data-service，方案二:用child就好，方案三:直接全寫在app.component裡面

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    return this.step--;
  }

}

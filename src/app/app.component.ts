import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as wjcInput from 'wijmo/wijmo.angular2.input';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mp') mp: wjcInput.WjMultiSelect;

  myForm: FormGroup;

  constructor(private cdr: ChangeDetectorRef) {
    this.myForm = new FormGroup({
      selectedWidgets: new FormControl([], Validators.required)
    });

    this.myForm.valueChanges.subscribe(b => {
      console.log('onCheckedItemsChanged');
      console.log(b);
    });
  }

  addItem() {
    // console.log(this.mp);
    // this.mp.itemsSource.push({ prop: 'bolt', check: true });
    console.log(this.myForm.value);
    // this.myForm.patchValue({
    //   selectedWidgets: [{ prop: 'bracket', check: true }]
    // });
    this.mp.checkedItems = [{ prop: 'bracket', check: true }];
    // this.mp.itemsSource = [
    //   { prop: 'hinge', check: false },
    //   { prop: 'bracket', check: true },
    //   { prop: 'pin', check: false }
    // ];\
    this.mp.refresh();
  }

  onCheckedItemsChanged(s, e) {
    if (s.checkedItems.length === 0) {
      // s.text = null;
      // console.log(this.myForm.controls.selectedWidgets);
    }
  }

  availableWidgets = [
    { prop: 'hinge', check: false },
    { prop: 'bracket', check: false },
    { prop: 'pin', check: false }
  ];
}

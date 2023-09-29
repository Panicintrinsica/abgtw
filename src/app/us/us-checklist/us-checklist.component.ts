import { Component } from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-us-checklist',
  templateUrl: './us-checklist.component.html',
  styleUrls: ['./us-checklist.component.scss']
})
export class UsChecklistComponent {
  currentBudget = 0;
  currentAccommodation = 'camping';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.loadChecklist();
    const budget = localStorage.getItem('currentBudget-us');
    if (budget) {
      this.currentBudget = JSON.parse(budget);
    }
    const accommodation = localStorage.getItem('currentAccommodation-us');
    if (accommodation) {
      this.currentAccommodation = JSON.parse(accommodation);
    }
  }

  generalForm = this.fb.group({
    generalChecklist: this.fb.array([
      // General Items
      this.fb.control({name: 'Passport / ID', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Venue Tickets', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Emergency Contact Information', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Credit or Debit Card', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Hydration Pack or Reusable Water Bottle', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Sanitary Wipes', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Venue Snacks', checked: false, budget: '0', accommodation: 'any', tooltip: 'See Venue for details'}),
      this.fb.control({name: 'Battery Packs', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Hot-Weather Clothing', checked: false, budget: '0', accommodation: 'any', tooltip: 'UPF Protective clothing recommended'}),
      this.fb.control({name: 'Comfortable Outdoor Shoes', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Parasol or Umbrella', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Folding/Hand Fan', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Sunglasses', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Blanket', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Small Spray Bottles (For Misting)', checked: false, budget: '0', accommodation: 'any'}),
    ]),
    campingChecklist: this.fb.array([
      // General Items
      this.fb.control({name: 'Tent', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Rainfly', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'All-Season Sleeping Bag', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Pillows', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Sleeping Pad', checked: false, budget: '1', accommodation: 'any'}),
      this.fb.control({name: 'Sleeping Cot', checked: false, budget: '2', accommodation: 'any'}),
      this.fb.control({name: 'Sleeping Mask', checked: false, budget: '1', accommodation: 'any'}),
      this.fb.control({name: 'Foam Earplugs', checked: false, budget: '1', accommodation: 'any', tooltip: 'For sleeping'}),
      this.fb.control({name: 'Mallet or Camping Hammer', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Zip Ties', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Scissors', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Duct Tape', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Camping Towels', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Battery-Powered Lights or Lantern', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Generator', checked: false, budget: '4', accommodation: 'rv'}),
      this.fb.control({name: 'Jackery / Power Station', checked: false, budget: '4', accommodation: 'camping'}),
      this.fb.control({name: 'Solar Shade / Canopy', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Portable Table', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Camping Chairs', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'USB/Battery Powered Fan', checked: false, budget: '3', accommodation: 'any'}),
      this.fb.control({name: 'First Aid Kit', checked: false, budget: '0', accommodation: 'any'}),
      this.fb.control({name: 'Flashlight or Headlamp', checked: false, budget: '0', accommodation: 'any'}),
    ])
  })

  get generalChecklist(): FormArray {
    return this.generalForm.get('generalChecklist') as FormArray;
  }

  changeBudget() {
    localStorage.setItem('currentBudget-us', JSON.stringify(this.currentBudget));
    this.saveChecklist();
  }

  changeAccommodation() {
    localStorage.setItem('currentAccommodation-us', JSON.stringify(this.currentAccommodation));
    this.saveChecklist();
  }

  saveChecklist() {
    localStorage.setItem('generalChecklist-us', JSON.stringify(this.generalChecklist.value));
  }

  loadChecklist() {
    const checklist = localStorage.getItem('generalChecklist-us')
    if (checklist) {
      console.log(checklist)
      this.generalChecklist.patchValue(JSON.parse(checklist));
    }
  }

  checkItem(generalChecklist: FormArray, i: number) {
    const item = generalChecklist.at(i);
    item.setValue(
      {...item.value, checked: !item.value.checked}
    );

    this.saveChecklist()
  }

  shouldDisplay(item: any): boolean {
    return (item.budget <= this.currentBudget) && (item.accommodation === this.currentAccommodation || item.accommodation === 'any')
  }
}

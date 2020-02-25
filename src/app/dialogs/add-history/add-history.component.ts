import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.scss']
})
export class AddHistoryComponent {
  checkoutForm;
  constructor(
    private dialogRef: MatDialogRef<AddHistoryComponent>, 
    private formBuilder: FormBuilder) { 
      this.checkoutForm = this.formBuilder.group({
        date: '',
        name: '',
        surname: '',
        surname2: '',
        age: '',
        gender: '',
        street: '',
        avenue: '',
        number: '',
        city: '',
        email: '',
        phone: '',
        reference: '',
        ocupation: '',
        emergency: {
          name: '',
          phone: ''
        },
        background: {
          familyGeneticDisease: '',
          motive: '',
          disease: '',
          allergies: ''
        },
        medicalEvaluation: {
          isUnderTreatment: false,
          treatment: '',
          isOnAspirine: false,
          hasBloodBeenTransplanted: false,
          hasTakenDrugs: false,
          isPregnant: false,
          months: 0,
          hasExcesiveBleeding: false,
          hasCoagulationProblems: false,
          hasALHK: false,
          hasAT: false,
          hasHKLComplications: false,
          hasOsteoporosis: false,
          hasSTDs: false,
          hasCancer: false,
          hasHepatitis: false,
          hasFever: false,
          hasAsthma: false,
          hasDiabetes: false,
          hasGastricUlcer: false,
          hasThyroid: false,
          hasEpilepsy: false,
          hasTuberculosis: false,
          hasTachycardia: false,
          hasHighPressure: false,
          hasLowPressure: false,
          observations: ''
        }
      })
    }

  ngOnInit() {
  }
  date = new FormControl(new Date());

  public closeForm(){
    this.dialogRef.close();
  }
}

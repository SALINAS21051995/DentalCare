import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.scss']
})
export class AddHistoryComponent {
  checkoutForm;
  date = new FormControl(new Date());
  constructor(
    private dialogRef: MatDialogRef<AddHistoryComponent>) { 
      this.checkoutForm = new FormGroup({
        date:  new FormControl({value: this.date},[Validators.required]),
        name:  new FormControl({value: ''},[Validators.required]),
        surname:  new FormControl({value: ''},[Validators.required]),
        surname2:  new FormControl({value: ''},[Validators.required]),
        age:  new FormControl({value: ''},[Validators.required]),
        gender:  new FormControl({value: ''},[Validators.required]),
        street:  new FormControl({value: ''},[Validators.required]),
        avenue:  new FormControl({value: ''},[Validators.required]),
        number:  new FormControl({value: ''},[Validators.required]),
        city:  new FormControl({value: ''},[Validators.required]),
        email:  new FormControl({value: ''},[Validators.required]),
        phone:  new FormControl({value: ''},[Validators.required]),
        reference:  new FormControl({value: ''},[Validators.required]),
        ocupation:  new FormControl({value: ''},[Validators.required]),       
        emergencyName:  new FormControl(''),
        emergencyPhone:  new FormControl(''),
        familyGeneticDisease:  new FormControl(''),
        motive:  new FormControl(''),
        disease:  new FormControl(''),
        allergies:  new FormControl(''),
        isUnderTreatment:  new FormControl(false),
        treatment:  new FormControl(''),
        isOnAspirine:  new FormControl(false),
        hasBloodBeenTransplanted:  new FormControl(false),
        hasTakenDrugs:  new FormControl(false),
        hasReactedToAnesthesia:  new FormControl(false),
        isPregnant:  new FormControl(false),
        months: new FormControl(''),
        hasExcesiveBleeding:  new FormControl(false),
        hasCoagulationProblems:  new FormControl(false),
        hasALHK:  new FormControl(false),
        hasAT:  new FormControl(false),
        hasHKLComplications:  new FormControl(false),
        hasOsteoporosis:  new FormControl(false),
        hasSTDs:  new FormControl(false),
        hasCancer:  new FormControl(false),
        hasHepatitis:  new FormControl(false),
        hasFever:  new FormControl(false),
        hasAsthma:  new FormControl(false),
        hasDiabetes:  new FormControl(false),
        hasGastricUlcer:  new FormControl(false),
        hasThyroid:  new FormControl(false),
        hasEpilepsy:  new FormControl(false),
        hasTuberculosis:  new FormControl(false),
        hasTachycardia:  new FormControl(false),
        hasHighPressure:  new FormControl(false),
        hasLowPressure:  new FormControl(false),
        observations:  new FormControl('')        
      })
    }

  ngOnInit() {
  }

  public closeForm(){
    this.dialogRef.close();
  }
  public onSubmit(){
    if(this.checkoutForm.valid){
      let isContinue = true;
      if(this.checkoutForm.value.isPregnant || this.checkoutForm.value.isUnderTreatment)
        if(this.checkoutForm.value.months == '' || this.checkoutForm.value.treatment == '')   
          isContinue = false;   
      //this.checkoutForm.reset();
    }
  }
  public triggerSubmitButton(){
    document.getElementById("formButton").click();
  }
}

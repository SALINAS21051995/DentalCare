import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ClinicHistoryService } from '../../services/clinic-history/clinic-history.service';
import { messageNotification, statusMessages, formsMessages, textAppComponent } from 'src/environments/environment';
import { SettingsService } from '../../services/settings/settings.service'


@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.scss']
})
export class AddHistoryComponent {
  checkoutForm;
  date = new FormControl(new Date());
  public appComponentText: any;
  constructor(
    private dialogRef: MatDialogRef<AddHistoryComponent>, 
    private clinicHistoryService: ClinicHistoryService,
    public setting: SettingsService) { 
      this.appComponentText = textAppComponent;
      this.checkoutForm = new FormGroup({
        date:  new FormControl({value: this.date},[Validators.required]),
        name:  new FormControl({value: ''},[Validators.required, Validators.maxLength(17), Validators.minLength(2)]),
        surname:  new FormControl({value: ''},[Validators.required, Validators.maxLength(10), Validators.minLength(2)]),
        surname2:  new FormControl({value: ''},[Validators.required, Validators.maxLength(10), Validators.minLength(2)]),
        age:  new FormControl({value: ''},[Validators.required,Validators.maxLength(2), Validators.minLength(1)]),
        gender:  new FormControl({value: ''},[Validators.required, Validators.maxLength(1)]),
        street:  new FormControl({value: ''},[Validators.required, Validators.maxLength(20), Validators.minLength(2)]),
        avenue:  new FormControl({value: ''},[Validators.required, Validators.maxLength(20), Validators.minLength(2)]),
        number:  new FormControl({value: ''},[Validators.required, Validators.maxLength(5), Validators.minLength(2)]),
        country:  new FormControl({value: ''},[Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
        city:  new FormControl({value: ''},[Validators.required, Validators.maxLength(15), Validators.minLength(2)]),
        email:  new FormControl({value: ''},[Validators.required, Validators.maxLength(45), Validators.email, Validators.minLength(2)]),
        phone:  new FormControl({value: ''},[Validators.required, Validators.maxLength(25), Validators.minLength(4)]),
        reference:  new FormControl({value: ''},[Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
        ocupation:  new FormControl({value: ''},[Validators.required, Validators.maxLength(20), Validators.minLength(2)]),       
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
  
  public closeForm(hasUpdate){
    this.dialogRef.close(true);
  }
  public onSubmit(){
    if(this.checkoutForm.valid && this.validateFieldsOnForm()){
      let isContinue = true;
      if((this.checkoutForm.value.isPregnant && this.checkoutForm.value.months == '') || (this.checkoutForm.value.isUnderTreatment && this.checkoutForm.value.treatment == ''))
          isContinue = false;   
      if(isContinue)
        this.clinicHistoryService.createHistory(this.checkoutForm.value).subscribe((response) => {        
        messageNotification.fire('', this.getNotificacionMessage(response), response.status);
        this.checkoutForm.reset();
        this.closeForm((response == "success" ? true : false));
        });  
    }else{
      messageNotification.fire('', formsMessages[this.setting.lang].fields, 'warning');
    }
  }
  private validateFieldsOnForm(): boolean{
    if(this.checkoutForm.value.date != '' && this.checkoutForm.value.name != ''
     && this.checkoutForm.value.surname != '' && this.checkoutForm.value.surname2 != '' 
     && this.checkoutForm.value.age != '' && this.checkoutForm.value.gender != '' && this.checkoutForm.value.street != '' && this.checkoutForm.value.avenue != '' 
     && this.checkoutForm.value.number != '' && this.checkoutForm.value.city != '' && this.checkoutForm.value.email != '' && this.checkoutForm.value.phone != ''
     && this.checkoutForm.value.reference != '' && this.checkoutForm.value.ocupation != '' && this.checkoutForm.value.country != '')
      return true;
    else
      return false;    
  }
  public triggerSubmitButton(){
    document.getElementById("formButton").click();
  }

  public getNotificacionMessage(msg) : string{
    switch(msg.status){
      case 'success':
      return  statusMessages[this.setting.lang].succes[msg.msg];
      case  'error':
      return statusMessages[this.setting.lang].error[msg.msg];
      case 'warning':
      return  statusMessages[this.setting.lang].warning[msg.msg];
    }
  }
}

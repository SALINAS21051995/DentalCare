import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material'
import {MatDialog, MatDialogRef, MatPaginator} from '@angular/material';
import { AddHistoryComponent } from './dialogs/add-history/add-history.component';
import { GeneralDataService } from './services/general-data/general-data.service';
import { messageNotification, statusMessages, textAppComponent } from 'src/environments/environment';
import { SettingsService } from './services/settings/settings.service';

export interface PatientData {
  count: Number;
  name: string;
  number: string;
  age: Number;
  id: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public appComponentText: any;
  public patientData: any = [];
  public title = 'app';
  public displayedColumns: string[] = ['number', 'name', 'phone', 'age'];
  public dataSource;
  public hasData = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private dataService: GeneralDataService, public setting: SettingsService){
    this.appComponentText = textAppComponent;
    this.updatePatients();
    //checkForLang();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openRegisterDialog(): void{
    const dialogRef = this.dialog.open(AddHistoryComponent, {
      height: '100%',
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.updatePatients()
    });
  }

  public updatePatients(): void{
    this.dataService.getTodaysPatients().subscribe(response => {
      if(response.status == "success"){
        this.hasData = (response.data.length == 0 ? false: true)
        this.dataSource = new MatTableDataSource(response.data);
        this.dataSource.paginator = this.paginator;
      }else{
        messageNotification.fire('', this.getNotificacionMessage(response), response.status);
      }
    })
  }

  public getNotificacionMessage(msg: any) : string{
    switch(msg.status){
      case 'success':
      return  statusMessages[this.setting.lang].succes[msg.msg];
      case  'error':
      return statusMessages[this.setting.lang].error[msg.msg];
      case 'warning':
      return  statusMessages[this.setting.lang].warning[msg.msg];
    }
  }

  public setLanguage(lang: string): void{
    this.setting.setCookie("lang", lang);    
    //location.reload();
  }
}

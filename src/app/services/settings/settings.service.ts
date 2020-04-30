import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public lang: string = "spanish";

  constructor() {
    this.checkForLang();
  }

  private getCookie(cname: string): string {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  public setCookie(cname: string, cvalue: string): void {
    document.cookie = cname + "=" + cvalue + ";";
    this.checkForLang();
  }
  private checkForLang(): void{
    let actualLang = this.getCookie("lang");
    if (actualLang == "" || (actualLang != "spanish" && actualLang != "english")) {
      this.setCookie("lang", "spanish");
    } else {
      this.lang = actualLang
    }  
  }
}

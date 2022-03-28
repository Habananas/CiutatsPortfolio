import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  constructor(private http: HttpClient) { }

  
getInfoPage(){
  return this.http.get('assets/data/infopage.JSON');
}

getInfoTeam(){
  return this.http.get('https://portfolio-pam-default-rtdb.europe-west1.firebasedatabase.app/Team.json');
}


}

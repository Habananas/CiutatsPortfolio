import { Component, OnInit } from '@angular/core';
import {InfoPageService} from '../../../services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  team: any = [];

  constructor(private InfoPageService: InfoPageService) { }

  ngOnInit(): void {
    this.InfoPageService.getInfoTeam()
     .subscribe((resp: any) => {
       console.log(resp);
       this.team = resp;
     });
  }

}

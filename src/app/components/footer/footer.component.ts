import { Component, OnInit } from '@angular/core';
import{InfoPageService} from '../../services/info-page.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  infopag: any='';
  date: any = new Date().getFullYear();
  
  constructor(private InfoPageService: InfoPageService) { }

  ngOnInit(): void {

    this.InfoPageService.getInfoPage()
     .subscribe((resp: any) => {
       this.infopag = resp;
     });
    }
}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(private interactionService:ServiceService) { }

  value=0;
  indexNum
  ngOnInit(): void {
    this.recieveIndexForProgressBar();
  }

  recieveIndexForProgressBar(){
    this.interactionService.source$.subscribe(response=>{
      console.log("Response",response);
      this.indexNum=response;
      this.value = (this.indexNum/20)*100;
      console.log(this.value)
      
    })
  }

}

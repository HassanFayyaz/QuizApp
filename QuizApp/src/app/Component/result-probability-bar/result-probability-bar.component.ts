import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-result-probability-bar',
  templateUrl: './result-probability-bar.component.html',
  styleUrls: ['./result-probability-bar.component.css']
})
export class ResultProbabilityBarComponent implements OnInit {

  constructor(private interactionService:ServiceService) { }

  correctPercentage=0;
  probabilityOfMaxPercentage=100;
  probabilityOfMinPercentage
  object


  ngOnInit(): void {
    this.recieveObjectForProbabilityBar();
  }

  recieveObjectForProbabilityBar(){
   this.interactionService.object$.subscribe(response=>{
     console.log(response);
     this.object=response;
     this.correctPercentage = ((this.object.correctAnswer/this.object.index)*100);
     this.probabilityOfMaxPercentage = (((this.object.correctAnswer+(this.object.totalQuestions-this.object.index))/this.object.totalQuestions)*100);
     this.probabilityOfMinPercentage= ((this.object.correctAnswer/this.object.totalQuestions)*100);

     console.log("Score:",this.correctPercentage);
     console.log("Max Score:",this.probabilityOfMaxPercentage);
     console.log("Min Score:",this.probabilityOfMinPercentage);

   })
  }

}

import { Component, OnInit } from '@angular/core';
import * as  jsonData from './myQuestion.json'
import { ServiceService } from 'src/app/service.service';



@Component({
  selector: 'app-main-questions',
  templateUrl: './main-questions.component.html',
  styleUrls: ['./main-questions.component.css']
})
export class MainQuestionsComponent implements OnInit {
  questions : any = (jsonData as any).default;
  parseQuestions
  easy = false;
  medium =false;
  hard = false;
  i=0;
  CorrectAnswer=false;
  WrongAnswerOne = false;
  WrongAnswerTwo = false;
  WrongAnswerThree= false;
  CorrectAnswerDiv=false;
  WrongAnswerDiv=false;
  NextQuestionDiv=false;
  correctAnswerScore =0;
  showRedButtonOne=false;
  showRedButtonTwo=false;
  showRedButtonThree=false;

  constructor(private interactionService : ServiceService) { }

  ngOnInit(): void {
    this.parsingJsonData();
    this.checkDifficultyLevel();
      
 }

 parsingJsonData(){
  this.questions.map(d=>{
    d.category = decodeURI(d.category);
    d.question = decodeURI(d.question);
    d.question = d.question.replace(/%3F/g, "?");
    d.question = d.question.replace(/%2C/g, " ");
    d.category = d.category.replace(/%20/g, " ")
    d.category = d.category.replace(/%3A/g, ":")
    d.correct_answer = decodeURI(d.correct_answer);
    console.log("Question:",d.question);
    console.log("Category:",d.category);
    console.log("Correct:",d.correct_answer);
    let i =0;
    d.incorrect_answers.map(e=>{
      d.incorrect_answers[i] = e.replace(/%20/g, " ");
      i++;
      e=decodeURI(e);
      console.log("Wrong:",e);
    })
  })  
 }

 checkDifficultyLevel(){
   if(this.questions[this.i].difficulty == "easy"){
     this.easy = true;
   }
   else if(this.questions[this.i].difficulty =="medium"){
     this.easy = true;
     this.medium=true;
   }
   else if(this.questions[this.i].difficulty =="hard"){
    this.easy = true;
    this.medium=true;
    this.hard = true;
   }
 }

 answerCorrect(){

  this.CorrectAnswer=true;
  this.WrongAnswerOne=true;
  this.WrongAnswerTwo=true;
  this.WrongAnswerThree=true;
  this.CorrectAnswerDiv=true;
  this.NextQuestionDiv=true;
  this.correctAnswerScore++;
  this.showRedButtonOne=true;
  this.showRedButtonTwo=true;
  this.showRedButtonThree=true;

 }

 answerIncorrect(num){
   if(num==0){
     this.WrongAnswerTwo=true;
     this.WrongAnswerThree=true;
   }
   else if(num==1){
     this.WrongAnswerOne=true;
     this.WrongAnswerThree=true;
   }
   else if(num==2){
     this.WrongAnswerOne=true;
     this.WrongAnswerTwo=true;
   }
   this.CorrectAnswer=true;
   this.WrongAnswerDiv=true;
   this.NextQuestionDiv=true;
   this.showRedButtonOne=true;
   this.showRedButtonTwo=true;
   this.showRedButtonThree=true;
 }

 nextQuestion(){

  this.CorrectAnswerDiv=false;
  this.WrongAnswerDiv=false;
  this.NextQuestionDiv=false;
  this.CorrectAnswer=false;
  this.i++;

  this.interactionService.sendIndexNumberToProgressBar(this.i);
  this.interactionService.sendObjectToServiceBar({
    "correctAnswer":this.correctAnswerScore,
    "totalQuestions":this.questions.length,
    "index": this.i
  }
  );

  this.WrongAnswerOne=false;
  this.WrongAnswerTwo=false;
  this.WrongAnswerThree=false;
  this.showRedButtonOne=false;
  this.showRedButtonTwo=false;
  this.showRedButtonThree=false;
  this.easy=false;
  this.medium=false;
  this.hard=false;
  this.checkDifficultyLevel();
  

   
 }



}

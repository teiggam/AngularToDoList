import { Component, OnInit } from '@angular/core';
import { toDo } from 'src/app/toDo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  toDoList: toDo [] = [
    {task:"Make Bed", completed: false},
    {task:"Eat breakfast", completed: true},
    {task:"Brush teeth", completed: true},
    {task:"Pet cat", completed: false},
    {task:"Clean dishes", completed: false},
    {task:"Pick up kids", completed: false},
    {task:"Do laundry", completed: true},
    {task:"Sleep", completed: false}

];

addTask(form: NgForm){
  let newTask:toDo = {task: form.form.value.task, completed: false};
  this.toDoList.push(newTask);
}

removeTask(index:number){
  this.toDoList.splice(index,1)
};

completeTask(index:number){
  this.toDoList[index].completed = true;
}

checkTrueExist(toDoList: toDo[]){
  for (var k=0; k<toDoList.length; k++){
    if(toDoList[k]){
      return true
    }
  }
  return false;
 
}
}






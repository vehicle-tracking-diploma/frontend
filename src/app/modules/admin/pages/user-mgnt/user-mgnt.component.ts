import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-mgnt',
  templateUrl: './user-mgnt.component.html',
  styleUrls: ['./user-mgnt.component.css']
})
export class UserMgntComponent implements OnInit {

  header: string[] = [];
  data = [
    {Name: 'John Doe', Age: 35, Gender: 'Male'},
    {Name: 'Jane Doe', Age: 28, Gender: 'Female'},
    {Name: 'Bob Smith', Age: 42, Gender: 'Male'},
    {Name: 'Bob Smith', Age: 42, Gender: 'Male'}
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.header = [
      'Name', 'Age', 'Gender'
      // 'Выберите',
      // 'Имя пользователя',
      // 'Роль',
      // 'Имя',
      // 'Эл.почта',
      // 'Часовой пояс',
      // 'Активен',
      // 'Посл.вход GMT+06:00',
    ];

  }

}

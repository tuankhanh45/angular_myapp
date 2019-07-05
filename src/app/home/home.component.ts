import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Textchange: string = "Hooman click here"
  h1Style: boolean = false
  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  firstClick() {
    this.h1Style = !this.h1Style;
    console.log("clicked", this.h1Style)
    this.Textchange = "Good job"
  }
  showDataClick() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }
}

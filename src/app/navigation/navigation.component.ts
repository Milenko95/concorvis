import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss', '../app.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }
}

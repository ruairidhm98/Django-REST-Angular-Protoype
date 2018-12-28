import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public pageData = [
    {'title': 'Create', 'url': '/create'},
    {'title': 'Retrieve', 'url': '/retrieve'},
    {'title': 'Update', 'url': '/update'},
    {'title': 'Delete', 'url': '/delete'}
  ];

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
  }

}

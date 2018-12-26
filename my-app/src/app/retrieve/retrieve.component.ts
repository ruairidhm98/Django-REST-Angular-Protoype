import { SnippetsService } from './../snippets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {

  public snippets: any;

  constructor(private snippetService: SnippetsService) { }

  ngOnInit() {
    this.snippetService.addSnippet("print(123")
        .subscribe(
          data => {
            this.snippets = data;
          }
        )
  }

  
}

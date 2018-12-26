import { SnippetsService } from './../snippets.service';
import { Snippet } from './../snippet';
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
    this.snippetService.getSnippets()
        .subscribe(
          data => {
            this.snippets = data;
          }
        )
  }

  
}

import { SnippetsService } from '../services/snippets.service';
import { Component, OnInit } from '@angular/core';
import { Snippet } from '../snippets/snippet';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {

  public snippets: any;

  constructor(private snippetsService: SnippetsService) { }

  ngOnInit() {
    const snippet = new Snippet();
    snippet.title = '';
    snippet.id = 10;
    snippet.code = 'print(123)';
    snippet.linenos = false;
    snippet.language = 'python';
    snippet.style = 'friendly';
    this.snippetsService.addSnippet(snippet)
      .subscribe(data => {
          this.snippets = data;
      });
  }
}

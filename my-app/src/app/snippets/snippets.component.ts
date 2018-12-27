import { Component, OnInit } from '@angular/core';

import { Snippet} from './../snippets/snippet';
import { SnippetsService } from '../services/snippets.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {
  snippets: Snippet[];

  constructor(private snippetsService: SnippetsService) { }

  ngOnInit() {
    this.getSnippets();
  }

  getSnippets(): void {
    this.snippetsService.getSnippets()
      .subscribe(snippets => this.snippets = snippets);
  }

  add(): void {
    const snippet = new Snippet();
    snippet.title = '';
    snippet.id = 10;
    snippet.code = 'print(123)';
    snippet.linenos = false;
    snippet.language = 'python';
    snippet.style = 'friendly';
    this.snippetsService.addSnippet(snippet)
        .subscribe(s => {
          this.snippets.push(s);
        });
  }

  delete(snippet: Snippet): void {
    this.snippets = this.snippets.filter(s => s !== snippet);
    this.snippetsService.deleteSnippet(snippet).subscribe();
  }

}

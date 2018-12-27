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

  add(code: string, title: string, language: string, style: string, token: string): void {
    const snippet = new Snippet(code, title, false, language, style);
    this.snippetsService.addSnippet(snippet, token)
      .subscribe(s => {
        this.snippets.push(s);
      });
  }

  update(code: string, title: string, language: string, style: string, token: string) {
    const snippet = new Snippet(code, title, false, language, style);
    this.snippetsService.updateSnippet(snippet, token)
      .subscribe(s => {
        this.snippets.push(s);
      });
  }

  delete(snippet: Snippet, token: string): void {
    this.snippets = this.snippets.filter(s => s !== snippet);
    this.snippetsService.deleteSnippet(snippet, token)
      .subscribe();
  }

}

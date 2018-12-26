import { Component, OnInit } from '@angular/core';

import { Snippet } from '../snippet';
import { SnippetsService } from '../snippets.service';

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

  getSnippets() : void {
    this.snippetsService.getSnippets()
      .subscribe(snippets => this.snippets = snippets);
  }

  add(code: string, id: number, language: string, owner: string, 
      style: string, title: string): void {

    let snippet: Snippet;

    snippet.setCode(code);
    snippet.setId(id);
    snippet.setLanguage(language);
    snippet.setLinenos(true);
    snippet.setOwner(owner);
    snippet.setStyle(style);
    snippet.setTitle(title); 

    this.snippetsService.addSnippet(snippet)
      .subscribe(hero => {
        this.snippets.push(snippet);
      });
  }

  delete(snippet: Snippet): void {
    this.snippets = this.snippets.filter(s => s !== snippet);
    this.snippetsService.deleteSnippet(snippet).subscribe();
  }

}

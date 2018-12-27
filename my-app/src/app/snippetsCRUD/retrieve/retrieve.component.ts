import { SnippetsService } from '../../services/snippets.service';
import { Component, OnInit } from '@angular/core';
import { Snippet } from '../../snippets/snippet';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {

  public snippets: any;

  constructor(private snippetsService: SnippetsService) { }

  ngOnInit() {
    /*const snippet = new Snippet('print("123")', '', false, 'python', 'friendly');
    this.snippetsService.addSnippet(snippet)
      .subscribe(data => {
          this.snippets = data;
      });*/
  }
}

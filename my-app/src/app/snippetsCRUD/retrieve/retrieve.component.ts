import { SnippetsService } from '../../services/snippetsService/snippets.service';
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
  }
}

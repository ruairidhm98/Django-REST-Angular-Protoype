import { Snippet } from 'src/app/snippets/snippet';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnippetsService } from 'src/app/services/snippetsService/snippets.service';

@Component({
  selector: 'app-retrieve-form',
  templateUrl: './retrieve-form.component.html',
  styleUrls: ['./retrieve-form.component.scss']
})
export class RetrieveFormComponent implements OnInit {
  retrieveForm: FormGroup;
  snippet: Snippet;

  constructor(private fb: FormBuilder,
    private snippetService: SnippetsService) {
    this.retrieveForm = this.fb.group({
      id: ['', Validators.required],
      token: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  field(fieldName: any) {
    return this.retrieveForm.get(fieldName);
  }

  retrieveSnippet(formValue: any) {
    const id = formValue['id'];
    const token = formValue['token'];
    return this.snippetService.getSnippet(id, token).subscribe(s => this.snippet = s);
  }

}

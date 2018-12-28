import { Snippet } from 'src/app/snippets/snippet';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnippetsService } from 'src/app/services/snippetsService/snippets.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent implements OnInit {
  deleteForm: FormGroup;

  constructor(private fb: FormBuilder,
              private snippetService: SnippetsService) {
    this.deleteForm = this.fb.group({
      id: ['', Validators.required],
      token: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  field(fieldName: any) {
    return this.deleteForm.get(fieldName);
  }

  deleteSnippet(formValue: any) {
    const id = formValue['id'];
    const token = formValue['token'];
    return this.snippetService.deleteSnippet(id, token).subscribe();
  }

}

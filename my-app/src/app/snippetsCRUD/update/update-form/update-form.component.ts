import { Snippet } from 'src/app/snippets/snippet';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnippetsService } from 'src/app/services/snippetsService/snippets.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  public updateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private snippetsService: SnippetsService) {
    this.updateForm = this.fb.group({
      id: ['', Validators.required],
      code: ['', [Validators.required, Validators.minLength(4)]],
      title: [''],
      language: [''],
      style: [''],
      token: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  field(fieldname: any) {
    return this.updateForm.get(fieldname);
  }

  updateSnippet(formValue: any) {
    const id = formValue['id'];
    const code = formValue['code'];
    const title = formValue['title'];
    const language = formValue['language'];
    const style = formValue['style'];
    const token = formValue['token'];
    const snippet = new Snippet(code, title, false, language, style);
    snippet.id = id;
    this.snippetsService.updateSnippet(snippet, id, token)
      .subscribe(s => {
        console.log(s);
      });
  }

}

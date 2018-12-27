import { Snippet } from 'src/app/snippets/snippet';
import { SnippetsComponent } from './../../../snippets/snippets.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnippetsService } from 'src/app/services/snippets.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  public createForm: FormGroup;

  constructor(private fb: FormBuilder,
              private snippetsService: SnippetsService) {
    this.createForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(4)]],
      title: ['title', Validators.required],
      language: ['python', Validators.required],
      style: ['friendly', Validators.required],
      token: ['dGVzdDphbmd1bGFy', Validators.required]
    });
  }

  field(fieldname) {
    return this.createForm.get(fieldname);
  }


  ngOnInit() {
  }

  createSnippet(formValue: any) {
    const code = formValue['code'];
    const title = formValue['title'];
    const language = formValue['language'];
    const style = formValue['style'];
    const token = formValue['token'];
    const snippet = new Snippet(code, title, false, language, style);
    this.snippetsService.addSnippet(snippet, token)
      .subscribe(s => {
        console.log(s);
      });
  }

}

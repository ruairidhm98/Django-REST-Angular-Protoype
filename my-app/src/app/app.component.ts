import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css', 
    './vendor/bootstrap/css/bootstrap.min.css',
    './vendor/fontawesome-free/css/all.min.css',
    './vendor/datatables/dataTables.bootstrap4.css',
    './css/sb-admin.css',
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}


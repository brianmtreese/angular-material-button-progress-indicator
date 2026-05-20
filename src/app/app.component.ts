import { Component } from '@angular/core';
import { ReportListComponent } from './reports/report-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReportListComponent],
})
export class AppComponent {}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
import { Report, ReportService } from './report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, MatProgressSpinner],
})
export class ReportListComponent {
  private readonly reportService = inject(ReportService);

  protected readonly reports = toSignal(this.reportService.getReports(), {
    initialValue: [] as Report[],
  });
  protected readonly downloadingId = signal<number | null>(null);

  protected download(report: Report) {
    if (this.downloadingId() !== null) return;

    this.downloadingId.set(report.id);
    this.reportService
      .download(report.id)
      .pipe(finalize(() => this.downloadingId.set(null)))
      .subscribe();
  }
}

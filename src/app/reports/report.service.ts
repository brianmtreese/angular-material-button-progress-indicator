import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Report {
  id: number;
  name: string;
  date: string;
  size: string;
}

const MOCK_REPORTS: Report[] = [
  { id: 1, name: 'Q1 Sales Report', date: 'Jan 31, 2025', size: '2.4 MB' },
  { id: 2, name: 'Q2 Sales Report', date: 'Apr 30, 2025', size: '3.1 MB' },
  { id: 3, name: 'Annual Summary 2024', date: 'Dec 31, 2024', size: '8.7 MB' },
];

@Injectable({ providedIn: 'root' })
export class ReportService {
  private readonly http = inject(HttpClient);

  getReports(): Observable<Report[]> {
    return of(MOCK_REPORTS).pipe(delay(300));
  }

  download(_reportId: number): Observable<void> {
    // return this.http.get(`/api/reports/${reportId}/download`, { responseType: 'blob' });
    return of(undefined).pipe(delay(2500));
  }
}

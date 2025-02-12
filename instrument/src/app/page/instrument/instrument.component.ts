import { Component, inject, signal } from '@angular/core';
import { InstrumentService } from '../../service/instrument.service';
import { AsyncPipe, CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Instrument } from '../../model/instrument';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';

@Component({
  selector: 'app-instrument',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    RouterModule,
    CurrencyPipe,
    UpperCasePipe,
    FilterPipe,
  ],
  templateUrl: './instrument.component.html',
  styleUrl: './instrument.component.scss'
})
export class InstrumentComponent {
  instrumentService = inject(InstrumentService);

  list$ = this.instrumentService.getAll();

  filterText = signal<string>('');

  onRemove(instrument: Instrument): void {
    this.instrumentService.remove(instrument.id).subscribe(
      () => this.list$ = this.instrumentService.getAll()
    );
  }


}

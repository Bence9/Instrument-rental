import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InstrumentService } from '../../service/instrument.service';
import { Observable, of } from 'rxjs';
import { Instrument } from '../../model/instrument';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrument-edit',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './instrument-edit.component.html',
  styleUrl: './instrument-edit.component.scss'
})
export class InstrumentEditComponent implements OnInit {

  @Input({required: true, transform: numberAttribute}) id: number = 0;
  
  instrumentService = inject(InstrumentService);
  router = inject(Router);

  instrument$ : Observable<Instrument> = of(new Instrument());

  ngOnInit(): void {
    if(this.id) {
      this.instrument$ = this.instrumentService.get(this.id);
    }
  }

  onUpdate(instrument: Instrument): void {
    if(this.id){
      this.instrumentService.update(instrument).subscribe(
        () => this.router.navigate(['/instrument'])
      );
    }
  }
  
}

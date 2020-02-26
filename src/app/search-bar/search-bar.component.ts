import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(event: any) {
    // Default browser behavior is to submit the form; this prevents it so we can submit here
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}

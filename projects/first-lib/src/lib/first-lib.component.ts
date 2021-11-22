import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-first-lib',
  template: `
    <p>
      first-lib works!
    </p>
  `,
  styles: [
  ]
})
export class FirstLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

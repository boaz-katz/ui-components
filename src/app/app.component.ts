import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  items = [ { name: 'abc' }, { name: 'cdf' }, { name: 'fgh' } ];
}

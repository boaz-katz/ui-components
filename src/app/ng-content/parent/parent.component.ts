import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less'],
})
export class ParentComponent {
  @Input() content!: TemplateRef<ParentComponent>;
  @Input() items!: unknown[];
  @Input() maxItemToDisplay = 1;
}

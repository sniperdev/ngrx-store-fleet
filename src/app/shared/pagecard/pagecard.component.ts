import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-pagecard',
  templateUrl: './pagecard.component.html',
  styleUrls: ['./pagecard.component.scss']
})
export class PagecardComponent {
  @Input() title!: string;
  @Input() items$!: Observable<any[]>;
  @Input() loading$!: Observable<boolean>;
  @Input() noItemsText!: string;
}

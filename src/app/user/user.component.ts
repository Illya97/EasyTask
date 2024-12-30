import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  user: InputSignal<User> = input.required<User>();
  selected: InputSignal<boolean> = input.required<boolean>();

  select: OutputEmitterRef<string> = output<string>();

  imagePath: Signal<string> = computed((): string => `assets/users/${this.user().avatar}`);

  onSelectUser(): void {
    this.select.emit(this.user().id);
  }
}

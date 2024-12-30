import { ChangeDetectionStrategy, Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly users: Signal<User[]> = signal(DUMMY_USERS).asReadonly();

  selectedUser: Signal<User | undefined> = computed((): User | undefined =>
    this.users().find((user: User): boolean => user.id === this.selectedUserId())
  );

  selectedUserId: WritableSignal<string> = signal('');

  onSelectUser(id: string): void {
    this.selectedUserId.set(id);
  }
}

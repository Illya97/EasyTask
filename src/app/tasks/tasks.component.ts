import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
  user: InputSignal<User> = input.required();

  #tasksService: TasksService = inject(TasksService);

  isAddingTask: WritableSignal<boolean> = signal(false);

  selectedUserTasks: Signal<Task[]> = computed((): Task[] => {
    console.log('computed selectedUserTasks');
    return this.#tasksService.getUserTasks(this.user().id)();
  });

  onStartAddTask(): void {
    this.isAddingTask.set(true);
  }

  onCloseAddTask(): void {
    this.isAddingTask.set(false);
  }
}

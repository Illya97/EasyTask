import { ChangeDetectionStrategy, Component, inject, input, InputSignal } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  task: InputSignal<Task> = input.required();

  #tasksService: TasksService = inject(TasksService);

  onCompleteTask(): void {
    this.#tasksService.removeTask(this.task().id);
  }
}

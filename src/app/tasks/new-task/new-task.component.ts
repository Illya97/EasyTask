import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTaskComponent {
  userId: InputSignal<string> = input.required();
  closeDialog: OutputEmitterRef<void> = output();

  #tasksService: TasksService = inject(TasksService);

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCloseDialog(): void {
    this.closeDialog.emit();
  }

  onSubmit(): void {
    this.#tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate()
      },
      this.userId()
    );
    this.onCloseDialog();
  }
}

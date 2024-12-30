import { Task } from './task/task.model';
import { dummyTasks } from './dummy-tasks';
import { NewTaskData } from './new-task/new-task-data.model';
import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  #tasks: WritableSignal<Task[]> = signal(dummyTasks);

  constructor() {
    const tasks: WritableSignal<string | null> = signal(localStorage.getItem('tasks'));
    if (tasks()) {
      this.#tasks.set(JSON.parse(tasks()!));
    }
  }

  getUserTasks(userId: string): Signal<Task[]> {
    return computed((): Task[] => this.#tasks().filter((task: Task): boolean => task.userId === userId));
  }

  addTask(taskData: NewTaskData, userId: string): void {
    this.#tasks.update((tasks: Task[]): Task[] => {
      tasks.push({
        id: new Date().getTime().toString(),
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
        userId: userId
      });
      return [...tasks];
    });

    this.#saveTask();
  }

  removeTask(id: string): void {
    this.#tasks.update((tasks: Task[]): Task[] => tasks.filter((task: Task): boolean => task.id !== id));
    this.#saveTask();
  }

  #saveTask(): void {
    localStorage.setItem('tasks', JSON.stringify(this.#tasks()));
  }
}

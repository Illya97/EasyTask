# EasyTask

**EasyTask** is a straightforward yet powerful task management tool.  
It’s built with Angular and features a user interface that allows you to quickly add and track tasks for multiple users.

(https://illya97.github.io/EasyTask/)

> **Note**: The screenshot above is just an example. To have it displayed properly in your README,  
> copy or place your own screenshot in the `docs/` folder and name it `demo-screenshot.png`,  
> or adjust the path accordingly.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [How to Add a New Task](#how-to-add-a-new-task)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Future Plans](#future-plans)
- [License](#license)
- [Author](#author)

---

## Features

1. **User List**: The left panel displays a list of users (e.g., Jasmine Washington, Emily Thompson, etc.).
2. **Task Creation**: The **Add Task** button opens a modal form where you can enter a title, summary, and due date.
3. **Responsive Interface**: The layout is optimized for various screen sizes.
4. **Custom Theme**: The purple color scheme provides a visually pleasing user experience.

---

## Technologies

- **Angular 16** (with Signals)
- **TypeScript**
- **HTML5 and SCSS** for styling
- **Node.js** and **npm** (for dependency management)
- **GitHub Pages** (for demo hosting)

---

## Installation and Setup

1. **Clone the repository**:

   git clone https://github.com/Illya97/EasyTask.git  
   cd EasyTask

2. **Install dependencies**:

   npm install

3. **Start the local development server**:

   ng serve

   By default, Angular serves on http://localhost:4200/.

4. **Build for production (optional)**:

   ng build --prod

---

## Project Structure

Key directories and files:

EasyTask/  
├─ src/  
│  ├─ app/  
│  │  ├─ components/      // Components (TaskList, TaskModal, etc.)  
│  │  ├─ models/          // Interfaces and models (User, Task)  
│  │  ├─ services/        // Services (task.service.ts, user.service.ts)  
│  │  └─ app.component.*  // Main application component  
│  └─ assets/             // Static assets (images, icons, etc.)  
├─ docs/                  // GitHub Pages folder (production build output)  
├─ angular.json  
├─ package.json  
├─ README.md              // (this file)  
└─ ...

---

## How to Add a New Task

1. Click **Add Task** next to the selected user.
2. In the **Add Task** modal window:
  - **Title**: The task title
  - **Summary**: A brief description
  - **Due Date**: The deadline
3. Click **Create** to add the task to the user’s list.

---

## Deploying to GitHub Pages

To publish this Angular project in the `EasyTask` subfolder on GitHub Pages  
(e.g., https://illya97.github.io/EasyTask/), follow these steps:

1. Build the project with the correct output folder and base href:

       ng build --output-path docs --base-href /EasyTask/

   This places the build files into the `docs` folder, and all links will be relative to `/EasyTask/`.

2. Commit and push the changes:

       git add .
       git commit -m "Build project into docs folder"
       git push

3. In your GitHub repository **Settings → Pages**:
  - Select **Branch** (e.g., `main`) and **Folder**: `docs`.
  - Click **Save**.

After a brief delay (usually under a minute), GitHub Pages should update,  
and you can access your site at:

    https://illya97.github.io/EasyTask/

---

## Future Plans

- **Authentication and Role Management**: Limit which users can see or modify specific tasks.
- **Advanced Analytics**: Track completion rates, overdue tasks, etc.
- **Additional Filters and Sorting**: Filter tasks by priority, creation date, etc.
- **Sprints/Projects**: Group tasks into higher-level entities.

---

## License

(If you use a license, place it here, for example the MIT License)

MIT License  
Copyright ...

Permission is hereby granted...

Otherwise, remove or modify this section as needed.

---

## Author

- **Illya** (Illya97) — [GitHub Profile](https://github.com/Illya97)

Please feel free to open an Issue or Pull Request if you have questions, ideas, or would like to contribute!

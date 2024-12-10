# Task Manager: Astro, Prisma, SQLite, OpenAI API

This project is the result of a test assignment for the Full-Stack Developer position at ECOM Market, December 2024.

Developed by <a href="https://artemshar.space/" target="_blanc" style="color: green">**Artem Shar**</a> (not finished)

![UI screenshot](./docs/todo_astro_svelte.png)

## How to Run the Application Locally

### Step 0: Verify Your Node.js Version

Ensure that your Node.js version is 22.2.0 or higher (recommended).

### Step 1: Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Step 2: Set Up Environment Variables

Create an .env file and specify the path to your local SQLite database file:

```bash
DATABASE_URL="file:./data/tasks.db"
```

Note: If you want to store your data externally, you can configure the URL as follows: 
```bash
DATABASE_URL="sqlite://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

### Step 3: Build and Run

Build and preview the application locally with the following commands:

- `npm run build`
- `npm run preview`

</br>

---
## Astro: Default configuration

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Project Development notes

### DONE:

- init Astro, проверил что запускается
- переименовал ветку в main
- удалил лишние компоненты и разметку и стили, добавил свою favicon
- обновил README и мета-информацию в package.json
- добавил engine versions в package.json
- добавил @astrojs/svelte
- добавил prisma, @prisma/client, sqlite
- создал .env с DATABASE_URL="file:./data/tasks.db"
- добавил модель Task, проверил что схема Prisma валидна ```npx prisma validate```
- сделал миграцию ```npx prisma migrate dev --name init_tasks```
- обновил Prisma клиент ```npx prisma generate``` - это необходимо делать после каждого изменения в схему данных [подробнее](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client)
- добавил /types/tasks для хранения типов/enums, относящихся к сущности Task, для Backend / Frontend: Status, Priority
- добавил компонент Task.svelte 
- добавил поддержку Tailwind CSS
- сделал стили, поигрался с UI: карточка Task, фон, цвета статусов
- обновил все компоненты на Svelte 
- добавил blanks server actions


### TO DO:

### Requirements

1. Backend (Astro Server Actions + Prisma):
   - Use Astro’s Server Actions to handle server-side logic and asynchronous
   requests. You can find more details on server actions here.
   - [x] Use Prisma ORM to manage an SQLite database.
   - The application should include the following server actions:
      - Create a new task.
      - Fetch all tasks.
      - Fetch a single task by ID.
      - Update a task by ID (mark it as completed, and edit
      title/description/priority).
      - Delete a task by ID.
   - Ensure validation and proper error handling using Zod or another validation
   library.
2. Frontend (Astro + Svelte):
   - Build the front end using Astro with Svelte components.
   - Ensure the front end uses server-side rendering (SSR) for optimal performance
   and SEO.
   - Create a simple and responsive UI where users can:
      - [x] View all tasks in a list format.
      - Create a new task.
      - Update a task (change status, edit fields).
      - Delete a task.
      - Filter tasks by priority and completion status (e.g., view only high-priority
   or completed tasks).
   - [x] Use Tailwind CSS for styling.
3. Database:
   - [x] SQLite is used as the database to store tasks.
   - [x] Set up a simple Prisma schema for the task model, which includes fields like title,
   description, priority, due date, and completion status.
4. Bonus (Optional):
   - Implement an OpenAI API integration where users can auto-generate a task
   description based on a given title.
5. Testing:
   - Write basic unit tests for server actions and Svelte components using Jest or
   another testing framework of your choice.
   - Ensure proper test coverage for the server actions and critical parts of the front
   end.

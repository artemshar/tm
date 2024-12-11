<script lang="ts">
  import Task from '../components/Task.svelte';
  import Input from '../components/Input.svelte';
  import { PriorityEnum, StatusEnum, type PriorityType, type StatusType } from '../types/tasks';
  import { actions } from 'astro:actions';
  import { formatDate } from '../utils/formatDate';

  let tasks: {
    title: string;
    description: string;
    duoDate: string;
    priority: PriorityType;
    status: StatusType;
  }[] = [
    {
      title: 'Complete this test task',
      description: 'Test Home Assignment: Full-Stack Developer (Astro, Svelte, Prisma, Node.js)',
      duoDate: '14 of December 2024',
      priority: 'MEDIUM',
      status: 'ACTIVE',
    },
  ];

  // Add new task handler
  const addTask = async (title: string) => {
    const newTask = {
      title: title,
      description: '...',
      duoDate: new Date().toLocaleDateString(),
      dueDate: formatDate(new Date),
      priority: PriorityEnum.MEDIUM,
      status: StatusEnum.ACTIVE,
    };
    tasks = [...tasks, newTask];
    
    const { data, error } = await actions.createNewTask(newTask);
    if(!error) {
      console.log(data);
    }
  };
</script>

<div class="container">
  <main>
    <section class="flex flex-col w-full items-center">
      <div class="max-w-[900px]">
        <!-- Input Task Component -->
        <Input className="mb-10" onCreate={addTask} />
        <!-- Task List -->
        <ul>
          {#each tasks as taskItem}
            <li class="mb-6">
              <Task
                title={taskItem.title}
                description={taskItem.description}
                duoDate={taskItem.duoDate}
                priority={taskItem.priority}
                status={taskItem.status}
              />
            </li>
          {/each}
        </ul>
      </div>
    </section>
  </main>
</div>

<style>
  li,
  ul {
    list-style: none;
  }
  .container {
    font-family: 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial,
      sans-serif;
    height: 100%;
    padding: 65px 15px 20px 15px;
    margin: 0 auto;
    width: 100%;
    z-index: 2;
  }

  main {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
    }
  }
</style>

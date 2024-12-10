import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import type { TaskType } from '../types/tasks';
import { StatusEnum, PriorityEnum } from '../types/tasks';
import prisma from '../db/client';

export const server = {
  // action declarations

  // Create a new task.
  createNewTask: defineAction({
    input: z.object({
      title: z.string(),
      description: z.string().optional(),
      status: z.enum([StatusEnum.ACTIVE, StatusEnum.COMPLETED]),
      priority: z.enum([PriorityEnum.LOW, PriorityEnum.MEDIUM, PriorityEnum.HIGH]),
      dueDate: z.string()
    }),
    handler: async (input) => {
      const newTask = await prisma.task.create({
        data: {
          title: input.title,
          description: input.description,
          status: input.status,
          priority: input.priority,
          dueDate: input.dueDate
        }
      });

      if (newTask.id) {
        return `The new task ${newTask.title} was created, id: ${newTask.id}.`;
      }
    },
  }),

  // Fetch all tasks
  getAllTasks: defineAction({
    handler: async () => {
      console.log(`Fetch all tasks`);
      const allTasks = await prisma.task.findMany();

      return allTasks;
    },
  }),

  // Fetch a single task by ID.
  getTaskById: defineAction({
    input: z.object({
      id: z.number(),
    }),
    handler: async (id) => {
      console.log(`Get the task with id: ${id}`);
      const task: TaskType | null = null;

      return task;
    },
  }),

  // Update a task by ID (mark it as completed, and edit title/description/priority).
  updateTaskById: defineAction({
    input: z.object({
      id: z.number(),
    }),
    handler: async (id) => {
      console.log(`Task with the id: ${id} was updated`);
      const task: TaskType | null = null;

      return task;
    },
  }),

  // Delete a task by ID.
  deleteTaskById: defineAction({
    input: z.object({
      id: z.number(),
    }),
    handler: async (id) => {
      console.log(`Task with the id: ${id} was deleted`);
      const task: TaskType | null = null;

      return task;
    },
  }),
};

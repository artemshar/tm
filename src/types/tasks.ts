export type StatusType = 'COMPLETED' | 'ACTIVE';

export type PriorityType = 'LOW' | 'MEDIUM' | 'HIGH';

export enum StatusEnum {
  COMPLETED = 'COMPLETED',
  ACTIVE = 'ACTIVE',
}

export enum PriorityEnum {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}


export type TaskType = {
  id: number;
  title: string;
  description?: string;
  status: StatusType;
  priority: PriorityType;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
};

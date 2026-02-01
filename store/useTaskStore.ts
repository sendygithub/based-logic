import { create } from 'zustand';

// Definisi tipe data untuk Task
interface Task {
  id: number;
  text: string;
}

interface TaskState {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [], // State awal
  addTask: (text) => 
    set((state) => ({ 
      tasks: [...state.tasks, { id: Date.now(), text }] 
    })),
  removeTask: (id) => 
    set((state) => ({ 
      tasks: state.tasks.filter((task) => task.id !== id) 
    })),
}));
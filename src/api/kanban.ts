import axios from 'axios';
import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';

import { fetcher2, endpoints } from 'src/utils/axios';

import { DEV_HOST_API } from 'src/config-global';

import { IKanban, IKanbanTask, IKanbanColumn } from 'src/types/kanban';

// ----------------------------------------------------------------------

// const CUSTOMHOST = process.env.NEXT_LOCAL_HOST;
const URL = `${DEV_HOST_API}${endpoints.kanban}`;
// const URL = `http://localhost:6001/api/pwniq${endpoints.kanban}`;
// const URL = `${CUSTOMHOST}${endpoints.kanban}`;
// const URL = `${HOST_API}${endpoints.kanban}`;

const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export function useGetBoard() {
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher2, options);

  const memoizedValue = useMemo(
    () => ({
      board: data?.board as IKanban,
      boardLoading: isLoading,
      boardError: error,
      boardValidating: isValidating,
      boardEmpty: !isLoading && !data?.board.ordered.length,
    }),
    [data?.board, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export async function createColumn(columnData: IKanbanColumn, userId: string) {
  /**
   * Work on server
   */
  // const data = { columnData };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'create-column' } });
  const data = null;
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      const columns = {
        ...board.columns,
        // add new column in board.columns
        [columnData.id]: columnData,
      };

      // add new column in board.ordered
      const ordered = [...board.ordered, columnData.id];

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          ordered,
        },
      };
    },
    false
  );
  await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function updateColumn(columnId: string, columnName: string, userId: string) {
  /**
   * Work on server
   */
  // const data = { columnId, columnName };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'update-column' } });
  const data = null;
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      // current column
      const column = board.columns[columnId];

      const columns = {
        ...board.columns,
        // update column in board.columns
        [column.id]: {
          ...column,
          name: columnName,
        },
      };

      return {
        ...currentData,
        board: {
          ...board,
          columns,
        },
      };
    },
    false
  );
  await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function moveColumn(newOrdered: string[], userId: string) {
  /**
   * Work in local
   */
  let data = null;

  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      // update ordered in board.ordered
      const ordered = newOrdered;

      data = {
        ...currentData,
        userId,
        board: {
          ...board,
          ordered,
        },
      };

      return data;
    },
    false
  );

  /**
   * Work on server
   */
  // const data = { newOrdered };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'move-column' } });
  // await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function clearColumn(columnId: string, userId: string) {
  /**
   * Work on server
   */
  // const data = { columnId };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'clear-column' } });
  const data = null;
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      const { tasks } = board;

      // current column
      const column = board.columns[columnId];

      // delete tasks in board.tasks
      column.taskIds.forEach((key: string) => {
        delete tasks[key];
      });

      const columns = {
        ...board.columns,
        [column.id]: {
          ...column,
          // delete task in column
          taskIds: [],
        },
      };

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
        },
      };
    },
    false
  );
  await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function deleteColumn(columnId: string, userId: string) {
  /**
   * Work on server
   */
  // const data = { columnId };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'delete-column' } });
  const data = null;
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      const { columns, tasks } = board;

      // current column
      const column = columns[columnId];

      // delete column in board.columns
      delete columns[columnId];

      // delete tasks in board.tasks
      column.taskIds.forEach((key: string) => {
        delete tasks[key];
      });

      // delete column in board.ordered
      const ordered = board.ordered.filter((id: string) => id !== columnId);

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
          ordered,
        },
      };
    },
    false
  );
  await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function createTask(columnId: string, taskData: IKanbanTask, userId: string) {
  /**
   * Work on server
   */
  // const data = { columnId, taskData };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'create-task' } });
  const data = null;
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      // current column
      const column = board.columns[columnId];

      const columns = {
        ...board.columns,
        [columnId]: {
          ...column,
          // add task in column
          taskIds: [...column.taskIds, taskData.id],
        },
      };

      // add task in board.tasks
      const tasks = {
        ...board.tasks,
        [taskData.id]: taskData,
      };

      return {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
        },
      };
    },
    false
  );
  await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function updateTask(taskData: IKanbanTask, userId: string) {
  /**
   * Work on server
   */
  // const data = { taskData };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'update-task' } });
  const data = null;
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      const tasks = {
        ...board.tasks,
        // add task in board.tasks
        [taskData.id]: taskData,
      };

      return {
        ...currentData,
        board: {
          ...board,
          tasks,
        },
      };
    },
    false
  );
  await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function moveTask(updateColumns: Record<string, IKanbanColumn>, userId: string) {
  /**
   * Work in local
   */
  let data = null;
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      // update board.columns
      const columns = updateColumns;

      data = {
        ...currentData,
        userId,
        board: {
          ...board,
          columns,
        },
      };

      return data;
    },
    false
  );

  /**
   * Work on server
   */
  // const data = { updateColumns };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'move-task' } });
  // await axios.post(URL, data, { params: { endpoint: userId } });
}

// ----------------------------------------------------------------------

export async function deleteTask(columnId: string, taskId: string, userId: string) {
  /**
   * Work on server
   */
  // const data = { columnId, taskId };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'delete-task' } });
  let data = null;
  /**
   * Work in local
   */
  mutate(
    URL,
    (currentData: any) => {
      const board = currentData.board as IKanban;

      const { tasks } = board;

      // current column
      const column = board.columns[columnId];

      const columns = {
        ...board.columns,
        [column.id]: {
          ...column,
          // delete tasks in column
          taskIds: column.taskIds.filter((id: string) => id !== taskId),
        },
      };

      // delete tasks in board.tasks
      delete tasks[taskId];
      data = {
        ...currentData,
        board: {
          ...board,
          columns,
          tasks,
        },
      };

      return data;
    },
    false
  );
  await axios.post(URL, data, { params: { endpoint: userId } });
}

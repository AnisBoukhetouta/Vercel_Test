import { useCallback } from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';

import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';

import { useGameContext } from 'src/game/hook/use-game-context';
import {
  createTask,
  updateTask,
  deleteTask,
  clearColumn,
  updateColumn,
  deleteColumn,
} from 'src/api/kanban';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';

import { IKanbanTask, IKanbanColumn } from 'src/types/kanban';

import KanbanTaskAdd from './kanban-task-add';
import KanbanTaskItem from './kanban-task-item';
import KanbanColumnToolBar from './kanban-column-tool-bar';
import CustomTypoButtonBox from '../custom-typo-button-box/custom-typo-button-box';

// ----------------------------------------------------------------------

type Props = {
  column: IKanbanColumn;
  tasks: Record<string, IKanbanTask>;
  index: number;
  userId: string;
};

export default function KanbanColumn({ column, tasks, index, userId }: Props) {
  const { setPlay } = useGameContext();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const openAddTask = useBoolean();

  const handleUpdateColumn = useCallback(
    async (columnName: string) => {
      try {
        if (column.name !== columnName) {
          updateColumn(column.id, columnName, userId);

          enqueueSnackbar('Update success!', {
            anchorOrigin: { vertical: 'top', horizontal: 'center' },
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [userId, column.id, column.name, enqueueSnackbar]
  );

  const handleClearColumn = useCallback(async () => {
    try {
      clearColumn(column.id, userId);
    } catch (error) {
      console.error(error);
    }
  }, [column.id, userId]);

  const handleDeleteColumn = useCallback(async () => {
    try {
      deleteColumn(column.id, userId);

      enqueueSnackbar('Delete success!', {
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
    } catch (error) {
      console.error(error);
    }
  }, [column.id, enqueueSnackbar, userId]);

  const handleAddTask = useCallback(
    async (taskData: IKanbanTask) => {
      try {
        createTask(column.id, taskData, userId);

        openAddTask.onFalse();
      } catch (error) {
        console.error(error);
      }
    },
    [column.id, openAddTask, userId]
  );

  const handleUpdateTask = useCallback(
    async (taskData: IKanbanTask) => {
      try {
        updateTask(taskData, userId);
      } catch (error) {
        console.error(error);
      }
    },
    [userId]
  );

  const handleDeleteTask = useCallback(
    async (taskId: string) => {
      try {
        deleteTask(column.id, taskId, userId);

        enqueueSnackbar('Delete success!', {
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
        });
      } catch (error) {
        console.error(error);
      }
    },
    [column.id, enqueueSnackbar, userId]
  );

  const renderAddTask = (
    <Stack
      spacing={2}
      sx={{
        pb: 3,
      }}
    >
      {openAddTask.value && (
        <KanbanTaskAdd
          status={column.name}
          onAddTask={handleAddTask}
          onCloseAddTask={openAddTask.onFalse}
        />
      )}

      <Button
        fullWidth
        size="large"
        color="inherit"
        startIcon={
          <Iconify
            icon={openAddTask.value ? 'solar:close-circle-broken' : 'mingcute:add-line'}
            width={18}
            sx={{ mr: -0.5 }}
          />
        }
        onClick={openAddTask.onToggle}
        sx={{ fontSize: 14 }}
      >
        {openAddTask.value ? 'Close' : 'Add Task'}
      </Button>
    </Stack>
  );

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          sx={{
            px: 2,
            borderRadius: 2,
            bgcolor: 'background.neutral',
            ...(snapshot.isDragging && {
              bgcolor: (bg) => alpha(bg.palette.grey[500], 0.24),
            }),
          }}
        >
          <Stack {...provided.dragHandleProps}>
            <KanbanColumnToolBar
              columnName={column.name}
              onUpdateColumn={handleUpdateColumn}
              onClearColumn={handleClearColumn}
              onDeleteColumn={handleDeleteColumn}
            />

            <Droppable droppableId={column.id} type="TASK">
              {(dropProvided) => (
                <Stack
                  ref={dropProvided.innerRef}
                  {...dropProvided.droppableProps}
                  spacing={2}
                  sx={{
                    py: 3,
                    width: 280,
                  }}
                >
                  {column.taskIds.length > 0 && column.name === 'Ready To Test' && (
                    <Box
                      component="div"
                      sx={{
                        p: theme.spacing(0, 0.5, 0.5, 0.5),
                      }}
                    >
                      <CustomTypoButtonBox title="Game" buttonTitle="Start" onClick={setPlay} />
                    </Box>
                  )}
                  {column.taskIds.map((taskId, taskIndex) => (
                    <KanbanTaskItem
                      key={taskId}
                      index={taskIndex}
                      task={tasks[taskId]}
                      onUpdateTask={handleUpdateTask}
                      onDeleteTask={() => handleDeleteTask(taskId)}
                    />
                  ))}
                  {dropProvided.placeholder}
                </Stack>
              )}
            </Droppable>

            {renderAddTask}
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}

import { Draggable } from '@hello-pangea/dnd';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper, { PaperProps } from '@mui/material/Paper';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';

import { useBoolean } from 'src/hooks/use-boolean';

import { bgBlur } from 'src/theme/css';
import { useGetTimer } from 'src/api/task';
import { useAuthContext } from 'src/auth/hooks';

import Iconify from 'src/components/iconify';

import { IKanbanTask } from 'src/types/kanban';

import KanbanDetails from './kanban-details';
import CustomTaskTimer from '../custom-task-timer/custom-task-timer';
import CustomTypoButtonBox from '../custom-typo-button-box/custom-typo-button-box';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  index: number;
  task: IKanbanTask;
  onUpdateTask: (updateTask: IKanbanTask) => void;
  onDeleteTask: VoidFunction;
};

export default function KanbanTaskItem({
  task,
  index,
  onDeleteTask,
  onUpdateTask,
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const openDetails = useBoolean();

  const { user } = useAuthContext();
  const { timer } = useGetTimer(user?.uid);

  const renderPriority = (
    <Iconify
      icon={
        (task.priority === 'low' && 'solar:double-alt-arrow-down-bold-duotone') ||
        (task.priority === 'medium' && 'solar:double-alt-arrow-right-bold-duotone') ||
        'solar:double-alt-arrow-up-bold-duotone'
      }
      sx={{
        position: 'absolute',
        top: 4,
        right: 4,
        ...(task.priority === 'low' && {
          color: 'info.main',
        }),
        ...(task.priority === 'medium' && {
          color: 'warning.main',
        }),
        ...(task.priority === 'hight' && {
          color: 'error.main',
        }),
      }}
    />
  );

  const renderImg = (
    <Box
      component="div"
      sx={{
        p: theme.spacing(1, 1, 0, 1),
      }}
    >
      <Box
        component="img"
        alt={task.attachments[0]}
        src={task.attachments[0]}
        sx={{
          borderRadius: 1.5,
          ...(openDetails.value && {
            opacity: 0.8,
          }),
        }}
      />
    </Box>
  );

  const renderTask = task.taskTimer && timer && (
    <>
      <Box
        component="div"
        sx={{
          p: theme.spacing(1, 1, 0, 1),
        }}
      >
        <CustomTaskTimer
          timer={timer}
          chart={{
            series: [
              {
                label: 'Next Random Task',
                percent: task.taskTimer,
                total: '03h 23m 12s',
              },
            ],
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          p: theme.spacing(1, 1, 1, 1),
        }}
      >
        <CustomTypoButtonBox title="Capture the Flag" />
      </Box>
    </>
  );

  const renderInfo = (
    <Stack direction="row" alignItems="center">
      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        sx={{
          typography: 'caption',
          color: 'text.disabled',
        }}
      >
        <Iconify width={16} icon="solar:chat-round-dots-bold" sx={{ mr: 0.25 }} />
        <Box component="span" sx={{ mr: 1 }}>
          {task.comments.length}
        </Box>

        <Iconify width={16} icon="eva:attach-2-fill" sx={{ mr: 0.25 }} />
        <Box component="span">{task.attachments.length}</Box>
      </Stack>

      <AvatarGroup
        sx={{
          [`& .${avatarGroupClasses.avatar}`]: {
            width: 24,
            height: 24,
          },
        }}
      >
        {task.assignee.map((x) => (
          <Avatar key={x.id} alt={x.name} src={x.avatarUrl} />
        ))}
      </AvatarGroup>
    </Stack>
  );

  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Paper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={openDetails.onTrue}
            sx={{
              width: 1,
              borderRadius: 1.5,
              overflow: 'hidden',
              position: 'relative',
              bgcolor: 'background.default',
              boxShadow: theme.customShadows.z1,
              '&:hover': {
                boxShadow: theme.customShadows.z20,
              },
              ...(openDetails.value && {
                boxShadow: theme.customShadows.z20,
              }),
              ...(snapshot.isDragging && {
                boxShadow: theme.customShadows.z20,
                ...bgBlur({
                  opacity: 0.48,
                  color: theme.palette.background.default,
                }),
              }),
              ...sx,
            }}
            {...other}
          >
            {!!task.attachments.length && renderImg}
            {!!task.taskTimer && renderTask}

            {!task.taskTimer && (
              <Stack spacing={2} sx={{ px: 2, py: 2.5, position: 'relative' }}>
                {renderPriority}

                <Typography variant="subtitle2">{task.name}</Typography>

                {renderInfo}
              </Stack>
            )}
          </Paper>
        )}
      </Draggable>

      <KanbanDetails
        task={task}
        openDetails={openDetails.value}
        onCloseDetails={openDetails.onFalse}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}

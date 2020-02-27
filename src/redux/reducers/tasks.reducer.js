import * as tasksConst from "../const/tasks.const.js";

const initState = {
  tasks: [],
  taskById: [{}],
  pendingTask: [{ taskName: "", taskComment: "" }],
  lastUpdate: 0
};

const tasks = (state = initState, action) => {
  switch (action.type) {
    case tasksConst.GET_ALL_TASKS:
      return { ...state, tasks: action.payload };

    case tasksConst.RESET_ALL:
      return {
        ...state,
        taskById: action.payload,
        pendingTask: { taskName: "", taskComment: "" }
      };

    case tasksConst.UPDATE:
      return { ...state, lastUpdate: state.lastUpdate + 1 };

    case tasksConst.SET_TASK_NAME:
      return {
        ...state,
        pendingTask: {
          taskName: action.taskName,
          taskComment: state.pendingTask.taskComment
        }
      };

    case tasksConst.SET_TASK_COMMENT:
      return {
        ...state,
        pendingTask: {
          taskName: state.pendingTask.taskName,
          taskComment: action.taskComment
        }
      };

    case tasksConst.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            taskName: state.pendingTask.taskName,
            taskUser: action.taskUser,
            taskUserPic: action.taskUserPic,
            taskDate: action.taskDate,
            taskComment: state.pendingTask.taskComment,
            isResolved: action.isResolved
          }
        ],
        pendingTask: { taskName: null }
      };

    case tasksConst.SUPPRESS_TASK:
      return { ...state };

    case tasksConst.SET_TASK:
      for (let i = 0; i < state.tasks.length; i++) {
        if (action.target === state.tasks[i].id) {
          return {
            ...state,
            taskById: [state.tasks[i]],
            pendingTask: { taskName: state.tasks[i].taskName }
          };
        }
      }
      break;

    case tasksConst.SET_RESOLVED:
      for (let i = 0; i < state.tasks.length; i++) {
        if (action.target === state.tasks[i].id) {
          let lastTasks = state.tasks;
          lastTasks[i].isResolved = action.payload;
          return {
            ...state,
            tasks: lastTasks,
            taskById: [{ ...state.taskById[0], isResolved: action.payload }]
          };
        }
      }
      break;

    case tasksConst.ASSIGN_USER:
      for (let i = 0; i < state.tasks.length; i++) {
        if (action.target === state.tasks[i].id) {
          let lastTasks = state.tasks;
          lastTasks[i].taskUser = action.payload;
          lastTasks[i].taskUserPic = action.taskUserPic;
          return {
            ...state,
            taskById: [
              {
                ...state.taskById[0],
                taskUserPic: action.taskUserPic,
                taskUser: action.payload
              }
            ]
          };
        }
      }
      break;

    case tasksConst.ASSIGN_DEADLINE:
      for (let i = 0; i < state.tasks.length; i++) {
        if (action.target === state.tasks[i].id) {
          let lastTasks = state.tasks;
          lastTasks[i].taskDate = action.payload;
          return {
            ...state,
            taskById: [
              {
                ...state.taskById[0],
                taskDate: action.payload
              }
            ]
          };
        }
      }
      break;

    default:
      return state;
  }
};

export default tasks;

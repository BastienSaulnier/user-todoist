import * as tasksConst from "../const/tasks.const.js";
import { tasks } from "../datas/tasks.data.js";

export const getAllTasks = () => ({
  type: tasksConst.GET_ALL_TASKS,
  payload: tasks
});

export const resetAll = () => ({
  type: tasksConst.RESET_ALL,
  payload: [{}]
});

export const setTaskName = newName => ({
  type: tasksConst.SET_TASK_NAME,
  taskName: newName
});

export const setTaskComment = newComment => ({
  type: tasksConst.SET_TASK_COMMENT,
  taskComment: newComment
});

export const addTask = newId => ({
  type: tasksConst.ADD_TASK,
  id: newId,
  taskName: "",
  taskUser: "Utilisateur en charge",
  taskUserPic: "",
  taskDate: "",
  taskComment: "",
  isResolved: false
});

export const suppressTask = () => ({
  type: tasksConst.SUPPRESS_TASK
});

export const setTask = taskId => ({
  type: tasksConst.SET_TASK,
  target: taskId
});

export const setResolved = (isResolved, taskId) => ({
  type: tasksConst.SET_RESOLVED,
  target: taskId,
  payload: isResolved
});

export const assignUser = (userName, taskUserPic, taskId) => ({
  type: tasksConst.ASSIGN_USER,
  target: taskId,
  taskUserPic: taskUserPic,
  payload: userName
});

export const assignDeadline = (date, taskId) => ({
  type: tasksConst.ASSIGN_DEADLINE,
  target: taskId,
  payload: date
});

export const update = () => ({
  type: tasksConst.UPDATE
});

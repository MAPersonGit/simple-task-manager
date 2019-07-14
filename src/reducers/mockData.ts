export const tasksData = [
  {
    id: 0,
    title: "test title"
  },
  {
    id: 1,
    title: "second test title"
  }
];

export const loadActionData = {
  data: tasksData,
  success: true,
  length: tasksData.length
};

export const loadActionExpect = {
  data: tasksData,
  success: true,
  length: tasksData.length
};

export const createActionData = {
  title: "third test title",
  success: true,
  id: 3,
  error: ""
};

export const createActionExpect = {
  data: [{ id: 3, title: "third test title" }],
  length: 1,
  success: true,
  error: ""
};

export const editActionData = {
  id: 3,
  success: true,
  title: "new third item title",
  error: ""
};

export const editActionExpect = {
  data: [{ id: 3, title: "new third item title" }],
  length: 1,
  success: true,
  error: ""
};

export const deleteTaskData = {
  success: true,
  error: "",
  id: 3
};

export const deleteActionExpect = {
  data: [],
  length: 0,
  success: true,
  error: ""
};

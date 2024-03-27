export function getSubheading(numOfTasks) {
  switch (true) {
    case numOfTasks === 0:
      return "No tasks";
    case numOfTasks === 1:
      return "One task";
    default:
      return `${numOfTasks} tasks`;
  }
}

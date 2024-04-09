# WEBPlanning

## Project Description

This project contains an implementation of an algorithm for calculating the duration of a work complex using time reserves. Additionally, it includes the capability to input data either manually or by reading pre-prepared data. Furthermore, a Gantt chart visualization is provided. The README outlines the data structures used, algorithm implementation, and provides examples of program operation.

## Data Structures Used

The main data structures used in this project include:
- Arrays: for storing task durations and their respective time reserves.
- Objects: for representing tasks and their attributes, such as duration and dependencies.

## Algorithm Implementation

The algorithm for calculating the duration of the work complex using time reserves involves the following steps:
1. Input task durations and time reserves.
2. Calculate the earliest start time for each task.
3. Calculate the latest start time for each task.
4. Determine the critical path and total duration based on the earliest and latest start times.
5. Generate the Gantt chart representation of the work complex.

## Example Usage

```javascript
// Sample code snippet demonstrating how to use the program
// Input data manually
const tasks = [
  { name: "Task 1", duration: 5, reserve: 1, dependencies: [] },
  { name: "Task 2", duration: 3, reserve: 0, dependencies: ["Task 1"] },
  { name: "Task 3", duration: 4, reserve: 2, dependencies: ["Task 1"] }
];

// Or read data from a file
// const tasks = readTasksFromFile('tasks.json');

const result = calculateWorkComplexDuration(tasks);
console.log(result);

// Output:
// {
//   totalDuration: 10,
//   criticalPath: ["Task 1", "Task 3"],
//   ganttChart: [
//     { task: "Task 1", start: 0, end: 5 },
//     { task: "Task 2", start: 5, end: 8 },
//     { task: "Task 3", start: 5, end: 9 }
//   ]
// }
```

## Gantt Chart Visualization

The Gantt chart is represented as an array of objects, where each object contains information about a task, its start time, and end time. This visualization provides a clear overview of task scheduling and helps identify the critical path.

## Git Repository

The Git repository for this project can be found at [k1fl1k](https://github.com/k1fl1k).

Feel free to contribute or provide feedback!

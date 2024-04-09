class Task {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.startTime = null;
  }

  assignStartTime(startTime) {
    this.startTime = startTime;
  }
}

class TimeReserve {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class TaskComplex {
  constructor() {
    this.tasks = [];
    this.timeReserves = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  addTimeReserve(timeReserve) {
    this.timeReserves.push(timeReserve);
  }

  distributeTimeReserves() {
    // Algorithm to distribute time reserves among tasks goes here
    // For simplicity, let's assume a simple round-robin approach
    let reserveIndex = 0;
    for (let task of this.tasks) {
      if (reserveIndex >= this.timeReserves.length) {
        console.log("Not enough reserves to distribute");
        break;
      }
      task.assignStartTime(this.timeReserves[reserveIndex].duration);
      reserveIndex++;
    }
  }

  printGanttChart() {
    console.log("Gantt Chart:");
    for (let task of this.tasks) {
      console.log(`${task.name}: ${task.startTime} - ${task.startTime + task.duration}`);
    }
  }
}

// Приклад використання програми
let task1 = new Task("Task 1", 4);
let task2 = new Task("Task 2", 3);
let task3 = new Task("Task 3", 5);

let reserve1 = new TimeReserve("Reserve 1", 2);
let reserve2 = new TimeReserve("Reserve 2", 3);

let taskComplex = new TaskComplex();
taskComplex.addTask(task1);
taskComplex.addTask(task2);
taskComplex.addTask(task3);
taskComplex.addTimeReserve(reserve1);
taskComplex.addTimeReserve(reserve2);

taskComplex.distributeTimeReserves();
taskComplex.printGanttChart();

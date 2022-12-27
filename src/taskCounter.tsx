import React from "react";

interface Counter {
  completedCount: number;
  incompleteCount:number;
}

export function TaskCounter({ completedCount, incompleteCount }: Counter) {
  return (
    <React.Fragment>
      <p>Task Completed: {completedCount} of {incompleteCount}</p>
    </React.Fragment>
  );
}


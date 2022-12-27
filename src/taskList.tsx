import React from "react";

interface Props {
  children: React.ReactNode;
}

export function TaskList({ children }: Props) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}

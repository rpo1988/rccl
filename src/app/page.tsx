"use client";

import TodoItem from "@/app/components/TodoItem";
import { Task } from "@/app/types";
import Link from "next/link";
import { useState } from "react";

export default function TodoPage() {
  const [list, setList] = useState<Task[]>([
    {
      id: "1",
      title: "Task 1",
      description: "Description of Task 1",
      checked: true,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description of Task 2",
      checked: false,
    },
  ]);

  const handleCheck = (id: string, value: boolean) => {
    setList((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, checked: value } : item
      )
    );
  };

  return (
    <main className="flex min-w-screen min-h-screen flex-col items-center p-6">
      <div className="flex flex-col max-w-[500px] mt-24 w-full">
        <div className="mb-4">
          <Link className="mb-4" href={`/add`}>
            Add task
          </Link>
        </div>
        {list.map((item, idx) => (
          <>
            {idx > 0 && <div className="min-h-[1px] bg-gray-200 w-full"></div>}
            <TodoItem key={item.id} {...item} onCheck={handleCheck} />
          </>
        ))}
      </div>
    </main>
  );
}

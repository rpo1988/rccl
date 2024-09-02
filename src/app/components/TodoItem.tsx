import { Task } from "@/app/types";

type TodoItemProps = Task & {
  onCheck: (id: string, value: boolean) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  description,
  checked,
  onCheck,
  onDelete,
}: TodoItemProps) {
  const handleDelete = () => {};

  return (
    <div
      className={`flex flex-row gap-2 items-center px-2 py-1 ${
        checked ? "bg-blue-50" : ""
      }`}
    >
      <input
        type="checkbox"
        name=""
        id={id}
        checked={checked}
        onChange={(e) => onCheck(id, e.target.checked)}
      />
      <div className="flex flex-col">
        <div className="text-md">{title}</div>
        <div className="text-sm">{description}</div>
      </div>

      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

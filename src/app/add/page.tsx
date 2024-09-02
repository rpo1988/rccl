"use client";

import { Task } from "@/app/types";
import { SubmitHandler, useForm } from "react-hook-form";

enum FormField {
  title = "title",
  description = "description",
}

interface FormValue {
  [FormField.title]: Task["title"];
  [FormField.description]: Task["description"];
}

export default function AddPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValue>();
  const onSubmit: SubmitHandler<FormValue> = (formValue) => {
    // TODO: validate
    if (!isValid) return;
  };

  return (
    <div className="flex min-w-screen min-h-screen flex-col items-center p-6">
      <h1>Add a task</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="min-h-9 w-full border border-solid border-gray-400"
          {...register(FormField.title, { required: true })}
        />
        {errors[FormField.title] && (
          <span className="text-red-400">This field is required</span>
        )}

        <input
          className="min-h-9 w-full border border-solid border-gray-400"
          {...register(FormField.description, { required: true })}
        />
        {errors[FormField.description] && (
          <span className="text-red-400">This field is required</span>
        )}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

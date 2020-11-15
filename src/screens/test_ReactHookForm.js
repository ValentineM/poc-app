import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea name="Question title" ref={register({required: true})} />
      <textarea name="Answer" ref={register({required: true})} />
      <select name="Category" ref={register({ required: true })}>
        <option value="Histoire">Histoire</option>
        <option value="Géographie">Géographie</option>
        <option value="Sciences">Sciences</option>
        <option value="Langage">Langage</option>
      </select>
      <input type="text" placeholder="Sub-category" name="Sub-category" ref={register({pattern: /^\S+@\S+$/i})} />

      <input type="submit" />
    </form>
  );
}
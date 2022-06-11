import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import style from './userFormStyle';

export const CreateUserForm = ({ onClose, callback, formData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      ...formData?.data
    }
  });

  const onSubmit = data => {
    const submitData = { data, type: formData?.type === 'edit' ? 'update' : 'new' }
    callback(submitData);
  }

  useEffect(() => {
    reset(formData?.data);
  }, [formData?.data]);

  return (
    <style.CreateUserForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          {...register("name", {
            required: true,
            maxLength: 20
          })}
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        <label>Laste Name</label>
        <input {...register("lastName", { required: true })} />
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        {formData?.type !== 'edit' &&
          <React.Fragment>
            <label>Password</label>
            <input
              {...register("password", {
                required: true,
                maxLength: 20,
              })}
            />
          </React.Fragment>}
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        <label>Phone</label>
        <input
          {...register("phone", {
            required: true,
          })}
        />
        {errors?.phone?.type === "required" && <p>This field is required</p>}
        <label>Email</label>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        {errors?.Email?.type === "pattern" || errors?.Email?.type === "required" && <p>Valid email is required</p>}
        <input type="submit" />
      </form>

    </style.CreateUserForm>
  )
}
import Swal from "sweetalert2";
import Container from "../../../components/shared/Container/Container";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();

  const emailValue = watch("email");

  useEffect(() => {
    if (emailValue) {
      trigger("email");
    }
  }, [emailValue, trigger]);

  const onFormSubmit = (data) => {
    console.log(data);

    Swal.fire({
      icon: "success",
      title: "Doctor Added Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const registerOptions = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address",
      },
    },
  };

  return (
    <div>
      <Container>
        <div className="3xl:mx-[140px]">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* name */}
            <div className="mb-5">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border p-4 rounded-lg mr-4"
                {...register("name", registerOptions.name)}
              />
              <p className="ml-0 text-red-500">
                {errors?.name && errors.name.message}
              </p>
            </div>
            {/* email */}
            <div className="mb-5">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="border p-4 rounded-lg mr-4"
                {...register("email", registerOptions.email)}
              />
              <p className="ml-0 text-red-500">
                {errors?.email && errors.email.message}
              </p>
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddDoctor;

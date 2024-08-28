import Container from "../../../components/shared/Container/Container";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => console.log(data);

  return (
    <div>
      <Container>
        <div className="3xl:mx-[140px]">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="space-x-4 mb-5">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                className="border p-4 rounded-lg mr-4"
                {...register("name", { required: true })}
              />
            </div>
            <div className="space-x-4 mb-5">
              <label htmlFor="email">Email</label>
              <input
                className="border p-4 rounded-lg mr-4"
                {...register("email", { required: true })}
              />
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

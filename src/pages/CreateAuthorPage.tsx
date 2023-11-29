import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAllAuthors, saveAuthor } from "../services/authors";
import { useNavigate } from "react-router-dom";
import { IAuthor } from "../models/models";

export const CreateAuthorPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{ firstName: string }>({
    mode: "all",
  });
  const [fetchSaveAuthor, { loading }] = useMutation<
    IAuthor,
    { author: { firstName: string } }
  >(saveAuthor, {
    onCompleted: () => {
      navigate("/all-authors");
    },
    refetchQueries: [getAllAuthors],
  });

  const onSubmit: SubmitHandler<{ firstName: string }> = (data) => {
    fetchSaveAuthor({ variables: { author: data } });
  };

  return (
    <div>
      <div>CreateAuthorPage</div>
      {loading && <div>Saving...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label>First name</label>
            <input {...register("firstName")} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

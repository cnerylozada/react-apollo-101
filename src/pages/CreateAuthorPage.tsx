import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAllAuthors, saveAuthor } from "../services/authors";
import { useNavigate } from "react-router-dom";

export const CreateAuthorPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({ mode: "all" });
  const [fetchSaveAuthor, { loading }] = useMutation(saveAuthor, {
    onCompleted: () => {
      navigate('/all-authors')
    },
    refetchQueries: [
      getAllAuthors
    ],
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
          <input {...register("firstName")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

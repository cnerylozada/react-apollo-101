import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { saveBookInAuthor } from "../services/books";
import { IBook } from "../models/models";
import { getAllAuthors } from "../services/authors";

export const CreateBookPage = () => {
  const { authorId } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({ mode: "all" });
  const [fetchSaveInAuthor, { loading }] = useMutation<
    IBook,
    { book: { title: string }; authorId: number }
  >(saveBookInAuthor, {
    onCompleted: () => {
      navigate("/all-authors");
    },
    refetchQueries: [getAllAuthors],
  });

  const onSubmit: SubmitHandler<{ title: string }> = (data) => {
    fetchSaveInAuthor({
      variables: {
        book: data,
        authorId: +`${authorId}`,
      },
    });
  };

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Create book</div>
      {loading && <div>Saving ...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input {...register("title")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

import Header from "../../atoms/Header/Header";
import "./BookForm.scss";

const BookForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveForm();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="book-form bg-white mt-20 shadow-sm p-25"
    >
      <Header title={"الاسم التجارى"} color={"#212529"}></Header>

      <button className="btn btn-info btn-lg me-auto d-block" type="submit">
        التالى
      </button>
    </form>
  );
};

export default BookForm;

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../atoms/Header/Header";
import Stepper from "../../atoms/Stepper/Stepper";
import BookForm from "../../molecules/BookForm/BookForm";
import Navbar from "../../molecules/Navbar/Navbar";
import "./BookCommercialRecord.scss";

const BookCommercialRecord = () => {
  const [nextStep, setNextStep] = useState("1");
  const saveFormHandler = () => {
    setNextStep("2");
  };

  return (
    <div className="commercial">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Navbar></Navbar>
            <div className="book-name bg-light p-25">
              <div className="container">
                <section className="book-name__stepper-wrapper bg-white shadow-sm p-25">
                  <Header
                    title={"طلب حجز اسم تجارى"}
                    color={"#212529"}
                  ></Header>
                  <Stepper isNext={nextStep}></Stepper>
                </section>
                {nextStep === "1" && (
                  <BookForm onSaveForm={saveFormHandler}></BookForm>
                )}
                {nextStep === "2" && (
                  <div className="text-center mt-50">
                    <p className="fs-3 fw-bold mb-25"> ارسال الطلب </p>
                    <Link to="/">
                      <button className="btn btn-primary ms-10">
                        عوده للسجلات التجارية
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCommercialRecord;

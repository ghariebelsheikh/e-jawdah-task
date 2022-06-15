import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/atoms/Wrapper/Wrapper";
import Sidebar from "./components/molecules/Sidebar/Sidebar";
import BookCommercialRecord from "./components/pages/BookCommercialRecord/BookCommercialRecord";
import CommercialRecords from "./components/pages/CommercialRecords/CommercialRecords";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container-fluid">
                <div className="row">
                  <div className="col-3">
                    <Sidebar></Sidebar>
                  </div>
                  <div className="col-9">
                    <main className="mt-50">
                      <CommercialRecords></CommercialRecords>
                    </main>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="BookCommercialRecord"
            element={<BookCommercialRecord />}
          />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;

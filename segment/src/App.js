import { useState } from "react";
import "./App.css";
import PageHeader from "./Components/PageHeader/PageHeader";
import SegmentCreation from "./Components/SegmentCreation/SegmentCreation";
import SegmentPopup from "./Components/SegmentPopup/SegmentPopup";

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  function handleCloseModal() {
    setOpenPopup(false);
  }
  return (
    <div className="App">
      {openPopup && (
        <SegmentPopup
          onClose={handleCloseModal}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
      )}
      <PageHeader text="View Audience" />
      <SegmentCreation setOpenPopup={setOpenPopup} />
    </div>
  );
}

export default App;

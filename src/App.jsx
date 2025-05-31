import { PersonalDetails } from "./components/PersonalDetails.jsx";
import { EducationDetails } from "./components/EducationDetails.jsx";
import { WorkDetails } from "./components/WorkDetails.jsx";

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <PersonalDetails />
      <EducationDetails />
      <WorkDetails />
    </>
  );
}

export default App;

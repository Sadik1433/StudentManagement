import { createContext} from "react";
import students_data from "../Component/Assets/students_data.js";

export const StudentContext = createContext(null);

const StudentContextProvider = (props) => {
  const contextData = { students_data };
  return (
    <StudentContext.Provider value={contextData}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;

import { useContext } from "react"
import { StudentContext } from "../../Context/StudentContext"

const MarksDisplay = () => {
    const {marksData} = useContext(StudentContext);
    console.log(marksData)
  return (
    <div>
    <h1>kjsfkds</h1>
    </div>
  )
}

export default MarksDisplay
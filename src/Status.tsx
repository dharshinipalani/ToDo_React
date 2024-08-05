import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
interface Props{
  status: boolean;
}
function Status({ status } : Props) {
  
  return status === false ? (
    <FaRegCircle color="#b07eec" />
  ) : (
    <FaCheckCircle color="#b07eec" />
  );
}

export default Status;

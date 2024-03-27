import { getUser } from "../../../api/api";
import ButtonBase from "../../../components/Buttons/ButtonBase";


export default function Home() {

  const handleGetUser = async () => {
    getUser()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <ButtonBase onClick={handleGetUser}>
        Get User
      </ButtonBase>
    </div>
  )
}

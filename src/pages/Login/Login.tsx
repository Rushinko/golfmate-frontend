import * as React from "react";
import { getGolfCourseImage } from "../../api/api";
import { type Image } from "../../models/types";
import LoginCard from "../../components/Card/LoginCard";
import image from '../../assets/golfcourse.jpeg'

function Login() {
  const [backgroundImg, setBackgroundImg] = React.useState<Image | null>(null);

  React.useEffect(() => {
    getGolfCourseImage()
      .then(async (response) => {
        const imgRes: Image = await response.json();
        console.log(imgRes);
        setBackgroundImg(imgRes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    image && (
      <div
        className="h-full w-full flex justify-center items-center backdrop-blur-sm bg-green-700/10"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundBlendMode: 'overlay', backgroundPositionY: "bottom" }}
      >
        <LoginCard />
      </div>
    )
  );

}

export default Login;

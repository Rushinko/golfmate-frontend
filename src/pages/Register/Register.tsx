import * as React from "react";
import { getGolfCourseImage } from "../../api/api";
import { type Image } from "../../models/types";
import image from '../../assets/golfcourse.jpeg'
import RegisterCard from "../../components/Card/RegisterCard";

function Register() {
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
        className="h-full w-full flex justify-center items-center backdrop-blur-sm bg-black/50"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundBlendMode: 'overlay', backgroundPositionY: "bottom" }}
      >
        <RegisterCard />
      </div>
    )
  );

}

export default Register;

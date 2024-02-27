import * as React from "react";
import LoginButton from "../../components/Buttons/LoginButton";
import { getGolfCourseImage } from "../../api/api";
import { type Image } from "../../models/types";
import LandingCard from "../../components/LandingCard/LandingCard";
import LandingText from "../../components/LandingCard/LandingText";
import image from '../../assets/golfcourse.jpg'

function Landing() {
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
    backgroundImg && (
      <div
        className="h-full w-full justify-center items-center grid grid-cols-3 backdrop-blur-sm"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundBlendMode: 'overlay', backgroundPositionY: "bottom" }}
      >
        <LandingText imageUrl={''} className="col-span-2"/>
        <LandingCard />
      </div>
    )
  );
}

export default Landing;

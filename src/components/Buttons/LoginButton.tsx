import ButtonBase from "./ButtonBase";

type LoginButtonProps = {
  className?: string,
}


export default function LoginButton({ className }: LoginButtonProps) {
  return(
    <ButtonBase className={` ${className}`}>
      Login
    </ButtonBase>
  )
}
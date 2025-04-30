import { S } from "./FallingIcons.styles"

export const FallingIcons = () => {
  const icons = [
    "/icons/1.svg",
    "/icons/3.svg",
    "/icons/2.svg",
    "/icons/3.svg",
    "/icons/4.svg",
    "/icons/5.svg",
    "/icons/3.svg",
  ]

  const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <S.Icon
          key={i}
          src={icons[i % icons.length]}
          $left={getRandom(0, 100)}
          $delay={getRandom(0, 10)}
          $duration={getRandom(5, 10)}
        />
      ))}
    </>
  )
}

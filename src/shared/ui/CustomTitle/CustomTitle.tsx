import { FC } from "react";
import styled from "./Title.module.scss";

interface CustomTitleProps {
  title: string;
  underlineLastWord?: boolean;
}

export const CustomTitle: FC<CustomTitleProps> = ({
  title,
  underlineLastWord,
}) => {
  const words = title.split(" ");
  const lastWord = words.pop();
  const mainTitle = words.join(" ");

  return (
    <div className={styled.container}>
      <h1 className={styled.title}>
        {mainTitle}{" "}
        {underlineLastWord && lastWord ? (
          <span className={styled.underline}>{lastWord}</span>
        ) : (
          lastWord
        )}
      </h1>
    </div>
  );
};

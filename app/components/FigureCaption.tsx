import type { ReactNode } from "react";
import styles from "./FigureCaption.module.css";

type FigureCaptionProps = {
  children: ReactNode;
};

// One caption style for every figure in the blog, so posts stop drifting
// apart in colour and alignment.
export function FigureCaption({ children }: FigureCaptionProps) {
  return <figcaption className={styles.caption}>{children}</figcaption>;
}

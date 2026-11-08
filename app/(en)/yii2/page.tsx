import type { Metadata } from "next";
import { buildYii2Metadata, Yii2View } from "../../views/yii2/Yii2View";
import { yii2Content } from "./content";

export const metadata: Metadata = buildYii2Metadata("en", yii2Content);

export default function Yii2Page() {
  return <Yii2View locale="en" content={yii2Content} />;
}

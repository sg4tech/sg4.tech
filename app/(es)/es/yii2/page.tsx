import type { Metadata } from "next";
import { Yii2View } from "../../../views/yii2/Yii2View";
import { buildYii2Metadata } from "../../../views/yii2/yii2-seo";
import { yii2Content } from "./content";

export const metadata: Metadata = buildYii2Metadata("es", yii2Content);

export default function Yii2Page() {
  return <Yii2View locale="es" content={yii2Content} />;
}

// Раскадровка ролика — СЦЕНАРИЙ_v2.md. Длительности в секундах.
export type Motion = "in" | "out" | "left" | "right" | "none";

export type Shot = {
  id: string; // f01 → public/frames/f01.png, v01 → public/video/v01.mp4
  label: string;
  seconds: number;
  motion: Motion; // движение для картинки-заглушки (на видео — только лёгкое)
  focusX: number; // положение окна кадрирования 0..1 для 9:16
  focusEndX?: number; // конечное положение, если кадр следует за движением
  title?: string; // титр
  dissolveIn?: number; // секунды наплыва из предыдущего плана
  candleLabel?: "match" | "lit"; // наложить надпись на пустую этикетку свечи
};

export const SHOTS: Shot[] = [
  { id: "01", label: "Двор", seconds: 4.4, motion: "in", focusX: 0.59 },
  { id: "02", label: "Руки на подоконнике", seconds: 2.8, motion: "none", focusX: 0.51 },
  {
    id: "03",
    label: "Папа в дверях",
    seconds: 5.0,
    motion: "in",
    focusX: 0.49,
    title: "Папа всегда приносил домой самый спелый гранат",
  },
  { id: "03b", label: "Гранат в детские ладони", seconds: 3.7, motion: "none", focusX: 0.46, focusEndX: 0.51 },
  { id: "04", label: "СОК · гранат на ладони", seconds: 3.4, motion: "in", focusX: 0.55 },
  { id: "05", label: "СОК · разлом", seconds: 3.3, motion: "none", focusX: 0.5 },
  { id: "06", label: "СОК · девочка с половинкой", seconds: 3.0, motion: "in", focusX: 0.75 },
  {
    id: "07",
    label: "ТЕПЛО · чай",
    seconds: 5.1,
    motion: "right",
    focusX: 0.78,
    title: "И в доме становилось тепло",
    dissolveIn: 0.72,
  },
  { id: "08", label: "ТЕПЛО · гранат у груди", seconds: 3.6, motion: "in", focusX: 0.79 },
  { id: "09", label: "ТЕПЛО · пиджак на стуле", seconds: 3.8, motion: "none", focusX: 0.80, dissolveIn: 0.36 },
  { id: "10", label: "ДЫМ · мангал", seconds: 5, motion: "in", focusX: 0.5, dissolveIn: 0.84 },
  { id: "11", label: "ДЫМ · по стене", seconds: 3.7, motion: "left", focusX: 0.56, dissolveIn: 0.40 },
  { id: "12", label: "ДЫМ · вместе на ступенях", seconds: 5.7, motion: "none", focusX: 0.30 },
  { id: "13", label: "ПАМЯТЬ · пустой стул", seconds: 5, motion: "none", focusX: 0.80, dissolveIn: 0.76 },
  { id: "15", label: "СЕГОДНЯ · спичка и свеча", seconds: 6.3, motion: "none", focusX: 0.485, focusEndX: 0.42, candleLabel: "match" },
];

export const END_CARD_SECONDS = 6;
export const FINAL_DISSOLVE = 0.92;

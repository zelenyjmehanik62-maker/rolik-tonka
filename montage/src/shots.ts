// Раскадровка ролика — СЦЕНАРИЙ_v2.md. Длительности в секундах.
export type Motion = "in" | "out" | "left" | "right" | "none";

export type Shot = {
  id: string; // f01 → public/frames/f01.png, v01 → public/video/v01.mp4
  label: string;
  seconds: number;
  motion: Motion; // движение для картинки-заглушки (на видео — только лёгкое)
  focusX: number; // центр интереса по горизонтали 0..1 — для версии 9:16
  title?: string; // титр
  stageBreak?: boolean; // длинный переход перед кадром (смена этапа)
  candleLabel?: boolean; // наложить надпись на пустую этикетку свечи
};

export const SHOTS: Shot[] = [
  { id: "01", label: "Двор", seconds: 5, motion: "in", focusX: 0.5 },
  { id: "02", label: "Руки на подоконнике", seconds: 4, motion: "none", focusX: 0.5 },
  {
    id: "03",
    label: "Папа в дверях",
    seconds: 5.5,
    motion: "in",
    focusX: 0.4,
    title: "Папа всегда приносил домой самый спелый гранат",
  },
  { id: "03b", label: "Гранат в детские ладони", seconds: 4, motion: "none", focusX: 0.5 },
  { id: "04", label: "СОК · гранат на ладони", seconds: 4.5, motion: "in", focusX: 0.55, stageBreak: true },
  { id: "05", label: "СОК · разлом", seconds: 4, motion: "none", focusX: 0.5 },
  { id: "06", label: "СОК · девочка с половинкой", seconds: 4, motion: "in", focusX: 0.5 },
  {
    id: "07",
    label: "ТЕПЛО · чай",
    seconds: 5.5,
    motion: "right",
    focusX: 0.6,
    title: "И в доме становилось тепло",
    stageBreak: true,
  },
  { id: "08", label: "ТЕПЛО · гранат у груди", seconds: 4, motion: "in", focusX: 0.5 },
  { id: "09", label: "ТЕПЛО · пиджак на стуле", seconds: 4, motion: "none", focusX: 0.75 },
  { id: "10", label: "ДЫМ · мангал", seconds: 5, motion: "in", focusX: 0.5, stageBreak: true },
  { id: "11", label: "ДЫМ · по стене", seconds: 4, motion: "left", focusX: 0.5 },
  { id: "12", label: "ДЫМ · вместе на ступенях", seconds: 6, motion: "none", focusX: 0.5 },
  { id: "13", label: "ПАМЯТЬ · пустой стул", seconds: 5, motion: "none", focusX: 0.75, stageBreak: true },
  { id: "15", label: "СЕГОДНЯ · спичка", seconds: 5, motion: "none", focusX: 0.5, stageBreak: true },
  { id: "14", label: "СЕГОДНЯ · свеча", seconds: 6, motion: "none", focusX: 0.47, candleLabel: true },
];

export const END_CARD_SECONDS = 6;
export const FAST_FADE = 0.5; // сек
export const STAGE_FADE = 1.0; // сек

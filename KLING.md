# Kling — шпаргалка по видео (8 кадров)

Промпты сверены с готовыми картинками Влада (20.11). Этот файл заменяет таблицу из ИНСТРУКЦИИ, часть 3.

## Как это работает

- Режим — **Image to Video** (Изображение в видео), загружаешь **только первый кадр** (Start frame / First frame).
- **Последний кадр (End frame) не загружаем.** Режим «из точки А в точку Б» заставляет нейросеть «перетекать» одной картинкой в другую — получаются артефакты, дом превращается в кухню. Переходы между кадрами я делаю в монтаже (плавные растворения).
- Что должно выйти: **та же картинка ожила на 5 секунд** — дым поднимается, пар идёт, сок капает, свет чуть движется. Камера медленная или стоит. Ничего нового в кадре не появляется.

## Настройки — одинаковые для всех кадров

| Настройка | Значение |
|---|---|
| Режим | Image to Video |
| Модель | самая новая в списке (Kling 4.0 или что стоит по умолчанию) |
| Start frame | картинка из `кадры/` (см. ниже) |
| End frame | **пусто** |
| Длительность | **5 s** |
| Качество | пробы — 720p / Standard на бесплатных кредитах; финал — **1080p / Professional** |
| Звук (Audio / Sound) | **выключить** (дешевле; звуки делаем в ElevenLabs) |
| Creativity ↔ Relevance | ближе к **Relevance** (~0,7) — чтобы держался исходной картинки |
| Camera movement (кнопки камеры) | не трогать — движение задаём в промпте. Для кадра 14 — **Static / Fixed**, если есть |

**Negative prompt** — один для всех (если поле есть):
```
face, visible face, turning head, text, letters, logo, morphing, melting, deformed hands, extra fingers, new objects appearing, camera shake, fast motion, flicker
```

Перед запуском смотри цену в кредитах на кнопке. Готовое видео скачивай как `видео/кадр01.mp4` и т. д. После каждого кадра — скрин экрана Kling (промпт + результат) в `скрины/` (`kling-кадр01.png`), неудачные тоже.

## Проверка результата

- ничего не «плывёт» и не превращается в другой предмет;
- лица не появилось, человек не повернулся к камере;
- пальцев 5, руки не тают;
- не появилось букв (особенно на этикетке свечи).

Плохо → ещё раз (до 3 попыток), или скажи мне — упрощу промпт.

---

## Кадры

### 01 — двор
Start frame: `кадры/кадр01.png`
```
Very slow cinematic push-in into the quiet courtyard. The laundry on the line sways gently in a warm breeze, the leaves of the pomegranate tree move softly, thin smoke drifts up from the stove chimney, dust particles float in the golden sunlight, shadows of leaves flicker on the stone floor. Calm, peaceful, no people.
```

### 03 — папа в дверях
Start frame: `кадры/кадр03.png`. Самый рискованный кадр по лицу — при любом проблеске лица перегенерируй.
```
Static camera. The man stands in the doorway as a completely dark silhouette and slowly raises the pomegranate a little higher into the sunlight, as if bringing it home. His face stays in deep shadow, a solid dark silhouette with no visible features, he does not turn his head. Leaves of the tree sway behind him, warm rim light flickers on his hair and shoulders, laundry moves softly in the courtyard.
```

### 04 — СОК: гранат на ладони
Start frame: `кадры/кадр04.png`
```
Very slow push-in towards the pomegranate. The hand holds the fruit completely still. A drop of ruby juice slowly runs down the skin and falls from the palm, droplets on the skin glisten in the backlight, the glossy seeds in the split sparkle, soft smoke drifts in the blurred background. Slow motion, intimate.
```

### 05 — СОК: разлом
Start frame: `кадры/кадр05.png`
```
Slow motion. The two hands slowly pull the pomegranate halves further apart, ruby juice droplets fly and glow in the warm backlight, the long drop falls onto the copper tray and makes small ripples in the juice. The hands keep their shape, static camera.
```

### 07 — ТЕПЛО ДОМА: чай
Start frame: `кадры/кадр07.png`
```
Very slow sideways camera movement along the table. Steam rises slowly and curls above the tea glass, warm sunlight shifts gently across the wooden table, leaves move softly outside the window, a dried rose petal lies still. Quiet, warm, cozy.
```

### 10 — ДЫМ: мангал
Start frame: `кадры/кадр10.png`
```
Very slow push-in towards the copper brazier. The charcoal embers glow and pulse softly, bluish-grey smoke curls slowly upward and drifts across the courtyard, the last golden light slowly fades into dusk, leaves of the pomegranate tree move gently. Calm evening.
```

### 13 — ПАМЯТЬ: пустой стул
Start frame: `кадры/кадр13.png`
```
Static camera, complete stillness. The thin trace of smoke near the table slowly dissolves in the beam of light, dust particles float slowly, the shadows of leaves move very gently on the wall and the chair, the light dims slightly. The chair stays empty, nothing else moves.
```

### 14 — СВЕЧА
Start frame: `кадры/кадр14.png`. Камера **строго статична** — на этикетку я накладываю надпись TONKA PERFUMES, если банка сдвинется, надпись «поплывёт».
```
Completely static locked-off camera. Only the small candle flame flickers softly and a thin line of smoke rises slowly from the wick. The glass jar, the lid, the golden label and the pomegranate stay perfectly still and unchanged, the label stays blank. Warm light glows through the red glass, leaves move very gently in the blurred background.
```

---

Порядок: сначала кадр **14** и **03** на бесплатных кредитах (самые рискованные), потом остальные. Как будут первые 2–3 платных видео — напиши, сколько осталось кредитов.

## Финальная перегенерация планов с гранатом

Kling AI 4.0, Keyframes, 1080p, 5 секунд. Для финального монтажа выбраны обе обновлённые генерации.

### 03b · Передача граната
Стартовый кадр: `кадры/кадр03b.png`. Сохранили хват девочки и оставили движение только руке отца, чтобы пальцы сохраняли форму.

```text
Locked-off cinematic macro shot. The child already cradles the pomegranate from below with both cupped hands, exactly as in the reference. Both small hands keep the same still grip and silhouette throughout; the visible thumb rests on the front of the fruit and the other fingers remain naturally hidden behind it. Only the father moves: he gently releases his grip and withdraws his adult hand to the left in one slow, continuous motion. After release the fruit stays securely supported and still. Keep the same hands, sleeves, proportions, fruit size, composition and golden light from the reference. No finger movement on the child, no extra or merging fingers, no deformed joints, no hand intersections, no face and no zoom.
```

### 05 · Разлом граната
Стартовый кадр: `кадры/кадр05.png`. Задали чистое разделение половинок и отдельные капли сока вместо тянущихся нитей.

```text
Locked-off macro, same golden light and copper tray. Both hands gently pull the ripe pomegranate sideways. In the first half second, the brittle white pith breaks cleanly and the two halves become completely separate, with clear empty air visible between them. They then move a little farther apart and hold. Juice falls straight down as a few distinct round droplets and makes a tiny ripple on the copper. Keep fruit, seed texture and fingers stable. No strands, strings, webs, sticky trails or liquid bridges between the halves; no new objects or camera movement.
```

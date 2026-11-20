#!/bin/sh
# Копирует материалы проекта в public/ (там их видит Remotion). Запуск: sh sync-assets.sh
cd "$(dirname "$0")"
R=..
for f in "$R"/кадры/кадр*.png; do [ -e "$f" ] || continue; n=$(basename "$f" .png | sed 's/кадр/f/'); cp "$f" "public/frames/$n.png"; done
for f in "$R"/видео/кадр*.mp4; do [ -e "$f" ] || continue; n=$(basename "$f" .mp4 | sed 's/кадр/v/'); cp "$f" "public/video/$n.mp4"; done
for f in "$R"/звук/*.mp3; do [ -e "$f" ] || continue; cp "$f" public/audio/; done
cp "$R/материалы/logo white.svg" public/logo-white.svg
cp "$R/материалы/logo black.svg" public/logo-black.svg
ls public/frames public/video public/audio
# список доступных файлов для монтажа
{
  printf '{"frames":['; ls public/frames 2>/dev/null | sed 's/\.png//' | sed 's/.*/"&"/' | paste -sd, -; printf '],"videos":['
  ls public/video 2>/dev/null | sed 's/\.mp4//' | sed 's/.*/"&"/' | paste -sd, -; printf '],"audio":['
  ls public/audio 2>/dev/null | sed 's/.*/"&"/' | paste -sd, -; printf ']}\n'
} > src/available.json
cat src/available.json
# коричневый логотип для этикетки свечи
sed 's/fill="black"/fill="#5b3a1c"/g' public/logo-black.svg > public/logo-brown.svg

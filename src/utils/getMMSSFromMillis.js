export default function getMMSSFromMillis(millis) {
  const totalSeconds = millis / 1000;
  const seconds = String(Math.floor(totalSeconds % 60));
  const minutes = String(Math.floor(totalSeconds / 60));

  return minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
}

import { useState, useEffect } from 'react';

interface CountProps {
  number: string;
  duration: string;
}
export default function Count(props: CountProps) {
  const { number, duration } = props;
  const [count, setCount] = useState('0');

  useEffect(() => {
    let start = 0;

    const end = parseInt(number.substring(0, 3));

    if (start === end) return;

    let totalMilSecDur = duration;
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return (
    <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
      {count}
    </p>
  );
}

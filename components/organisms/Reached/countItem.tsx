import Count from '../../molecules/Count';

interface CountItemProps {
  numberCount: string;
  title: string;
}
export default function CountItem(props: CountItemProps) {
  const { numberCount, title } = props;
  return (
    <div className="me-lg-35 ms-lg-35">
      <Count number={numberCount} duration="5" />
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {title}
      </p>
    </div>
  );
}

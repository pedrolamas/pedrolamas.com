import React from 'react';

type TimeBlockProps = React.ComponentPropsWithoutRef<'time'>;

const TimeBlock: React.FunctionComponent<TimeBlockProps> = (props) => {
  const { dateTime } = props;
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  React.useEffect(() => {
    if (!dateTime) return;

    setDate(new Date(dateTime));
  }, [dateTime]);

  if (!dateTime || !date) {
    return <time {...props} />;
  }

  return (
    <a href={`https://www.timeanddate.com/worldclock/fixedtime.html?iso=${date.toISOString()}`} title={date.toLocaleString()}>
      <time {...props} />
    </a>
  );
};

TimeBlock.displayName = 'TimeBlock';

export default TimeBlock;

import React from 'react';

type TimeBlockProps = React.ComponentPropsWithoutRef<'time'>;

const TimeBlock: React.FunctionComponent<TimeBlockProps> = props => {
  const { dateTime } = props;

  if (!dateTime) {
    return <time {...props} />;
  }

  const date = new Date(dateTime);

  return (
    <a href={`https://www.timeanddate.com/worldclock/fixedtime.html?iso=${date.toISOString()}`} title={date.toLocaleString()}>
      <time {...props} />
    </a>
  );
};

TimeBlock.displayName = 'TimeBlock';

export default TimeBlock;

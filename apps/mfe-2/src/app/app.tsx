import React from 'react';
import { useSharedStore } from '@my-workspace/shared';

const Mf2Component: React.FC = () => {
  const { data } = useSharedStore();

  console.log(useSharedStore());

  return (
    <div>
      <div>Data in MF2: {data}</div>
    </div>
  );
};

export default Mf2Component;

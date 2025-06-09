import React from 'react';
import { myWorks } from 'assert';

export const Works = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">My Works</div>
        {/* {myWorks.map((work) => (
          <div key={work.title}>
            <div>{work.title}</div>
            <div>{work.description}</div>
            <div>{work.image}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

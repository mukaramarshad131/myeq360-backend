import { Fragment } from 'react/jsx-runtime';

import { MappedComponentProps } from '#/entity';

function MappedComponent<T>({ array, Component }: MappedComponentProps<T>) {
  // console.log(array);
  return (
    <>
      {array.map((item: any) => {
        return (
          <Fragment key={item.index}>
            <Component item={item} />
          </Fragment>
        );
      })}
    </>
  );
}

export default MappedComponent;

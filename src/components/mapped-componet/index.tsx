import { Fragment } from 'react/jsx-runtime';

import { MappedComponentProps } from '#/entity';

function MappedComponent<T>({ array, Component }: MappedComponentProps<T>) {
  return (
    <>
      {array.map((item: any, idx: number) => {
        return (
          <Fragment key={item.id || idx}>
            <Component item={item} />
          </Fragment>
        );
      })}
    </>
  );
}

export default MappedComponent;

import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {CarouselItem} from '../Carousel/types';
import {StyledItem} from './styles';
import {IPagination} from './types';

function Pagination({list, index}: IPagination) {
  const renderItem: ListRenderItem<CarouselItem> = useCallback(
    (item) => <StyledItem key={item.index} selected={index === item.index} />,
    [index],
  );

  return (
    <FlatList<CarouselItem>
      horizontal
      data={list}
      renderItem={renderItem}
      contentContainerStyle={{
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
      }}
    />
  );
}

export default Pagination;

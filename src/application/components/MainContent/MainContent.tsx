import * as S from './MainContent.styled';
import React, { FC, useEffect, useState } from 'react';
import { ServiceGroupInfo } from '@application/types/serviceGroups';
import { getServiceGroup } from '@adapters/serviceGroups/serviceGroups';
import { ServiceGroup } from '@adapters/serviceGroups/types';
import { Header } from '@components/Header/Header';
import { ServiceGroupContent } from './ServiceGroupContent/ServiceGroupContent';

type Props = {
  serviceGroup?: ServiceGroupInfo;
};

export const MainContent: FC<Props> = ({ serviceGroup }) => {
  const [serviceGroupData, setServiceGroupData] = useState<ServiceGroup | undefined>();
  useEffect(() => {
    if (serviceGroup) {
      void (async () => {
        try {
          const result = await getServiceGroup(serviceGroup.id); // TODO: loading indication
          setServiceGroupData(result);
        } catch (err) {
          console.error((err as Error).message);
        }
      })();
    }
  }, [serviceGroup]);

  return (
    <S.Content>
      <Header title={serviceGroupData?.title ?? ''} />
      {serviceGroupData?.content && serviceGroupData?.widgets
        ? <ServiceGroupContent content={serviceGroupData.content} widgets={serviceGroupData.widgets} />
        : <p>no content</p> // TODO: replace with placeholder
      }
    </S.Content>
  );
};

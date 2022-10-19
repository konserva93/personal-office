import * as S from './MainContent.styled';
import React, { FC, useEffect, useState } from 'react';
import { ServiceGroupInfo } from '../../types/serviceGroups';
import { getServiceGroup } from '../../../adapters/serviceGroups/serviceGroups';
import { ServiceGroup } from '../../../adapters/serviceGroups/types';
import { Header } from '../Header/Header';
import { Layout } from '../Layout/Layout';

type Props = {
  serviceGroup?: ServiceGroupInfo;
};

export const MainContent: FC<Props> = ({ serviceGroup }) => {
  const [serviceGroupData, setServiceGroupData] = useState<
    ServiceGroup | undefined
  >();
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
      {serviceGroupData?.content ? (
        <Layout content={serviceGroupData.content} />
      ) : (
        <p>no content</p> // TODO: replace with placeholder
      )}
    </S.Content>
  );
};

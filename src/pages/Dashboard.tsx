import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.dashboard')}</PageTitle>
      {/* <Error img={error404} msg={t('error404.notFound')} /> */}
      <div>HEHE</div>
    </>
  );
};

export default Dashboard;

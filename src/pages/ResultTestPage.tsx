import React from 'react';
import { useTranslation } from 'react-i18next';
import { PoweroffOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { SearchInput } from '@app/components/common/inputs/SearchInput/SearchInput';
import { InputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';
import { ClipboardInput } from '@app/components/common/inputs/ClipboardInput/ClipboardInput';
import { OpenURLInput } from '@app/components/common/inputs/OpenURLInput/OpenURLInput';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseTooltip } from '@app/components/common/BaseTooltip/BaseTooltip';
import { BaseCascader } from '@app/components/common/BaseCascader/BaseCascader';
import { TablesUser } from '@app/components/tables/Tables/TablesUser';

const ResultTestPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.createTest')}</PageTitle>
      <BaseCol>
        <S.Card title={t('inputs.infoTest')}>
          <S.InputsWrapper>
            <S.FormItem
            name="topic"
            label={t('common.topic')}
            rules={[{ required: true, message: t('common.requiredField') }]}
            >
            </S.FormItem>
            <BaseInput placeholder={t('inputs.basic')} />

          </S.InputsWrapper>
          <S.InputsWrapper>
            <S.FormItem
            name="datetest"
            label={t('common.dateTest')}
            rules={[{ required: true, message: t('common.requiredField') }]}
            >
            </S.FormItem>
            <BaseInput placeholder={t('inputs.basic')} />

        
          </S.InputsWrapper>
        </S.Card>

        
      </BaseCol>
      <TablesUser />
    </>
  );
};

export default ResultTestPage;

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

const CreateTestPage: React.FC = () => {
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

            <S.FormItem
            name="team"
            label={t('common.team')}
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

            <S.FormItem
            name="timetest"
            label={t('common.timeTest')}
            rules={[{ required: true, message: t('common.requiredField') }]}
            >
            </S.FormItem>
            <BaseInput placeholder={t('inputs.basic')} />
          </S.InputsWrapper>
        </S.Card>


        <S.Card title={t('inputs.nameTest')}>
          <BaseInput placeholder={t('inputs.basic')} />
        </S.Card>

        <S.Card_1>
          <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 20}}>
            <div style={{alignContent: 'center', fontWeight: 'bold', fontSize: 18 }}>{t('common.numberTest')}</div>
            {/* <BaseButton type="text">{t('buttons.delete')}</BaseButton> */}
          </div>
          <S.FormItem
              name="questionnumber"
              label={t('common.questionNumber')}
              rules={[{ required: true, message: t('common.requiredField') }]}
              >
              <BaseInput.TextArea rows={4} />
          </S.FormItem>

          <S.FormItem
              name="answer"
              label={t('common.answer')}
              rules={[{ required: true, message: t('common.requiredField') }]}
              >
          </S.FormItem>
          <BaseInput addonBefore="A" placeholder={t('inputs.basic')} />
          <BaseInput addonBefore="B" placeholder={t('inputs.basic')} />
          <BaseInput addonBefore="C" placeholder={t('inputs.basic')} />
          <BaseInput addonBefore="D" placeholder={t('inputs.basic')} />
          
        </S.Card_1>

        <S.Card_1>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{alignContent: 'center', fontWeight: 'bold', fontSize: 18 }}>Câu hỏi số 2</div>
            <BaseButton type="text">{t('buttons.delete')}</BaseButton>
          </div>
          <S.FormItem
              name="questionnumber"
              label={t('common.questionNumber')}
              rules={[{ required: true, message: t('common.requiredField') }]}
              >
              <BaseInput.TextArea rows={4} />
          </S.FormItem>

          <S.FormItem
              name="answer"
              label={t('common.answer')}
              rules={[{ required: true, message: t('common.requiredField') }]}
              >
          </S.FormItem>
          <BaseInput addonBefore="A" placeholder={t('inputs.basic')} />
          <BaseInput addonBefore="B" placeholder={t('inputs.basic')} />
          <BaseInput addonBefore="C" placeholder={t('inputs.basic')} />
          <BaseInput addonBefore="D" placeholder={t('inputs.basic')} />
          
        </S.Card_1>
        
        <BaseButton type="primary" icon={<PlusOutlined />}>
              {t('buttons.add')}
        </BaseButton>
        
      </BaseCol>
      
    </>
  );
};

export default CreateTestPage;

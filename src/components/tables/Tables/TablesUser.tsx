import React from 'react';
import { BasicTable } from '../BasicTable/BasicTable';
import { TreeTable } from '../TreeTable/TreeTable';
import { EditableTableUser } from '../editableTableUser/EditableTableUser';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const TablesUser: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('Thống kê kết quả')} padding="1.25rem 1.25rem 0">
          <EditableTableUser />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};
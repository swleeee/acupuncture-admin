import React from 'react';

import * as S from './Table.styled';

interface Props {
  className?: string;
  children: React.ReactNode;
}

interface TableProps<T> extends Props {
  captionContent: string;
  headers: T;
}

interface RowButtonProps {
  onClick: () => void;
}

const Table = <T extends object>({
  className,
  children,
  captionContent,
  headers,
}: TableProps<T>) => (
  <S.Table className={className}>
    <caption>{captionContent}</caption>
    <thead>
      <S.TableHeadRow>
        {Object.values(headers).map((header) => (
          <S.TableHeadCell key={header} scope="col">
            {header}
          </S.TableHeadCell>
        ))}
      </S.TableHeadRow>
    </thead>
    {children}
  </S.Table>
);

Table.Body = ({ children }: Props) => <tbody>{children}</tbody>;

Table.BodyRow = ({ className, children }: Props) => (
  <S.TableBodyRow className={className}>{children}</S.TableBodyRow>
);

Table.Data = ({ className, children }: Props) => (
  <S.TableData className={className}>{children}</S.TableData>
);

Table.RowButton = ({ onClick }: RowButtonProps) => (
  <S.TableRowButton type="button" onClick={onClick} />
);

Table.Foot = ({ className, children }: Props) => (
  <S.TableFoot>
    <S.TableFootRow>{children}</S.TableFootRow>
  </S.TableFoot>
);

Table.TotalCount = () => (
  // TODO: 페이지네이션 컴포넌트 적용 후 수정 예정
  <S.TotalCountData>전체 100 중 1-10 보기</S.TotalCountData>
);

Table.Pagination = () => (
  <td>
    {/* TODO: 페이지네이션 컴포넌트 적용 예정 */}
    페이지네이션
  </td>
);

export default Table;

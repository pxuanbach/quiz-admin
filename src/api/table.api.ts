import { Priority } from '../constants/enums/priorities';

export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  key: number;
  name: string;
  date: string;
  quantity: string;
  tags?: Tag[];
}

export interface BasicTableUserRow {
  key: number;
  name: string;
  unit: string;
  date: string;
  result: string;
  tags?: Tag[];
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData extends BasicTableData {
  data: BasicTableRow[];
}

export interface EditableTableDataUser extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            unit: 'Đ4 - PV01',
            date: 32,
            quantity: 'New York No. 1 Lake Park',
            resulte: '',
            tags: [
              { value: 'Architect', priority: Priority.LOW },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 2,
            name: 'Jim Green',
            unit: 'Đ4 - PV01',
            date: 42,
            quantity: 'London No. 1 Lake Park',
            resulte: '',
            tags: [{ value: 'Doctor', priority: Priority.HIGH }],
          },
          {
            key: 3,
            name: 'Joe Black',
            unit: 'Đ4 - PV01',
            date: 32,
            resulte: '',
            quantity: 'Sidney No. 1 Lake Park',
            tags: [
              { value: 'Professor', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 4,
            name: 'Pavel Green',
            unit: 'Đ4 - PV01',
            date: 30,
            resulte: '',
            quantity: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 5,
            name: 'Alex Brown',
            unit: 'Đ4 - PV01',
            date: 26,
            resulte: '',
            quantity: 'Minsk',
            tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          },
          {
            key: 6,
            name: 'Josh Black',
            unit: 'Đ4 - PV01',
            date: 21,
            resulte: '',
            quantity: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 7,
            name: 'Cris Green',
            unit: 'Đ4 - PV01',
            date: 22,
            resulte: '',
            quantity: 'Sidney No. 1 Lake Park',
            tags: [{ value: 'Architect', priority: Priority.LOW }],
          },
          {
            key: 8,
            name: 'Jaime Black',
            unit: 'Đ4 - PV01',
            date: 23,
            resulte: '',
            quantity: 'New York No. 1 Lake Park',
            tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          },
          {
            key: 9,
            name: 'Alina Brown',
            unit: 'Đ4 - PV01',
            date: 19,
            quantity: 'Minsk',
            resulte: '',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 10,
            name: 'Cris Brown',
            unit: 'Đ4 - PV01',
            date: 25,
            quantity: 'London',
            resulte: '',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 11,
            name: 'Alina Fens',
            unit: 'Đ4 - PV01',
            date: 19,
            quantity: 'Minsk',
            resulte: '',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 12,
            name: 'Alex Snak',
            unit: 'Đ4 - PV01',
            date: 28,
            quantity: 'Brest',
            resulte: '',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 13,
            name: 'Pavel Dubrouski',
            unit: 'Đ4 - PV01',
            date: 26,
            quantity: 'Minsk',
            resulte: '',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 14,
            name: 'Jack Donald',
            unit: 'Đ4 - PV01',
            date: 24,
            quantity: 'New York',
            resulte: '',
            tags: [{ value: 'Professor', priority: Priority.LOW }],
          },
          {
            key: 15,
            name: 'Nik Nest',
            date: 34,
            quantity: 'London',
            resulte: '',
            tags: [
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 16,
            name: 'Zak Nikls',
            date: 32,
            quantity: 'Minsk',
            resulte: '',
            tags: [
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 17,
            name: 'Petr Dan',
            date: 29,
            quantity: 'Gomel',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 18,
            name: 'Alexa Pirs',
            date: 19,
            quantity: 'Moscow',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 19,
            name: 'Mark Brown',
            date: 25,
            quantity: 'London',
            tags: [
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 20,
            name: 'Alex Brons',
            date: 45,
            quantity: 'Bronx',
            tags: [{ value: 'Professor', priority: Priority.LOW }],
          },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};

export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [
              {
                key: 11,
                name: 'John Brown',
                age: 42,
                address: 'New York No. 2 Lake Park',
              },
              {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                address: 'New York No. 3 Lake Park',
                children: [
                  {
                    key: 121,
                    name: 'Jimmy Brown',
                    age: 16,
                    address: 'New York No. 3 Lake Park',
                  },
                ],
              },
              {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
                address: 'London No. 1 Lake Park',
                children: [
                  {
                    key: 131,
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 2 Lake Park',
                    children: [
                      {
                        key: 1311,
                        name: 'Jim Green jr.',
                        age: 25,
                        address: 'London No. 3 Lake Park',
                      },
                      {
                        key: 1312,
                        name: 'Jimmy Green sr.',
                        age: 18,
                        address: 'London No. 4 Lake Park',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 200,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            children: [
              {
                key: 201,
                name: 'Joe Green',
                age: 42,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 202,
                    name: 'Joe Green jr.',
                    age: 25,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 203,
                    name: 'Joe Green sr.',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 300,
            name: 'Jaime Black',
            age: 22,
            address: 'Sidney No. 1 Lake Park',
            children: [
              {
                key: 301,
                name: 'Jaime Green',
                age: 52,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 302,
                    name: 'Jaime Green jr.',
                    age: 21,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 303,
                    name: 'Jaime Green sr.',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 400,
            name: 'Pavel Brown',
            age: 26,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 401,
                name: 'Pavel Brown',
                age: 22,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 402,
                    name: 'Pavel Brown jr.',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 403,
                    name: 'Pavel Brown sr.',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 500,
            name: 'Alex Nickls',
            age: 45,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 501,
                name: 'Marta Nickls',
                age: 25,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 502,
                    name: 'Pavel Nickls jr.',
                    age: 12,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 503,
                    name: 'Alina Nickls sr.',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 600,
            name: 'Nick Donald',
            age: 45,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 601,
                name: 'Alexsa Donald',
                age: 34,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 602,
                    name: 'Marta Donald jr.',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 603,
                    name: 'Alex Donald sr.',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 700,
            name: 'Jo Snider',
            age: 26,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 701,
                name: 'Jo Snider',
                age: 22,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 702,
                    name: 'Jaems Snider jr.',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 703,
                    name: 'Jin Snider sr.',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 800,
            name: 'Jon Brown',
            age: 26,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 801,
                name: 'Kitana Brown',
                age: 22,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 802,
                    name: 'Cris Brown jr.',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 803,
                    name: 'Jon Brown sr.',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
        ],
        pagination: { ...pagination, total: 8 },
      });
    }, 1000);
  });
};

export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: `Chuyên đề chuyển đối số 2024`,
            date: `01/12/2024`,
            quantity: `20`,
          },
          {
            key: 2,
            name: `Chủ đề ATTT bảo vệ tổ quốc`,
            date: `05/12/2024`,
            quantity: `20`,
          },
          {
            key: 3,
            name: `Chủ đề mới`,
            date: `12/12/2024`,
            quantity: `25`,
          },
          {
            key: 4,
            name: `Josh`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 5,
            name: `Jo`,
            date: `25/12/2024`,
            quantity: `10`,
          },
          {
            key: 6,
            name: `Jaimi`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 7,
            name: `Alexa`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 8,
            name: `Donald`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 9,
            name: `Pavel`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 10,
            name: `Nick`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 11,
            name: `Dasha`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 12,
            name: `Alex`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 13,
            name: `Vic`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 14,
            name: `Natalia`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 15,
            name: `Zack`,
            date: `24/12/2024`,
            quantity: `20`,
          },
          {
            key: 16,
            name: `Jack`,
            date: `24/12/2024`,
            quantity: `20`,
          },
        ],
        pagination: { ...pagination, total: 16 },
      });
    }, 1000);
  });
};

// Data table kết quả user

export const getEditableTableDataUser = (pagination: Pagination): Promise<EditableTableDataUser> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: `Nguyễn Tiến Đạt`,
            unit: 'Đ4 - PV01',
            date: `01/12/2024`,
            result: `20/20`,
          },
          {
            key: 2,
            name: `Trương Công Tới`,
            unit: 'Đ4 - PV01',
            date: `05/12/2024`,
            result: `20/20`,
          },
          {
            key: 3,
            name: `Nguyễn Mạnh Hưng`,
            unit: 'Đ4 - PV01',
            date: `12/12/2024`,
            result: `19/20`,
          },
          {
            key: 4,
            name: `Josh`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 5,
            name: `Jo`,
            unit: 'Đ4 - PV01',
            date: `25/12/2024`,
            result: `19/20`,
          },
          {
            key: 6,
            name: `Jaimi`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 7,
            name: `Alexa`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 8,
            name: `Donald`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 9,
            name: `Pavel`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 10,
            name: `Nick`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 11,
            name: `Dasha`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 12,
            name: `Alex`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 13,
            name: `Vic`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 14,
            name: `Natalia`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 15,
            name: `Zack`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
          {
            key: 16,
            name: `Jack`,
            unit: 'Đ4 - PV01',
            date: `24/12/2024`,
            result: `19/20`,
          },
        ],
        pagination: { ...pagination, total: 16 },
      });
    }, 1000);
  });
};
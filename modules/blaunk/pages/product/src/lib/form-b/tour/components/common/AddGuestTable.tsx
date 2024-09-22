import { memo, useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { MdDelete } from 'react-icons/md';
import { GuestData } from '../../utils/interfaces';

interface GuestDataTableProps {
  addRow?: GuestData;
  editable?: 'save' | 'cancel' | 'edit' | 'default';
  updateRow?: GuestData;
}

const customStyles = {
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      fontguest: 'bold',
      backgroundColor: 'palegoldenrod',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      borderBottom: '1px solid palegoldenrod',
    },
  },
  tableWrapper: {
    style: {
      border: '1px solid palegoldenrod',
    },
  },
};

let idCounter = 0;

const GuestDataTable: React.FC<GuestDataTableProps> = ({ addRow, editable, updateRow }) => {
  const [data, setData] = useState<GuestData[]>([]);

  useEffect(() => {
    if (addRow) {
      const newRow: GuestData = { ...addRow, id: idCounter++ };
      setData((prev) => {
        const rowExists = prev.some((row) => row.id === newRow.id);
        if (!rowExists) {
          return [...prev, newRow];
        }
        return prev;
      });
    }
  }, [addRow]);

  useEffect(() => {
    if (updateRow) {
      setData((prev) => {
        return prev.map((row) => (row.id === updateRow.id ? updateRow : row));
      });
    }
  }, [updateRow]);

  useEffect(() => {
    if (editable === 'cancel') {
      setData([]);
    }
  }, [editable]);

  const wrapGuestData = (row: GuestData) => (
    <span style={{ whiteSpace: 'pre-line', wordWrap: 'break-word' }}>{row.guest}</span>
  );
  const columns: TableColumn<GuestData>[] = [
    {
      name: 'Guest',
      selector: (row) => row.guest,
      cell: wrapGuestData,
      sortable: true,
      center: true,
    },
    {
      name: 'MRP',
      selector: (row) => row.mrp,
      sortable: true,
      center: true,
    },
    {
      name: 'Selling Price',
      selector: (row) => row.sp,
      sortable: true,
      center: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <MdDelete color="red" fontSize="small" onClick={() => !(editable === 'save') && handleDelete(row)} />
      ),
      center: true,
    },
  ];

  const handleDelete = (row: GuestData) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm('Are you sure you want to delete this row?');
    if (confirmDelete) {
      const newData = data.filter((item) => item.id !== row.id);
      setData(newData);
    }
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      dense
      fixedHeader
      fixedHeaderScrollHeight="200px"
      highlightOnHover
      pointerOnHover
      responsive
      striped
      subHeaderWrap
      customStyles={customStyles}
      persistTableHead
      className="custom-table-wrapper"
    />
  );
};

export default memo(GuestDataTable);

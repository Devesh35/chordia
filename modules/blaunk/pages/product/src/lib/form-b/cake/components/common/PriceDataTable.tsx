/* eslint-disable no-restricted-globals */
import DataTable, { TableColumn } from "react-data-table-component";
import { MdDelete } from "react-icons/md";
import { memo, useEffect, useState } from "react";
import { RowData } from "../../utils/interfaces";

interface PriceDataTableProps {
  addRow?: RowData;
  editable?: "save" | "cancel" | "edit" | "default";
  updateRow?: RowData;
}

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontWeight: "bold",
      backgroundColor: "palegoldenrod",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      borderBottom: "1px solid palegoldenrod",
    },
  },
  tableWrapper: {
    style: {
      border: "1px solid palegoldenrod",
    },
  },
};

let idCounter = 0;

const PriceDataTable: React.FC<PriceDataTableProps> = ({
  addRow,
  editable,
  updateRow,
}) => {
  const [data, setData] = useState<RowData[]>([]);

  useEffect(() => {
    if (addRow) {
      const newRow: RowData = { ...addRow, id: idCounter++ };
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
    if (editable === "cancel") {
      setData([]);
    }
  }, [editable]);

  const columns: TableColumn<RowData>[] = [
    {
      name: "Weight",
      selector: (row) => row.weight,
      sortable: true,
      center: true,
    },
    {
      name: "MRP",
      selector: (row) => row.mrp,
      sortable: true,
      center: true,
    },
    {
      name: "Selling Price",
      selector: (row) => row.sp,
      sortable: true,
      center: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <MdDelete
          color="red"
          fontSize="small"
          onClick={() => !(editable === "save") && handleDelete(row)}
        />
      ),
      center: true,
    },
  ];

  const handleDelete = (row: RowData) => {
    const confirmDelete = confirm("Are you sure you want to delete this row?");
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
    />
  );
};

export default memo(PriceDataTable);
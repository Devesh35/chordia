/* eslint-disable no-restricted-globals */
import DataTable, { TableColumn } from "react-data-table-component";
import { MdDelete } from "react-icons/md";
import { memo, useEffect, useState } from "react";
import { RowData } from "../../utils/interfaces";

interface PriceDataTableProps {
  addRow?: RowData;
  editable?: "save" | "cancel" | "edit" | "default";
  updateRow?: RowData;
  sampleValue?: string;
  unit?: string;
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
      fontQuantity: "bold",
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
  sampleValue,
  unit,
}) => {
  const [data, setData] = useState<RowData[]>([]);
  const getMaxRows = () => {
    return sampleValue === "free" ||
      sampleValue === "chargeable" ||
      sampleValue === "mrpLogistic" ||
      sampleValue === "costLogistic" ||
      sampleValue === "freeCourier" ||
      sampleValue === "onlyMrp"
      ? 5
      : 4;
  };

  const handleAddRow = (newRow: RowData) => {
    const maxRows = getMaxRows();

    if (data.length >= maxRows) {
      alert(`Cannot add more than ${maxRows} rows.`);
      return;
    }

    setData((prev) => {
      // const rowExists = prev.some((row) => row.id === newRow.id);
      // if (!rowExists) {
      return [...prev, { ...newRow, id: idCounter++ }];
      // }
      // return prev;
    });
  };

  useEffect(() => {
    if (addRow) {
      // const isRowExisting = data.some((row) => row.id === addRow.id);
      // if (!isRowExisting && data.length < getMaxRows()) {
      handleAddRow(addRow);
      // }
    }
  }, [addRow]);

  useEffect(() => {
    if (editable === "cancel") {
      setData([]);
    }
  }, [editable]);

  const handleDelete = (row: RowData) => {
    const confirmDelete = confirm("Are you sure you want to delete this row?");
    if (confirmDelete) {
      const newData = data.filter((item) => item.id !== row.id);
      setData(newData);
    }
  };

  const columns: TableColumn<RowData>[] = [
    {
      name: <div style={{ whiteSpace: "normal" }}>{`Quantity (${unit})`}</div>,
      selector: (row) => row.quantity,
      sortable: true,
      center: true,
    },
    {
      name: "Price( )",
      selector: (row) => row.price,
      sortable: true,
      center: true,
    },
    {
      name: "Price($)",
      selector: (row) => row.priceDollar,
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

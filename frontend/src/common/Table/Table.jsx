import React, { useState } from "react";
import 'boxicons'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './table-style.css';
import BootstrapTable from 'react-bootstrap-table-next';




export const Table = ({ data, columns }) => {

  const [selected, setSelected] = useState([])

  const handleOnSelect = (row, isSelect, rowIndex, e) => {
    if (isSelect) {
      setSelected([...selected, row.id])
    } else {
      const filterSelected = selected.filter(x => x !== row.id);
      setSelected(filterSelected);
    }
  }

  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.id);
    if (isSelect) {
      setSelected(ids);
    } else {
      setSelected([]);
    }
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: false,
    selected: selected,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
    selectionRenderer: (({ mode, ...rest }) => {
      return <input type={mode} {...rest} />
    })
  };

  const rowClasses = (row, rowIndex) => {
    let classes = null;
    classes = 'single-row';

    return classes;
  };

  return (
    <BootstrapTable
      keyField='id'
      data={data}
      columns={columns}
      wrapperClasses="table-responsive"
      bordered={false}
      headerWrapperClasses="thead-dark"
      rowClasses={rowClasses}
      hover
      selectRow={selectRow}
    />
  )
}
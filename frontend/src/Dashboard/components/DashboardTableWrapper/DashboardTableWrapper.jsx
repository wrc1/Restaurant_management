import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from "../../../common/Table/Table";
import { ActionsFormatter } from "../../components/ActionsFormatter/ActionsFormatter";

export const DashboardTableWrapper = ({ setMenuActions, service }) => {

  const [employees, setEmployees] = useState([]);

  const actionsFormatter = (cell, row) =>
    <ActionsFormatter
      id={row.id}
      service={service}
    />;


  const columns = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'name',
    text: 'Name'
  },
  {
    dataField: 'lastName',
    text: 'Last Name'
  },
  {
    dataField: 'email',
    text: 'Email'
  },
  {
    dataField: 'phone',
    text: 'Phone'
  },
  {
    dataField: 'number_restaurants',
    text: 'Restaurants'
  },
  {
    dataField: 'status',
    text: 'Status'
  },
  {
    dataField: 'actions',
    text: 'Actions',
    isDummyField: true,
    csvExport: false,
    attrs: { title: 'action column' },
    events: {
      onClick: (e, column, columnIndex, row, rowIndex) => {
        setMenuActions(prev => ({ ...prev, data: row }))
      },
    },
    formatter: actionsFormatter,
  },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:5000')
        const users = res.data.map(user => {
          return {
            id: user.userId,
            ...user
          }
        })
        setEmployees(users);

      } catch (e) {
        console.log(e.message);
        setEmployees([]);
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Table
        data={employees}
        columns={columns}
      // menuActions={() => { }}
      />
    </React.Fragment>
  )
}
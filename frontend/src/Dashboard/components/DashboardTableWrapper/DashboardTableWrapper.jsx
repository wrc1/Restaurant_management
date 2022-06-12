import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from "../../../common/Table/Table";
import { ActionsFormatter } from "../../components/ActionsFormatter/ActionsFormatter";

export const DashboardTableWrapper = ({ service, resetMenu, onRowOperation }) => {

  const [employees, setEmployees] = useState([]);
  const [isDeleteAction, setDeleteAction] = useState(false);
  const [menuAction, setMenuAction] = useState({ type: null, data: null });


  const onEdit = e => {
    setMenuAction(prev => ({ ...prev, type: 'edit' }))
  }

  const onDelete = e => {
    setMenuAction(prev => ({ ...prev, type: 'delete' }))
  }

  useEffect(() => {
    if (menuAction.type === 'delete' && menuAction.data) {
      axios.delete(`http://localhost:5000/delete/${menuAction.data.userId}`)
    } else if (menuAction.type === 'edit' && menuAction.data) {
      onRowOperation(menuAction)
    }
  }, [menuAction])

  useEffect(() => {
    service.setMenuEvent(onEdit, onDelete);
  }, [])


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
        setMenuAction(prev => ({ ...prev, data: row }))
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
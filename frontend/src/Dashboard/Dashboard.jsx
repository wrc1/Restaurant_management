import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Separator } from "../common/Seprator/Separator";
import { PieGraph } from "../common/PieGraph/PieGraph";
import { Dialog } from "../common/Dialog/Dialog";
import { StatusType } from "./components/StatusType/StatusType";
import { CreateUserForm } from '../common/Templates/CreateUserForm'
import { DashboardService } from '../services/DashboardService';
import style from './style'
import { Tabs } from "../common/Tabs/Tabs";
import { DashboardTableWrapper } from "./components/DashboardTableWrapper/DashboardTableWrapper";

export const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [rowOperation, setRowOperation] = useState({})

  const onRowOperation = data => {
    setRowOperation(data);
    setOpenDialog(true);
  }

  const onCreate = () => {
    setOpenDialog(true);
  }

  const onCloseDialog = () => {
    setOpenDialog(() => !openDialog);
    setRowOperation({ type: null, data: null });
  }

  const onSubmit = async formData => {
    const type = formData.type;
    const extendData = {
      number_restaurants: '1',
      status: '1',
      ...formData.data,
    }
    const res = await axios.post(`http://localhost:5000/${type}`, extendData)
    onCloseDialog();
  }

  const pieData1 = [
    { name: 'Filled', value: 30, color: '#00eca1' },
    { name: 'Remaining', value: 100 - 40, color: '#ff2975' },
  ];

  const pieData2 = [
    { name: 'Group A', value: 20, color: '#0088FE' },
    { name: 'Group B', value: 100 - 20, color: '#2d2d36' },
  ];

  useEffect(() => {
    new DashboardService();
  }, [])


  return (
    <style.Dashboard>
      <Dialog
        show={openDialog}
        handleClose={onCloseDialog}
        Component={CreateUserForm}
        callback={onSubmit}
        data={rowOperation}
        key={rowOperation.type}
      >
      </Dialog>
      <style.Header>
        <div className="title-section">
          Employee Managment
        </div>
        <div className="inforamtion-section">
          <div className="workers-info">
            <div className="total-title">
              Total Employees
            </div>
            <div className="numbers-section">
              5.3K
            </div>
            <div className="offline-workers">
              No working 470
            </div>
          </div>
          <div className="status-section">
            <PieGraph data={pieData1} />
            <div className="status-info">
              <div>Active 20</div>
              <div>Pending 30</div>
              <div>inactive 20</div>
            </div>
          </div>
          <div>
            <div className="total-title">
              Status Type
            </div>
            <StatusType />
          </div>
          <div className='health-section'>
            <div className="left-health-section">
              <div>Overview</div>
              <div className="numbers-section">20%</div>
            </div>
            <PieGraph data={pieData2} oneColor={true} />
          </div>
        </div>
      </style.Header>
      <style.Container>
        <style.TableToolbar>
          <div className="section left-section">
            <i className="icon-b bi bi-search"></i>
            <Separator />
            <Tabs tabs={DashboardService.tabs} />
          </div>
          <div className="section right-section">
            <button
              className="btn btn-primary create-user"
              role="button"
              onClick={onCreate}
            >
              <i class="bi bi-person-plus-fill" fill="#fffff"></i>
              Create user</button>
          </div>
        </style.TableToolbar>
        <DashboardTableWrapper
          service={DashboardService}
          resetMenu={openDialog}
          dialogAction={setOpenDialog}
          onRowOperation={onRowOperation}
        />
      </style.Container>
    </style.Dashboard>
  )
}
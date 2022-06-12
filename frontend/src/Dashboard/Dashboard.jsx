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
  let dashboardService = null;
  const [service, setService] = useState({})
  const [openDialog, setOpenDialog] = useState(false);
  const [isDeleteAction, setDeleteAction] = useState(false);
  const [menuAction, setMenuAction] = useState({ type: "null", data: {} });

  const onCreate = () => {
    setOpenDialog(true);
  }

  const onCloseDialog = () => {
    setOpenDialog(() => !setOpenDialog);
    setMenuAction({ type: "null", data: {} });
  }

  const onUpdate = data => {
    console.log(data);
  }

  const onSubmit = async formData => {
    const type = formData.type;
    const extendData = {
      number_restaurants: '1',
      status: '1',
      ...formData.data,
    }
    const res = await axios.post(`http://:5000/${type}`, extendData)
    onCloseDialog();
  }

  const onEdit = e => {
    setMenuAction(prev => ({ ...prev, type: 'edit' }))
  }

  const onDelete = e => {
    setMenuAction(prev => ({ ...prev, type: 'delete' }))
  }

  const onShowUser = e => {
    e.stopPropagation();
    console.log("show user");
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
    dashboardService = new DashboardService();
    dashboardService.setMenuEvent(onEdit, onDelete);
    setService(dashboardService)
  }, [])


  return (
    <style.Dashboard>
      <Dialog
        show={openDialog}
        handleClose={onCloseDialog}
        Component={CreateUserForm}
        callback={onSubmit}
        data={menuAction}
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
          menuActions={setMenuAction}
          service={service}
        />
      </style.Container>
    </style.Dashboard>
  )
}
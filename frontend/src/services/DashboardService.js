import React from 'react';
import Base from '../services/base';
export class DashboardService {
  constructor() {
    if (DashboardService._instance) {
      throw new Error("Singleton classes can't be instantiated more than once.")
    }
    DashboardService._instance = this;
    this.menuEvents = {};
  }
  
  static setMenuEvent (editViewEvent, deleteViewEvent){
    this.menuEvents = {
      edit: editViewEvent,
      delete: deleteViewEvent
    }
  }

  static getMenu() {
    return [{
      type: 'edit',
      event: this.menuEvents.edit,
      text: 'Edit',
      icon: 'edit-alt',
    }, {
      type: 'delete',
      event: this.menuEvents.delete,
      text: 'Delete',
      icon: 'minus-circle',
    }]
  }

  static tabs = [
    {
      index: 0,
      title: 'location 1'
    },
    {
      index: 1,
      title: 'location 2'
    },
    {
      index: 2,
      title: 'location 3'
    },

  ]
}
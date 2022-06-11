import React from 'react';
import style from './style'
import { ReactComponent as Alert } from '../../../static/svg/alert.svg'
import { ReactComponent as Anomaly } from '../../../static/svg/anomaly.svg'
import { ReactComponent as Metric } from '../../../static/svg/metric.svg'

export const StatusType = () => {
  return (
    <style.StatusType>
      <div className="status-type-section">
        <Alert />
        <span className="status-type-name">Alert</span>
      </div>
      <div className="status-type-section">
        <Anomaly />
        <span className="status-type-name">Anomaly</span>
      </div>
      <div className="status-type-section">
        <Metric />
        <span className="status-type-name">Pending</span>
      </div>
    </style.StatusType>
  )
}
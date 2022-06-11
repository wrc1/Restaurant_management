import React from "react";
import style from './style';

// we need to pass a service as prop
// service will contain object config, http actions config
export const ActionsFormatter = ({ service }) => {


  const renderMenu = () => {
    if (!service) return;
    const menuObjects = service.getMenu();
    return menuObjects.map(section => {
      return (
        <section key={section.type} className="action" onClick={section.event}>
          <box-icon name={section.icon}></box-icon>
        </section>
      )
    })
  }

  return (
    <style.ActionsFormatter>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg> */}
      {/* {service.getMenu()}
      <section className="action" onClick={onEdit}>
        <box-icon name='edit-alt'></box-icon>
      </section>
      <section className="action" onClick={onDelete}>
        <box-icon name='minus-circle'></box-icon>
      </section>
      <section className="action" onClick={onShowUser}>
        <box-icon name='spreadsheet'></box-icon>
      </section> */}
      {renderMenu()}
    </style.ActionsFormatter>
  )
}
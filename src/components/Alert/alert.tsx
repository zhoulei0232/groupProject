import React from 'react'
import classNames from 'classnames';

export enum AlertType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
}

interface BaseAlertProps {
  titleName?: string;
  className?: string;
  type?: AlertType;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const { titleName, type, className } = props
  const classes = classNames('alt', className, {
    [`alt-${type}`]: type,
  })

  const flag: boolean = true;
  const closeAlert = () => {

  }
  return (
    <div className="mask">
      {flag ? (<div
        className={classes}
      >
        <span>1111{titleName}</span>
        <span
          className="close"
          onClick={closeAlert}
        >关闭</span>
      </div>) : null}

    </div>

  )
}


export default Alert
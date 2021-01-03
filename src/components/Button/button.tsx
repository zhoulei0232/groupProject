import React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'md'| 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'


export interface BaseButtonProps {

  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  /**
  * 按钮内容
  */
  label: string;
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children,label, href, ...restProps } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link' && disabled)
  })
  if (btnType === 'link' && href) {
    return (
      <a
        {...restProps}
        className={classes}
        href={href}
      >{label}</a>
    )
  } else {
    return (
      <button
        {...restProps}
        className={classes}
        disabled={disabled}
      >
        {label}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button
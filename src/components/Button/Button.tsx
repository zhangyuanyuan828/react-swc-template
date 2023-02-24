import classNames from 'classnames'
import React from 'react'
import { CircularProgress } from '../Progress'
import './Button.css'

export interface ButtonProps extends React.ComponentProps<'button'> {
  size?: 'small' | 'normal' | 'large'

  colorScheme?: 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'slate' | 'teal' | 'sky' | 'pink' | 'gray'

  variant?: 'contained' | 'outlined' | 'text' | 'link'

  fullWidth?: boolean

  startIcon?: React.ReactNode

  endIcon?: React.ReactNode

  loading?: boolean

  loadingPosition?: 'start' | 'end'

  loadingIndicator?: React.ReactNode

  loadingSpinner?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  className,
  type = 'button',
  size = 'normal',
  colorScheme = 'blue',
  variant = 'contained',
  fullWidth,
  disabled,
  startIcon,
  endIcon,
  children,
  loading,
  loadingPosition = 'start',
  loadingIndicator,
  loadingSpinner = <CircularProgress />,
  ...props
}) => {
  const leftIcon = loading && loadingPosition === 'start' ? loadingSpinner : startIcon
  const rightIcon = loading && loadingPosition === 'end' ? loadingSpinner : endIcon
  return (
    <button
      className={classNames(
        'tw-button',
        {
          [`tw-button-${size}`]: size && size !== 'normal',
          [`tw-button-${colorScheme}`]: colorScheme,
          [`tw-button-${variant}`]: variant && variant !== 'contained',
          'tw-button-disabled': disabled,
          'tw-button-full-width': fullWidth,
          'tw-button-loading': loading
        },
        className
      )}
      type={type}
      disabled={disabled || loading}
      {...props}
    >
      {leftIcon ? <span className="tw-button-left-icon">{leftIcon}</span> : null}
      {loading && (loadingIndicator || loadingIndicator === 0) ? loadingIndicator : children}
      {rightIcon ? <span className="tw-button-right-icon">{rightIcon}</span> : null}
    </button>
  )
}

import classNames from 'classnames'
import './CircularProgress.css'

export interface CircularProgressProps extends React.ComponentProps<'span'> {
  size?: React.CSSProperties['width']
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ className, size = '1.125em', style, ...props }) => {
  return (
    <span className={classNames('tw-circular-progress', className)} role="progressbar" style={{ width: size, height: size, ...style }} {...props}>
      <svg viewBox="20 20 40 40">
        <circle className="tw-circular-progress-circle" cx={40} cy={40} r={18} fill="none" stroke-width="4"></circle>
      </svg>
    </span>
  )
}

import { forwardRef, LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...rest }, ref) => {
    return (
      <label ref={ref} {...rest} className="font-bold">
        {children}
      </label>
    )
  },
)

Label.displayName = 'Label'

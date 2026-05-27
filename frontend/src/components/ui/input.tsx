import * as React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn('w-full rounded-md border px-3 py-2 bg-white text-sm placeholder:text-muted-foreground', className)}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }

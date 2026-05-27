import type React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// Component Card tái sử dụng theo nguyên tắc fe.md
export function Card({ className, ...props }: CardProps) {
  return <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />
}

export default Card

import * as React from 'react';
export function Card({className='',...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={`rounded-2xl border border-[var(--border)] bg-[var(--panel)] ${className}`} {...props}/>}
export function CardHeader({className='',...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={`flex flex-col gap-1.5 p-5 ${className}`} {...props}/>}
export function CardContent({className='',...props}:React.HTMLAttributes<HTMLDivElement>){return <div className={`p-5 pt-0 ${className}`} {...props}/>}

import * as React from 'react';
export function Button({className='',...props}:React.ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`inline-flex items-center justify-center rounded-xl border border-[var(--border)] px-3 py-2 text-sm transition hover:bg-[var(--panel2)] disabled:opacity-50 ${className}`} {...props}/>}

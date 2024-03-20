import React from 'react'

type DividerProps = {
  direction: 'horizontal' | 'vertical',
};

export default function Divider({ direction }: DividerProps) {
  return (
      <div className={`flex flex-row border border-panelAccent my-2`}></div>
  )
}

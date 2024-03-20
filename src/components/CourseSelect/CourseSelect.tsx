import * as React from 'react';
import * as Select from '@radix-ui/react-select';

export default function CourseSelect() {
  return (
    <>
      <Select.Root>
        <Select.Trigger className='w-48 h-8 items-center justify-center rounded bg-panelAccent outline-none focus:shadow-black data-[placeholder]:text-zinc-500'>
          <Select.Value placeholder='Select a course...' />
        </Select.Trigger>
      </Select.Root>
    </>
  )
}

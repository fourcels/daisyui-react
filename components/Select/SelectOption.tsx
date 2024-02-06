import { forwardRef } from 'react'

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>

export const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>((
    props,
    ref
) => {
    return (
        <option ref={ref} {...props} />
    )
})

SelectOption.displayName = 'SelectOption'
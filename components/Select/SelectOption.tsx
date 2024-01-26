export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>

export const SelectOption = ({
    children,
    ...props
}: SelectOptionProps): JSX.Element => {
    return (
        <option {...props}>
            {children}
        </option>
    )
}
export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>

export const Option = ({
    children,
    ...props
}: OptionProps): JSX.Element => {
    return (
        <option {...props}>
            {children}
        </option>
    )
}
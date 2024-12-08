import classNames from "classnames";

export default function NavigationItem(props) {
    const {active, children, ...rest} = props;
    const className = classNames(
        "flex justify-between items-center px-4 py-2 overflow-hidden text-sm hover:text-primary hover:text-[#E51F40]",
        props.className,
        active && "border-b-2 border-solid border-[#E51F40] text-[#E51F40]",
    )

    return (
        <div  {...rest} className={className}>
            {props.children}
        </div>
    )
}
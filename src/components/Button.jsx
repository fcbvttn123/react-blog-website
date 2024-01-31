export function Button(props) {
    return (
        <button {...props} className="text-black bg-white px-4 py-1 grid place-content-center rounded-md">
            {props.children}
        </button>
    )
}
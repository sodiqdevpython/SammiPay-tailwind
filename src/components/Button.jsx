
function Button({ styles }) {
    return (
        <button
            type="button"
            className={`shadow-2xl px-6 py-3 font-montserrat font-semibold text-[18px] rounded-[10px] bg-blue-gradient ${styles}`}>
            Get started
        </button>
    )
}

export default Button;
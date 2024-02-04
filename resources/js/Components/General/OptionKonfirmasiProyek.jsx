export default function OptionKonfirmasiProyek(props) {
    return (
        <div className="bg-white rounded-xl p-8 w-1/3 mx-auto">
            <button
                id={props.id}
                type="button"
                value="Terima"
                checked={props.selectedValue == "Terima"}
                onClick={props.onChange}
                className={`w-full px-8 py-3 mb-2 rounded block ${
                    props.selectedValue == "Terima"
                        ? "bg-first text-white"
                        : "bg-[#D1D1D1] text-black"
                }`}
            >
                <span>Terima</span>
            </button>
            <button
                id={props.id}
                type="button"
                value="Tolak"
                checked={props.selectedValue == "Tolak"}
                onClick={props.onChange}
                className={`w-full px-8 py-3 rounded block ${
                    props.selectedValue == "Tolak"
                        ? "bg-first text-white"
                        : "bg-[#D1D1D1] text-black"
                }`}
            >
                <span>Tolak</span>
            </button>
        </div>
    );
}

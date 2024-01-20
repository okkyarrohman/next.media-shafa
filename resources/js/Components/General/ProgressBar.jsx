export default function ProgressBar(props) {
    return (
        <div className="relative">
            <div className="bg-abu w-full h-4 rounded-3xl border border-first"></div>
            <div
                className={`bg-first h-4 rounded-3xl absolute top-0 text-xs font-semibold text-center`}
                style={{ width: `${props.persentase}%` }}
            >
                {props.persentase}%
            </div>
        </div>
    );
}

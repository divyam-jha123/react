import "../src/App.css";

export const Button = ({
    disabled
}) => {
    return (
        <div>
            <button className={`px-22 py-5 text-center text-4xl rounded-2xl cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}>Verify Otp</button>
        </div>
    )
}
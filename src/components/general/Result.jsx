export default function Result({ result }) {
    return (
        <div className="result">
            <p>✅ Resultado</p>
            <input
                value={result}
                type="text"
                name="result"
                id="result"
                readOnly
            />

        </div>
    )
}

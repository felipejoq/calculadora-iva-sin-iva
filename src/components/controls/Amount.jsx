export default function Amount({onChangeAmount}) {

    return (
        <section className="form-group">
            <div className="form-control">
                <input
                    type='number'
                    placeholder='Ingrese un monto...'
                    onChange={onChangeAmount}
                    className="input-amount"
                    autoFocus
                />
            </div>
            <div className="form-control">
                <button className="button-total" type='submit'>
                    🟰 Calcular
                </button>
            </div>
        </section>
    )
}

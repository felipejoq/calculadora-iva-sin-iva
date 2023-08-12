export default function Options({ onClickOption }) {

    return (
        <section className="form-group" onChange={onClickOption}>
            <div className="form-control input-option">
                <input
                    type='radio'
                    defaultValue='WithIVA'
                    name='option'
                    id="WithIVA"
                    defaultChecked
                />
                <label htmlFor="WithIVA">Con Iva (+19%)</label>
            </div>

            <div className="form-control input-option">
                <input
                    type='radio'
                    defaultValue='WithoutIVA'
                    name='option'
                    id="WithoutIVA"
                />
                <label htmlFor="WithoutIVA">Sin Iva (-19%)</label>
            </div>
        </section>
    )
}

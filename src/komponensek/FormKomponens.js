import './form.css';

export default function FormComponens(props) {

    return (
        <div>
            <h3>Mit tettél ma a földért?</h3>
            <form className='formstilus' title="Mit tettél ma a földért?">

                <div>
                    <label for="cars">Válassz osztályt: </label>
                    <select id="cars" name="cars" >
                        <option value="volvo">SZF2</option>
                        <option value="saab">SZF1</option>
                        <option value="fiat">IRU1</option>
                        <option value="audi">IRU2</option>
                    </select>
                </div>

                <div>
                    <label for="cars">Válassz tevékenységet: </label>
                    <select id="cars" name="cars" >
                        <option value="volvo">SZF2</option>
                        <option value="saab">SZF1</option>
                        <option value="fiat">IRU1</option>
                        <option value="audi">IRU2</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
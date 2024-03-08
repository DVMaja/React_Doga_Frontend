import Sor from "./Sor";
import { ADATOK } from "./adatok.js";
import './form.css';

export default function Tablazat(props) {

    return (
        <table className='table table-striped table-bordered'>
            <tr><th>Osztály</th>
                <th>Tevékenység</th>
                <th>Pont</th>
                <th>Státusz</th>
            </tr>

            {ADATOK.map((elem, index) => (

                <tr>
                    {/* {console.log(elem)} */}
                    <Sor  osztaly={elem.osztaly}
                    />
                </tr>
            ))}
        </table>
    )
}
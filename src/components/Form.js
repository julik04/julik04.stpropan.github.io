import "../App.css";

export default function Form(){
    return(
        <div className="container">
            <div className="form">
            <div className="title">Форма</div>
            <div className="subtitle">Введите данные по процедуре</div>
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " />
                <div className="cut cut-short"></div>
                <label for="firstname" className="placeholder">Имя</label>
            </div>
            <div className="input-container ic2">
                <input id="lastname" className="input" type="text" placeholder=" " />
                <div className="cut"></div>
                <label for="lastname" className="placeholder">Телефон/ Email</label>
            </div>
            <div className="input-container ic2">
                <fieldset>
                    <legend>Choose your monster's features:</legend>

                    <div>
                        <input type="checkbox" id="scales" name="scales" checked />
                        <label for="scales">Scales</label>
                    </div>

                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Horns</label>
                    </div>
                </fieldset>
            </div>
                <div className="cut cut-short"></div>
            
            <div className="input-container ic2">
                <input id="email" className="input" type="text" placeholder=" " />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">Email</label>
            </div>
            <button type="text" className="submit">submit</button>
            </div>
        </div>
    )
}
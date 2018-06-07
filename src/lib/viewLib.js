/**
 * Created by Michael M. Simon on 6/8/2018.
 */


class Inputs {

    static getSelectedOption (optionElement) {
        for (let i = 0, length = optionElement.length; i < length; i++)
        {
            if (optionElement[i].checked)
            {
                return optionElement[i].value;
            }
        }
    }
}
export { Inputs as default}

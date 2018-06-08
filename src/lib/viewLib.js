/**
 * Created by Michael M. Simon on 6/8/2018.
 */
class View {
    static getSelectedOption (optionElement) {
        for (let i = 0, length = optionElement.length; i < length; i++)
        {
            if (optionElement[i].checked)
            {
                return optionElement[i].value;
            }
        }
    }

    static createTaskView(id,title,desc,priority,assignedTo,status, viewElement) {
        viewElement.innerHTML = '';
        viewElement.innerHTML +=
        '<div class="holder">'+
        '<h6>'+'Task Id:' + id + '</h6>'+
        '<h3>'+ title +'</h3>'+
        '<p>' + desc +'</p>'+
        '<p>' + priority +'</p>'+
        '<p>' + assignedTo +'</p>'+
        '<p>' + status +'</p>'+
        '</div>'
    }
}
export { View as default}

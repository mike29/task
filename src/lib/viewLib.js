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
        viewElement.innerHTML +=
        '<div class="demo-card-wide mdl-card mdl-shadow--2dp holder">'+
            '<div class="mdl-card__supporting-text itemMenuHeader">'+
                '<h6>'+'ID: ' + id + '</h6>'+
                '<span class="dataSpan" >'+
                    '<i class="material-icons dataIcon">low_priority</i>'+
                    '<p class="dataText">'+ priority +'</p>'+
                    '<i class="material-icons dataIcon">account_circle</i>'+
                    '<p class="dataText">'+ assignedTo +'</p>'+
                    '<i class="material-icons dataIcon">check_circle</i>'+
                    '<p class="dataText">' + status +'</p>'+
                '</span>'+
        '</div>'+
            '<div class="mdl-card__menu itemsMenu">'+
                '<button class="mdl-button mdl-js-button dataClose">'+
                    '<i class="material-icons">close</i>'+
                '</button>'+
            '</div>'+
            '<div class="mdl-card__actions itemsBody mdl-card--border">'+
                '<h4>'+ title +'</h4>'+
                '<p>' + desc +'</p>'+
            '</div>' +
            '</div>'
    }
}
export { View as default}

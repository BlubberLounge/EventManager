/**
 * @author Maximilian Mewes
 *
 *
 */
$(function() {

});

const TimetableStaus = {
    AVAILABLE: 'available',
    MAYBE: 'maybe',
    NOTIME: 'noTime',
};

// class TimetableRow
// {

// }

// class TimetableCell
// {

// }
/**
 *
 *
 */
class TimetableElementFactory
{
    TimetableCellStatus = null;

    constructor()
    {
        this.baseContainer = $('<div></div>');
        this.baseInput = $('<input type="radio" class="btn-check" autocomplete="off">');
        this.baseLabel = $('<label class="btn btn-timetable"></label>');
    }

    isChecked(s)
    {
        return this.TimetableCellStatus === s;
    }

    getButtonClass(s)
    {
        if(TimetableStaus.AVAILABLE == s) {
            return 'btn-bl-success';
        }else if(TimetableStaus.MAYBE == s) {
            return 'btn-bl-warning';
        }else if(TimetableStaus.NOTIME == s) {
            return 'btn-bl-danger';
        } else {
            return 'btn-dark';
        }
    }

    getIcon(s)
    {
        if(TimetableStaus.AVAILABLE == s) {
            return '<i class="fa-solid fa-check"></i>';
        }else if(TimetableStaus.MAYBE == s) {
            return '<i class="fa-solid fa-question"></i>';
        }else if(TimetableStaus.NOTIME == s) {
            return '<i class="fa-solid fa-xmark"></i>';
        } else {
            return '<i class="fa-solid fa-bug"></i>';
        }
    }

    createInput(s)
    {
        let newInput = this.baseInput.clone();
        newInput.attr('name', 'btn-timetable-status');
        newInput.attr('id', 'btn-'+s);
        newInput.attr('checked', this.isChecked(s));

        return newInput;
    }

    createLabel(s)
    {
        let newLabel = this.baseLabel.clone();
        newLabel.addClass(this.getButtonClass(s));
        newLabel.attr('for', 'btn-'+s);
        newLabel.html(this.getIcon(s));

        return newLabel;
    }
}


/**
 *
 *
 */
class Timetable
{
	constructor(tableID)
    {
    	this.tableID = tableID;
        this.factory = new TimetableElementFactory;
        this.init();
    }

    init()
    {
        this.addStickyDetector();
    }

    addStickyDetector()
    {
        const el = document.querySelector(".detectSticky")
        const observer = new IntersectionObserver(
          ([e]) => {
            let el = $(".timeTableUser");
            el.toggleClass("isStuck", e.intersectionRatio < 1);
        },
          { threshold: [1] }
        );

        observer.observe(el);
    }

    getActions(clickedElement)
    {
        // convert to JQuery
        let element = $(clickedElement);
        let date = moment(element.attr('data-bl-timetable-date'));
        let status = TimetableStaus[element.attr('data-bl-timetable-status').toUpperCase()];
        // @ToDo
        if(status === undefined)
            console.log('wrong status: ' + element.attr('data-bl-timetable-status').toUpperCase());

        this.factory.TimetableCellStatus = status;

        let container = $('<div id="timetable-container" class="d-flex justify-center"></div>');
        let form = $('<form id="timetable-form" class="justify-center" style="display: flex;"></form>');

        // create elements
        let inputAvailable = this.factory.createInput('available');
        let labelAvailable = this.factory.createLabel('available');
        form.append(inputAvailable);
        form.append(labelAvailable);

        let inputMaybe = this.factory.createInput('maybe');
        let labelMaybe = this.factory.createLabel('maybe');
        form.append(inputMaybe);
        form.append(labelMaybe);

        let labelNoTime = this.factory.createLabel('noTime');
        let inputNoTime = this.factory.createInput('noTime');
        form.append(inputNoTime);
        form.append(labelNoTime);

        // Add onClick event listener
        $(form).children('label').each((k, e) =>
        {
            $(e).on('click', el =>
            {
                $.ajax({
                    url: '/api/v1/timetable/'+date.format('YYYY-MM-DD'),
                    method: 'PUT',
                    data: {
                      status: TimetableStaus[$(e).attr('for').replace('btn-', '').toUpperCase()]
                    },
                    beforeSend: function() {
                        $('#timetable-form').hide();
                        $('#loadingSpinnerContainer').show();
                    },
                    success: function(response) {
                        // looks kinda weird when this switch happens and the popover gets closed right after that
                        // $('#timetable-form').show();
                        // $('#loadingSpinnerContainer').hide();
                        element.attr('data-bl-timetable-status', response.data.status);
                        element.popover('hide');
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // console.log(errorThrown);
                        // handle the error case
                    }
                  });
            });
        });

        let loadingSpinnerContainer = document.createElement("div");
        loadingSpinnerContainer.setAttribute('style', 'display: none;font-size:2rem;');
        loadingSpinnerContainer.id = 'loadingSpinnerContainer';

        let loadingSpinner = document.createElement("i");
        loadingSpinner.classList.add('fa-solid', 'fa-spinner', 'fa-spin-pulse');

        loadingSpinnerContainer.append(loadingSpinner);
        container.append(form);
        container.append(loadingSpinnerContainer);

        return container;
    }
}

// EXPORT
module.exports = Timetable;

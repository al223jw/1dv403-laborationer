"use strict";

function Message(counter, date)
{
    counter.getText = function()
    {
        return counter;
    };

    counter.setText = function(_text)
    {
        counter = _text;
    };


    date.getDate = function()
    {
        return date;
    };
    date.setDate = function(_date)
    {
        date = _date;
    };
}

Message.prototype.toString = function()
{
    return Message.getText()+" ("+Message.getDate()+")";
};

Message.prototype.getHTMLText = function()
{
    return Message.getText().replace(/[\n\r]/g, "<br/>");
};

Message.prototype.getDateText = function()
{
    var h = Message.getDate().getHours();
    var m = Message.getDate().getMinutes();
    var s = Message.getDate().getSeconds();
    var time = h+":"+m+":"+s;
    return time;
};